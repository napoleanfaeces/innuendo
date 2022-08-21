"use strict";

const UsersDB = require('../models/UsersDB');
const User = require('../models/User');
var jwt = require('jsonwebtoken');
var secret = "somesecretkey";
const { DEC8_BIN } = require('mysql/lib/protocol/constants/charsets');

var usersDB = new UsersDB();

function getAllUsers(request, respond) {
    usersDB.getAllUsers(function(error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addUser(request, respond) {
    var user = new User(null, request.body.username, request.body.email, request.body.password);
    usersDB.addUser(user, function(error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function loginUser(request, respond) {
    var email = request.body.email;
    var password = request.body.password;
    usersDB.loginUser(email, function(error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            const hash = result[0].password;
            var flag = (hash == password);
            if (flag) {
                var token = jwt.sign(email, secret);
                respond.json({result:token});
            }
            else {
                respond.json({result:"invalid"});
            }
        }
    }); 
}

function getUser(request, respond) {
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        usersDB.getUser(decoded, function(error, result) {
            if(error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    } catch (err) {
        respond.json({result:"invalid token"});
    }
}

function updateUser(request, respond) {
    var token = request.body.token;
    var password = request.body.password;
    var profilePicture = request.body.profilePicture;
    try {
        var decoded = jwt.verify(token, secret);
        usersDB.updateUser(decoded, password, profilePicture, function(error, result) {
            if(error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (err) {
        respond.json({result:"Invalid Token"});
    }
}   

function deleteUser(request, respond) {
    var email = request.body.email;
    usersDB.deleteUser(email, function(error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = {getAllUsers, addUser, updateUser, deleteUser, loginUser, getUser};