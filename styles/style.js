import { StyleSheet } from 'react-native'

export const dashboardStyle = StyleSheet.create({
    account: {
        margin: 15,
        flex: 3, 
    },
    heading: {
        fontSize: 24,
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
        margin: 15,
        fontSize: 24,
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
})