import React from 'react'
import { FlatList, Text, View } from 'react-native'
import alpacaAPI from '../services/alpaca'
import { activityStyle } from '../styles/activityStyle'

class ActivityScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Account Activity',
        headerStyle: {
            backgroundColor: '#1e222d',
        },
        headerTitleStyle: {
            color: 'white'
        }
    };

    constructor(props) {
        super(props)
        
        this.state = {
            activities: []
        }
    }

    // Alpaca API set up with APISauce
    componentDidMount() {
        const alpaca = alpacaAPI()
        
        // Gets account activities
        alpaca.getActivities().then((response) => {
            if (response.ok) {
                this.setState({
                    activities: response.data
                })
            }
        })
    }

    // Flatlist rendering for order history
    renderRow = ({item}) => {
        return (
            <View key = {item.id} style = {activityStyle.activity}>
                <View style = {activityStyle.leftCell}>
                    <Text style = {activityStyle.symbol}> {item.side.toUpperCase()} {item.symbol} </Text>
                    <Text style = {activityStyle.date}> {item.transaction_time.substring(0,10)} </Text>
                </View>
                <View style = {activityStyle.rightCell}>
                    <Text style = {activityStyle.qty}>  {item.qty} @ {item.price}</Text>
                </View>
            </View> 
        )
    }

    render() {
        return <View style = {activityStyle.screen}>
            {/*Order history view */}
            <View style = {activityStyle.history}>
                {/*Title with horizontal line*/}
                <Text style={activityStyle.heading}>Order history</Text>
                <View
                    style={{
                        borderBottomColor: '#131722',
                        borderBottomWidth: 2,
                        marginBottom: 10,
                    }}
                />

                <FlatList 
                    data = {this.state.activities}
                    renderItem = {this.renderRow}
                    keyExtractor = {item => item.id}
                />
            </View>
        </View>
    }
}

export default ActivityScreen