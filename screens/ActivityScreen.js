import React from 'react'
import { Text, View } from 'react-native'
import alpacaAPI from '../services/alpaca'

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
                console.log(response)
                this.setState({
                    activities: response.data
                })
            }
        })
    }

    render() {
        return <View>
            {this.state.activities.map((activity) => <View key={activity.key}>
                    <Text>{activity.symbol}</Text>
                    <Text>{activity.side} {activity.qty} @ {activity.price}</Text>
                    <Text>{activity.transaction_time.substring(0,10)}</Text>
                </View>
            )}
        </View>
    }
}

export default ActivityScreen