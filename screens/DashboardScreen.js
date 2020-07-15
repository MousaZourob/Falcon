import React from 'react'
import { Text, View } from 'react-native'
import alpacaAPI from '../services/alpaca'
import { dashboardStyle } from '../styles/style'

class DashboardScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Dashboard',
    };
    constructor(props) {
        super(props)
        
        this.state = {
            buying_power: 0,
            cash: 0,
            long_market_value: 0,
            portfolio_value: 0,
        }
    }

    componentDidMount() {
        console.log('fetch data from alpaca')

        const api = alpacaAPI()

        api.getAccount().then((response) => {
            console.log(response)

            if (response.ok) {
                this.setState({
                    buying_power: response.data.buying_power,
                    long_market_value: response.data.long_market_value,
                    portfolio_value: response.data.portfolio_value,
                    cash: response.data.cash
                })
            }
        })
    }

    render() {
        return <View style = {{flex: 1, flexDirection: 'column'}}>
            
            {/*Account info view*/}
            <View style = {dashboardStyle.account}>
                <Text style = {dashboardStyle.heading}>Account</Text>

                <View style = {dashboardStyle.accountCell}>
                    <View style = {dashboardStyle.subCell}>
                        <Text style = {dashboardStyle.label}>Buying Power:</Text>
                        <Text>{this.state.buying_power}</Text>
                        <Text style = {dashboardStyle.label}>Long Market Value:</Text>
                        <Text>{this.state.long_market_value}</Text>
                    </View>
                    
                    <View style = {dashboardStyle.subCell}>
                        <Text style = {dashboardStyle.label}>Portfolio Value:</Text>
                        <Text>{this.state.portfolio_value}</Text>
                        <Text style = {dashboardStyle.label}>Cash:</Text>
                        <Text>{this.state.cash}</Text>
                    </View>
                </View>
            </View>

            {/*Market info view*/}
            <View style = {{flex: 2, borderWidth: 1, borderColor: 'red'}}>
                <Text>Market:</Text>

                <View style = {{flex: 1, flexDirection: 'row'}}>
                    <View style = {{flex: 1, borderWidth: 1, borderColor: 'orange'}}><Text>DIA</Text></View>
                    <View style = {{flex: 1, borderWidth: 1, borderColor: 'orange'}}><Text>SPY</Text></View>
                    <View style = {{flex: 1, borderWidth: 1, borderColor: 'orange'}}><Text>QAA</Text></View>
                    <View style = {{flex: 1, borderWidth: 1, borderColor: 'orange'}}><Text>IWM</Text></View>
                </View>
            </View>

            {/*Portfolio info view*/}
            <View style = {{flex: 5, borderWidth: 1, borderColor: 'green'}}>

            </View>
        </View>
    }
}

export default DashboardScreen