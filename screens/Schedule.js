import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

const Schedule = () => {
    return(
        <View style={styles.container}>
            <Text>Schedule</Text>
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


export default Schedule;