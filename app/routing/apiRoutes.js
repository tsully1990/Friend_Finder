var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var input = req.body
        var responses = input.scores;

        var matchName = "";
        var matchImage = "";
        var difference = 100;

        for (var i in friends){
            var diff = 0;
            for (var j in responses) {
                    diff += Math.abs(parseInt(friends[i].scores) - parseInt(responses[j]));
            } if (diff < difference){
                difference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo
            }
        };

        friends.push(input);

        res.json( { status: "OK", matchName: matchName, matchImage: matchImage})

    });

};

