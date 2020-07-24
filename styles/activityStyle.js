import { StyleSheet } from 'react-native'

export const activityStyle = StyleSheet.create({
    pHeading: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    activity: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    leftCell: {
        flex: 4,
    },
    rightCell: {
        flex: 2,
        marginLeft: 70
    },
    symbol: {
        fontWeight: 'bold'
    },
    date: {
        color: '#808080'
    },
    screen: {
        backgroundColor: '#131722',
        flex: 1, 
        flexDirection: 'column',
        color: 'white'
    },
})