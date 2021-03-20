import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const Home = () => {

    const clearOnboarding = async () => {
        try {
            const result = await AsyncStorage.getItem('@viewedOnboarding');
            console.log(result);
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (err) {
            console.log('Error @clear onboarding', err)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity
                style={{
                    marginTop: 10,
                    padding: 10,
                    backgroundColor: '#000000',
                }}
                onPress={clearOnboarding}>
                    <Text
                    style={{
                        fontWeight: 'bold',
                        color: '#ffffff'}}>
                    Clear Onboarding
                    </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Home;