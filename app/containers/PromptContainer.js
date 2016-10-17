var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
    // Pass items to components without props. Use on Router...like a global variable
    // For dynamic routing, DOES NOT SCALE VERY WELL
    // Great for react-router
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    // how to give component a state
    getInitialState: function() {
        return {
            username: '' //usually empty array,object, string
        }
    },
    handleUpdateUser: function(e) {
        this.setState({
            username: e.target.value
        });
    },
    handleSubmitUser: function(e) {
        e.preventDefault();
        var username = this.state.username; // reset state in case someone hits back
        this.setState({
            username: ''
        });
        // Dynmaically changing routes in ReactRouter - concept of context
        // Two ways to use push
        // pass an object with pathname and query for params
        // pass a string with the route you're going to
        if (this.props.routeParams.playerOne) {
            //GotoBattle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        } else {
            this.context.router.push('/playerTwo/' + this.state.username);
        }
    },
    render: function() {
         //any update to this field updates state input
        return(
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username} />
        )
    }
});

module.exports = PromptContainer;
