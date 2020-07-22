import { StyleSheet } from 'react-native'

export const dashboardStyle = StyleSheet.create({
    account: {
        margin: 15,
        flex: 3, 
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    label: {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    accountCell: {
        flex: 1,
        flexDirection: 'row'
    },
    subCell: {
        flex: 1
    },
    pHeading: {
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 22,
        fontWeight: 'bold'
    },
    position: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
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
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        color: 'green'
    },
    subheading: {
        color: '#808080'
    },
    indexSymbol: {
        fontSize: 30,
        color: 'white',
    },
    indexPrice: {
        fontSize: 18,
        color: 'white'
    },
    scoreBoard: {
        flex: 1, 
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'green',
        margin: 5,
        borderRadius: 10
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
        flex: 4
    },
    activityRightCell: {
        flex: 2,
        marginLeft: 70
    }
})