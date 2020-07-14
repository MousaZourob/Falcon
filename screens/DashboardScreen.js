import React from 'react'
import { Text, View } from 'react-native'
import alpacaAPI from '../services/alpaca'

class DashboardScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Dashboard',
    };
    constructor(props) {
        super(props)
        
        this.state = {}
    }

    componentDidMount() {
        console.log('fetch data from alpaca')

        const api = alpacaAPI()

        api.getAccount().then((response) => {
            console.log(response)
        })
    }

    render() {
        return <View>
            <Text>Dashboard Screen</Text>
        </View>
    }
}

export default DashboardScreen