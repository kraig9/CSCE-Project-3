exports = function app() {
    this.func = function() {
        var request = require('request'); // "Request" library

        var client_id = 'aff0745f7a4e45feabfd822fb8b780fd'; // Your client id
        var client_secret = 'ac32d4ff7b254af8bf222d5fdffb1cb0'; // Your secret

        // your application requests authorization
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        };

        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                // use the access token to access the Spotify Web API
                var token = body.access_token;
                var options = {
                    url: 'https://api.spotify.com/v1/search?q=kanye&type=artist&limit=1&offset=0',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };
                request.get(options, function(error, response, body) {
                    console.log(body.artists.items[0].name);
                    console.log(body.artists.items[0].id);
                    console.log(body.artists.items[0].popularity);
                });
            }
        });
    }
}
