import * as fetchServices from '../services/FetchServices';

const saveAllData = (responseTable) => {
    return {
        type: 'GET_ALL_DATA',
        ratesTable: responseTable,
    }
}

export const getAllData = () => {
    return dispatch => {
        fetchServices.getDailyData()
        .then(data => {
            dispatch(saveAllData(data[0].rates))
        })
        .catch(error => console.error('Error:', error))
    }
}

const saveSingleData = (data) => {
    return {
        type: 'GET_SINGLE_DATA',
        ratesTable2: data.rates,
        codeName: data.code,
        currencyName: data.currency,
    }
}

export const getSingleData = (currency, startDate, endDate) => {
    return dispatch => {
        fetchServices.getStartEndDataFetch(currency, startDate, endDate)
        .then(data => {
            dispatch(saveSingleData(data));
        })
        .catch(error => console.error('Error:', error))
    }
}

export const handleCurrencyChange = (chosenCurrency) => {
    return {
        type: 'HANDLE_CHANGE',
        chosenCurrency: chosenCurrency,
    }
}