import React from 'react'
import { FlatList, Text, View } from 'react-native'
import alpacaAPI from '../services/alpaca'
import { dashboardStyle } from '../styles/dashboardStyle'
import DashboardScreen from './DashboardScreen';

class ActivityScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Account Activity',
    };
    constructor(props) {
        super(props)
        
        this.state = {
            activities: []
        }
    }

    componentDidMount() {
        // Alpaca API
        const alpaca = alpacaAPI()
        
        // Activities request
        alpaca.getActivities().then((response) => {
            if (response.ok) {
                this.setState({
                    activities: response.data
                })
            }
        })
    }

    renderRow = ({item}) => {
        return (
            <View key = {item.asset_id} style = {dashboardStyle.activity}>
                <View style = {dashboardStyle.activityLeftCell}>
                    <Text style = {dashboardStyle.activitySymbol}> {item.side.toUpperCase()} {item.symbol} </Text>
                    <Text style = {dashboardStyle.activityDate}> {item.transaction_time.substring(0,10)} </Text>
                </View>
                <View style = {dashboardStyle.activityRightCell}>
                    <Text >  {item.qty} @ {item.price}</Text>
                </View>
            </View> 
        )
    }

    render() {
        return <View>
            <Text style = {dashboardStyle.pHeading}>Orders</Text>
            <FlatList 
                data = {this.state.activities}
                renderItem = {this.renderRow}
                keyExtractor = {item => item.asset_id}
            />
        </View>
    }
}

export default ActivityScreen