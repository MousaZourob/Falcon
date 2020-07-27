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
        paddingBottom: 40,
        paddingLeft: 10,
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
        marginBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    market: {
        flex: 4,
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
        color: 'white'
    },
    subheading: {
        color: '#bababa'
    },
    changeD: {
        color: '#e53935'
    },
    changeU: {
        color: '#017b6f'
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
})