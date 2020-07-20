import React from 'react'
import { Text, View } from 'react-native'
import alpacaAPI from '../services/alpaca'

class ActivityScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Account Activity',
    };
    constructor(props) {
        super(props)
        
        this.state = {}
    }

    componentDidMount() {
        // Alpaca API
        const alpaca = alpacaAPI()
        
        // Activities request
        alpaca.getActivities().then((response) => {
            if (response.ok) {
                console.log(response)
            }
        })
    }

    render() {
        return <View>
            <Text>Activity Screen</Text>
        </View>
    }
}

export default ActivityScreen