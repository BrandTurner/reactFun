var React = require('react');

// Stateless Functional components

function ConfirmBattle (props) {
    return props.isLoading == true
        ? <p> LOADING!!! </p>
        : <p> CONFIRM BATTLE </p>
}

module.exports = ConfirmBattle;
