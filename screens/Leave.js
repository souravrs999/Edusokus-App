import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

const Leave = () => {
    return(
        <View style={styles.container}>
            <Text>Leave</Text>
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

export default Leave;