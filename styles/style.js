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
    positions: {
        flex: 1,
        flexDirection: 'row'
    },
    positionsLeftCell: {
        flex: 4
    },
    positionsRightCell: {
        flex: 1
    }
})