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
            <View key = {item.asset_id} style = {activityStyle.activity}>
                <View>
                    <Text> {item.side.toUpperCase()} {item.symbol} </Text>
                    <Text> {item.transaction_time.substring(0,10)} </Text>
                </View>
                <View>
                    <Text >  {item.qty} @ {item.price}</Text>
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
                keyExtractor = {item => item.asset_id}
            />
        </View>
    }
}

export default ActivityScreen