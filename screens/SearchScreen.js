import React from 'react'
import { Text, View } from 'react-native'

class SearchScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Search',
    };
    constructor(props) {
        super(props)
        
        this.state = {}
    }

    render() {
        return <View>
            <Text>Search Screen</Text>
        </View>
    }
}

export default SearchScreen