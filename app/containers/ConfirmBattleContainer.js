var React         = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
    // Performing Routing inside of the page on the buttons
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        console.log('getInitialState')
        return{
            isLoading: false,
            playerInfo: []
        }
    },
    componentWillMount: function() {
        console.log('componentWillMount')
    },
    componentDidMount: function() {
        console.log('componentDidMount')
        var query = this.props.location.query;
        // fetch info from github, and update state
    },
    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps')
    },
    componentWillUnmount: function() {
        console.log('componentWillUnmount')
    },
    render: function() {
        return (
            <ConfirmBattle
                isLoading   = {this.state.isLoading}
                playerInfo  = {this.state.playerInfo} />
        )
    }
})

module.exports = ConfirmBattleContainer;
