var Raven = require ('raven-js');
var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');

var sentry_key = 'c9b3c0dec97e4c849af6b0a57f9cb637'
var sentry_app = '105198'
var sentry_url = 'https://' + sentry_key + '@sentry.io/' + sentry_app

//Raven.config(sentry_url).install()
Raven.config('https://c9b3c0dec97e4c849af6b0a57f9cb637@sentry.io/105198')
    .install();

ReactDom.render(
    routes,
    document.getElementById('app')
);
