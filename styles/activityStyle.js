import { StyleSheet } from 'react-native'

export const activityStyle = StyleSheet.create({
    screen: {
        backgroundColor: '#131722',
        flex: 1, 
        flexDirection: 'column',
        color: 'white'
    },
    heading: {
        marginLeft: 10,
        margin: 5,
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    history: {
        backgroundColor: '#2a2e39',
        marginTop: 15,
        margin: 5
    },
    activity: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#135c95',
        marginTop: 0,
        margin: 10,
        marginBottom: 15,
        padding: 5,
        borderRadius: 5
    },
    leftCell: {
        flex: 4,
    },
    rightCell: {
        flex: 2,
        marginLeft: 40
    },
    symbol: {
        fontWeight: 'bold',
        color: 'white'
    },
    date: {
        color: '#bababa'
    },
    qty: {
        color: 'white'
    }
})