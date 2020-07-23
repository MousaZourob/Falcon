import { StyleSheet } from 'react-native'

export const dashboardStyle = StyleSheet.create({
    screen: {
        backgroundColor: '#131722',
        flex: 1, 
        flexDirection: 'column',
        color: 'white'
    },
    account: {
        marginTop: 15,
        margin: 5,
        flex: 3, 
        backgroundColor: '#2a2e39',
        paddingBottom: 30,
        paddingLeft: 10,
        paddingTop: 5
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    label: {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    accountInfo: {
        color: 'white'
    },
    accountCell: {
        flex: 1,
        flexDirection: 'row',
    },
    subCell: {
        flex: 1
    },
    pHeading: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    market: {
        flex: 3,
        backgroundColor: '#2a2e39',
        margin: 5,
        paddingTop: 5,
        paddingBottom: 10
    },
    position: {
        flex: 5,
        backgroundColor: '#2a2e39',
        margin: 5,
        paddingTop: 5,
    },
    positions: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
        borderColor: 'white',
        padding: 5,
        borderRadius: 10
    },
    positionsLeftCell: {
        flex: 4
    },
    positionsRightCell: {
        flex: 1
    },
    tickerSymbol: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        color: 'green'
    },
    subheading: {
        color: '#a3a2a2'
    },
    indexSymbol: {
        fontSize: 30,
        color: 'white',
    },
    indexPrice: {
        fontSize: 16,
        color: 'white'
    },
    scoreBoard: {
        flex: 1, 
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: '#135c95',
        margin: 5,
        borderRadius: 10,
        marginBottom: -3
    },
    activity: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    activityLeftCell: {
        flex: 4,
    },
    activityRightCell: {
        flex: 2,
        marginLeft: 70
    },
    activitySymbol: {
        fontWeight: 'bold'
    },
    activityDate: {
        color: '#808080'
    }
})