import React from 'react'
import { FlatList, Text, View } from 'react-native'
import alpacaAPI from '../services/alpaca'
import polygonAPI from '../services/polygon'
import { dashboardStyle } from '../styles/style'
import { Ionicons } from '@expo/vector-icons'

class DashboardScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Dashboard',
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
            buying_power: 0,
            cash: 0,
            long_market_value: 0,
            portfolio_value: 0,
            positions: []
        }
    }

    componentDidMount() {
        // Alpaca API
        const alpaca = alpacaAPI()

        alpaca.getAccount().then((response) => {
            if (response.ok) {
                this.setState({
                    buying_power: response.data.buying_power,
                    long_market_value: response.data.long_market_value,
                    portfolio_value: response.data.portfolio_value,
                    cash: response.data.cash
                })
            }
        })

        alpaca.getPositions().then((response) => {
            if (response.ok) {
                this.setState({
                    positions: response.data
                })
            }
        }) 
        

        // For when I get polygon api to work
        /*const symbols = ['DIA', 'SPY', 'QQQ', 'IWM']
        const polygon = polygonAPI()

        symbols.map((symbol) => {
            polygon.getQuote('SPY').then((response) => {
                console.log('response from polygon API')
                console.log(response)
                
                let state = this.state
                state[symbol] = response.data.ticker.lastTrade.p

                this.setState(state)
            })
        })*/
    }

    renderRow = ({item}) => {
        return (
            <View key = {item.asset_id} style = {dashboardStyle.position}>
                <View style = {dashboardStyle.positionsLeftCell}>
                    <Text style = {dashboardStyle.tickerSymbol}> {item.symbol} </Text>
                    <Text style = {dashboardStyle.subheading}> {item.qty} @ {item.avg_entry_price} </Text>
                </View>
                <View style = {dashboardStyle.positionsRightCell}>
                    <Text style = {dashboardStyle.price}> {item.current_price} </Text> 
                    <Text style = {dashboardStyle.subheading}>
                        {(item.change_today * 100).toFixed(2)} {/*make arrow up or down based on stock*/}
                        <Ionicons name="md-arrow-dropdown" size={22} color="green"></Ionicons> {/*make text red or green based on stock*/}
                    </Text> 
                </View>
            </View> 
        )
    }
    
    render() {
        return <View style = {dashboardStyle.screen}>
            {/*Account info view*/}
            <View style = {dashboardStyle.account}>
                <Text style = {dashboardStyle.heading}>Account</Text>

                <View style = {dashboardStyle.accountCell}>
                    <View style = {dashboardStyle.subCell}>
                        <Text style = {dashboardStyle.label}>Buying Power:</Text>
                        <Text style = {dashboardStyle.accountInfo}>{this.state.buying_power}</Text>
                        <Text style = {dashboardStyle.label}>Long Market Value:</Text>
                        <Text style = {dashboardStyle.accountInfo}>{this.state.long_market_value}</Text>
                    </View>
                    
                    <View style = {dashboardStyle.subCell}>
                        <Text style = {dashboardStyle.label}>Portfolio Value:</Text>
                        <Text style = {dashboardStyle.accountInfo}>{this.state.portfolio_value}</Text>
                        <Text style = {dashboardStyle.label}>Cash:</Text>
                        <Text style = {dashboardStyle.accountInfo}>{this.state.cash}</Text>
                    </View>
                </View>
            </View>

            {/*Market info view*/}
            <View style = {dashboardStyle.market}>
                <Text style = {dashboardStyle.pHeading}>Market</Text>

                <View style = {{flex: 1, flexDirection: 'row'}}>
                    <View style = {dashboardStyle.scoreBoard}>
                        <Text style = {dashboardStyle.indexSymbol}>DIA</Text>
                        <Text style = {dashboardStyle.indexPrice}>286 <Ionicons name="md-arrow-dropdown" size={22} color="white"></Ionicons></Text>
                    </View>

                    <View style = {dashboardStyle.scoreBoard}>
                        <Text style = {dashboardStyle.indexSymbol}>SPY</Text>
                        <Text style = {dashboardStyle.indexPrice}>322.5 <Ionicons name="md-arrow-dropdown" size={22} color="white"></Ionicons></Text>
                    </View>

                    <View style = {dashboardStyle.scoreBoard}>
                        <Text style = {dashboardStyle.indexSymbol}>QAA</Text>
                        <Text style = {dashboardStyle.indexPrice}>213.33 <Ionicons name="md-arrow-dropdown" size={22} color="white"></Ionicons></Text>
                    </View>

                    <View style = {dashboardStyle.scoreBoard}>
                        <Text style = {dashboardStyle.indexSymbol}>IWM</Text>
                        <Text style = {dashboardStyle.indexPrice}>166.53 <Ionicons name="md-arrow-dropdown" size={22} color="white"></Ionicons></Text>
                    </View>
                </View>
            </View>

            {/*Portfolio info view*/}
            <View style = {{flex: 5}}>
                <Text style = {dashboardStyle.pHeading}>Positions</Text>
                <FlatList 
                    data = {this.state.positions}
                    renderItem = {this.renderRow}
                    keyExtractor = {item => item.asset_id}
                />
            </View>
        </View>
    }
}

export default DashboardScreen