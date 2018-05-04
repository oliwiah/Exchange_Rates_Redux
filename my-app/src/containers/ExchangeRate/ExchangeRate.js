import React from 'react';
import './ExchangeRate.css';
import {
    CurrencyBtn,
    DateBtn,
    SearchBtn
} from '../../components/Buttons/Buttons';
import CurrencyList from '../../components/FullTable/FullTable';
import CustomCurrencyList from '../../components/CustomTable/CustomTable';
import moment from 'moment';
import {
    withRouter,
    Route,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class ExchangeRate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueStart: moment(),
            valueEnd: moment(),
            chosenCurrency: '',
        };

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        this.props.getAllData();
    }

    handleChangeCurrency(chosenCurrency2) {
        this.setState({
            ...this.state,
            chosenCurrency: chosenCurrency2,
        })
    }

    handleChangeStart(value) {
        this.setState({
            ...this.state,
            valueStart: value
        });
    }

    handleChangeEnd(value) {
        this.setState({
            ...this.state,
            valueEnd: value
        });
    }

    validateForm() {
        if (this.state.chosenCurrency.toString().length !== 3) {
            alert('Currency MUST be chosen');
            return false;
        }

        if (this.state.valueStart > moment()) {
            alert(`start value MUST NOT be set as a future date`);
            return false
        }

        if (this.state.valueEnd > moment()) {
            alert(`end value MUST NOT be set as a future date`);
            return false
        }

        if (this.state.valueStart.isAfter(this.state.valueEnd)) {
            alert('Start date value MUST be earlier than end date!');
            /* ten false chyba nic nie robi */
            return false;
        }

        /* API allows to get data for max 367 days; the value below is in msec */
        if ((this.state.valueStart.toString() - this.state.valueEnd.toString()) > 31708800000) {
            alert('You may ask for maximum 93 days table rate');
            return false;
        }

        return true;
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        let startDataSec = this.state.valueStart.toJSON().slice(0, -14);
        let endDataSec = this.state.valueEnd.toJSON().slice(0, -14);

        this.props.getSingleData(this.state.chosenCurrency, startDataSec, endDataSec);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() =>
                    <div className="container">
                        <CurrencyList ratesTable={this.props.ratesTable} />
                    </div>
                } />
                <Route path="/search" render={() =>
                    <div>
                        <form className="buttons" onSubmit={this.handleSubmit}>
                            <CurrencyBtn
                                ratesTable={this.props.ratesTable}
                                /* when I changed this.state.chosenCurrency into this.props.chosenCurrency, I have lost default 'Select' text* */
                                chosenCurrency={this.props.chosenCurrency}
                                onChange={this.handleChangeCurrency}
                            />
                            <DateBtn
                                name={"Start date:"}
                                value={this.state.valueStart}
                                onChange={this.handleChangeStart}
                            />
                            <DateBtn
                                name={"End date:"}
                                value={this.state.valueEnd}
                                onChange={this.handleChangeEnd}
                            />
                            <SearchBtn
                                onSubmit={this.handleSubmit}
                            />
                        </form>
                        <div className="container">
                            <CustomCurrencyList
                                startDate={this.state.valueStart}
                                endDate={this.state.valueEnd}
                                chosenCurrency={this.props.chosenCurrency}
                                ratesTable2={this.props.ratesTable2}
                                codeName={this.props.codeName}
                                currencyName={this.props.currencyName}
                                valueStart={this.state.valueStart}
                                valueEnd={this.state.valueEnd}
                            />
                        </div>
                    </div>
                } />
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ratesTable: state.ratesTable,
        ratesTable2: state.ratesTable2,
        currencyName: state.currencyName,
        codeName: state.codeName,
        chosenCurrency: state.chosenCurrency,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllData: () => dispatch(actions.getAllData()),
        getSingleData: (currency, startDate, endDate) => dispatch(actions.getSingleData(currency, startDate, endDate)),
        handleCurrencyChange: () => dispatch(actions.handleCurrencyChange()),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExchangeRate));