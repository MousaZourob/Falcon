import apisauce from 'apisauce'
import config from '../config'

const alpacaAPI = (baseURL = config.ALPACA_URL) => {

    const api = apisauce.create({
        baseURL: config.ALPACA_URL,
        headers: {
            'APCA-API-KEY-ID': config.ALPACA_API_KEY_ID,
            'APCA-API-SECRET-KEY': config.ALPACA_API_SECRET_KEY
        },
        timout: 5000
    })

    const data = apisauce.create({
        baseURL: config.DATA_URL,
        headers: {
            'APCA-API-KEY-ID': config.ALPACA_API_KEY_ID,
            'APCA-API-SECRET-KEY': config.ALPACA_API_SECRET_KEY
        },
        timout: 5000
    })
    
    const getAccount = () => api.get('v2/account')
    const getPositions = () => api.get('v2/positions')
    const getMarket = () => data.get('v1/bars/day?symbols=DIA&limit=1')
    const getActivities = () => api.get('v2/account/activities')

    return {
        getAccount,
        getPositions,
        getActivities,
        getMarket
    }
}

export default alpacaAPI