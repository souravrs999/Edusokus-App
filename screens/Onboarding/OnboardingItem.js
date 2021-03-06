import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';


export default OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();


    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        flex: 0.7,
        maxWidth: 400,
        justifyContent: 'center',
    },

    title: {
        fontWeight: '900',
        fontSize: 30,
        marginBottom: 10,
        color: '#9D02FC',
        textAlign: 'center',
    },

    description: {
        fontWeight: '300',
        color: '#858585',
        textAlign: 'center',
        paddingHorizontal: 64,
    }
});