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
            {this.state.activities.map((activity) => <View>
                    <Text>activity</Text>
                </View>
            )}
        </View>
    }
}

export default ActivityScreen