import React,
{
  useState,
  useEffect
} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import {
  Home,
  Schedule,
  Leave
} from './screens'
import Tabs from './navigation/tabs'
import OnBoarding from './screens/OnBoarding'

const Stack = createStackNavigator();

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#f4323f" animating={true} />
    </View>
  );
};

const App = () => {

  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewOnboarding] = useState(false);

  // Check if the user has viewed onboarding previously
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      console.log(value);
      if (value !== null) {
        setViewOnboarding(true)
      }

    } catch (err) {
      console.log('Error @checkonboarding:', err)

    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false
        }}

      // this only renders the onboarding screens one time during
      // the first lauch of the app else renders the Home screen
      initialRouteName={(viewedOnboarding ? "Home" : "Onboarding")}
      >
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Leave" component={Leave} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;