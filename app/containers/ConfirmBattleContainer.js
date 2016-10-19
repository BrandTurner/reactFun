var React         = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    // Performing Routing inside of the page on the buttons
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        console.log('getInitialState')
        return{
            isLoading: true,
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
        // getPlayersInfo is a promise, so you can call .then on that promise
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function (players) {
                // after receiving promise, change the state
                this.setState({
                    isLoading: false,
                    playerInfo: [players[0], players[1]]
                })
            }.bind(this))
    },
    handleInitiateBattle: function() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playerInfo: this.state.playerInfo
            }
        })
    },
    render: function() {
        return (
            <ConfirmBattle
                isLoading   = {this.state.isLoading}
                onInitiateBattle = {this.handleInitiateBattle}
                playerInfo  = {this.state.playerInfo} />
        )
    }
})

module.exports = ConfirmBattleContainer;
