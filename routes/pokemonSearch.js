var EventEmitter = require("events").EventEmitter;
var http = require("http");
var util = require("util");

/**
 * An EventEmitter to get a pokemon object from .
 * @param PKMNSearch
 * @constructor
 */
function Pokemon(PKMNSearch) {

    EventEmitter.call(this);

    profileEmitter = this;

    //Connect to the API URL (http://teamtreehouse.com/PKMNSearch.json)
    var request = http.get('http://pokeapi.co/api/v1/pokemon/'+ PKMNSearch + '/', function(response) {
        var body = "";

        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            profileEmitter.emit("error", new Error("There was an error getting the profile for " + PKMNSearch + ". (" + http.STATUS_CODES[response.statusCode] + ")"));
        }

        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
            profileEmitter.emit("data", chunk);
        });

        response.on('end', function () {
            if(response.statusCode === 200) {
                try {
                    //Parse the data
                    var profile = JSON.parse(body);
                    profileEmitter.emit("end", profile);
                } catch (error) {
                    profileEmitter.emit("error", error);
                }
            }
        }).on("error", function(error){
            profileEmitter.emit("error", error);
        });
    });
}

util.inherits( Pokemon, EventEmitter );

module.exports = Pokemon;