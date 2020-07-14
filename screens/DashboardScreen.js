import React from 'react'
import { Text, View } from 'react-native'

class DashboardScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Dashboard',
    };
    constructor(props) {
        super(props)
        
        this.state = {}
    }

    render() {
        return <View>
            <Text>Dashboard Screen</Text>
        </View>
    }
}

export default DashboardScreen