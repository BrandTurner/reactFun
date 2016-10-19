var axios = require('axios');

var id = 'CLIENT_ID';
var secret = 'SECRET_ID';
var param = '?client_id=' + id + "&client_secret=" + secret;

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username)
}

// For each username in the players array, calling getUserInfo,
// returns an array of promises
// axios.all => given an array of promises

function getRepos (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getTotalStars(repos) {
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count;
    }, 0)
}

function getPlayersData (player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function (totalStars) {
            return {
                followers:player.followers,
                totalStars: totalStars
            }
        })
}

function calculateScores(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars,
    ]
}

var helpers = {
    getPlayersInfo: function (players) {
        //fetch data from github
        return axios.all(players.map(function (username) {
            return getUserInfo(username)
        })).then(function (info) {
            return info.map(function (user) {
                return user.data;
            })
        }).catch(function (err) { // any error thrown, add aftr pr
            console.warn('Error in getPlayersInfo', err);
        })
    },
    battle: function (players) {
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function (err) {
                console.warn('error player data');
            })
    },
    hello: function () {
        console.log('hello')
    }
};

module.exports = helpers
