/* not working Redux version */
// function startEndDateUrl(chosenCurrency, startDataSec, endDataSec) {
//     const customUrl =  `www.api.nbp.pl/api/exchangerates/rates/c/${chosenCurrency}/${startDataSec}/${endDataSec}/?format=json`;
//     return customUrl;
// }

// export function getStartEndDataFetch() {
//     return dispatch => {
//         return fetch(startEndDateUrl(), {
//             method: 'GET',
//         })
//         .then(data => data.json())
//     };
// }

// function dailyUrl() {
//     const dailyUrl = "www.api.nbp.pl/api/exchangerates/tables/c/today/?format=json";
//     return dailyUrl;
// }

// export function getDailyData() {
//     return (dispatch) => {
//         dispatch(getDailyData());
//         return fetch(dailyUrl(), {
//             method: 'GET',
//         })
//         .then(data => data.json())
//     };
// }

export function getStartEndDataFetch(chosenCurrency, startDataSec, endDataSec) {
    return (
        fetch(`http://api.nbp.pl/api/exchangerates/rates/c/${chosenCurrency}/${startDataSec}/${endDataSec}/?format=json`)
            .then(data => data.json())
    )
}

export function getDailyData() {
    return (
        fetch(`http://api.nbp.pl/api/exchangerates/tables/c/?format=json`)
            .then(data => data.json())
    )
}