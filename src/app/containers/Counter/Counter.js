import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button'; // be smart! Require only the necessary

import { increment, decrement } from '../../actions';

function CounterPage({ value, doIncrement, doDecrement }) {
    return (
        <div>
            <h1>Check that counter: {value}</h1>
            <Button
                bsStyle="primary"
                onClick={doIncrement}
            >
                increment +
            </Button>
            {' '}
            <Button
                bsStyle="primary"
                onClick={doDecrement}
            >
                decrement -
            </Button>
        </div>
    );
}

CounterPage.propTypes = {
    value: PropTypes.number.isRequired,
    doIncrement: PropTypes.func.isRequired,
    doDecrement: PropTypes.func.isRequired,
};

module.exports = connect(
    // mapStateToProps
    state => ({
        value: state.get('counter').value,
    }),
    // mapDispatchToProps
    dispatch => ({
        doIncrement: () => dispatch(increment()),
        doDecrement: () => dispatch(decrement()),
    })
)(CounterPage);
