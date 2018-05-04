# Exchange Rates Application with React and Redux

This project is an application showing current exchange rates table from [National Polish Bank](http://api.nbp.pl/en.html) and allowing to search for an exchange rates of a certain currency between choosen dates.

The project has been bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Technologies used

* ReactJS with React Router and Reactstrap (only for buttons)
* Redux
* CSS
* Ajax / Fetch API

## Functionality

With [this app](http://exchange-rates-redux.surge.sh/) you can check current ratestable as well as search for rates of a certain currency between chosen dates (up to 367 days long).

## Used methods

* React Routing to clear the view for the user,
* Redux to keep states of rates tables in one store,
* Loader sign to inform the user that the API request is fetching,
* Form validation not to allow the user to send incomprehensible requests to the API server.

[PREVIEW MY APP](http://exchange-rates-redux.surge.sh/)
