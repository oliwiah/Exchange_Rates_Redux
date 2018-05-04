const initialState = {
    ratesTable: [],
    // valueStart: moment(),
    // valueEnd: moment(),
    // chosenCurrency: '',
    ratesTable2: [],
    codeName: '',
    currencyName: '',
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_DATA':
            return {
                ...state,
                ratesTable: action.ratesTable,
            }
        case 'GET_SINGLE_DATA':
            return {
                ...state,
                ratesTable2: action.ratesTable2,
                codeName: action.codeName,
                currencyName: action.currencyName,
            }
        default:
            return state;
    }
}

export default appReducer;