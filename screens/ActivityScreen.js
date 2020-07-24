import React from 'react'
import { FlatList, Text, View } from 'react-native'
import alpacaAPI from '../services/alpaca'
import { activityStyle } from '../styles/activityStyle'

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
            <View key = {item.id} style = {activityStyle.activity}>
                <View style = {activityStyle.leftCell}>
                    <Text style = {activityStyle.symbol}> {item.side.toUpperCase()} {item.symbol} </Text>
                    <Text style = {activityStyle.date}> {item.transaction_time.substring(0,10)} </Text>
                </View>
                <View style = {activityStyle.rightCell}>
                    <Text>  {item.qty} @ {item.price}</Text>
                </View>
            </View> 
        )
    }

    render() {
        return <View>
            <Text style={activityStyle.pHeading}>Orders</Text>
            <FlatList 
                data = {this.state.activities}
                renderItem = {this.renderRow}
                keyExtractor = {item => item.id}
            />
        </View>
    }
}

export default ActivityScreen