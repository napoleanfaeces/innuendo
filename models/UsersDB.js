"use strict";

const { profile } = require('console');
const { disable } = require('express/lib/application');
var db = require('../db-connections');
class UsersDB {
    getAllUsers(callback) {
        var sql = "SELECT * from song_database.user";
        db.query(sql, callback);
    }

    getUser(email, callback) {
        var sql = "SELECT distinct username, email from song_database.user where email = ?";
        db.query(sql, [email], callback);
    }

    loginUser(email, callback) {
        var sql = "SELECT password from song_database.user WHERE email = ?";
        db.query(sql, [email], callback);
    }

    addUser(user, callback) {
        var sql = "INSERT INTO song_database.user (username, email, password) VALUES (?, ?, ?)";
        db.query(sql, [user.getUsername(), user.getEmail(), user.getPassword()], callback);
    }

    updateUser(email, password, callback) {
        var sql = "UPDATE song_database.user SET password = ? WHERE email = ?";
        return db.query(sql, [password, email], callback);
    }

    deleteUser(email, callback) {
        var sql = "DELETE from song_database.user WHERE email = ?";
        return db.query(sql, [email], callback);
    }
}

module.exports = UsersDB;