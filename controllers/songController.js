"use strict";

const SongsDB = require('../models/SongsDB');
const Song = require('../models/Song');

var songsDB = new SongsDB();

function getAllSongs(request, respond) {
    songsDB.getAllSongs(function(error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function getEverySong(request, respond) {
    songsDB.getEverySong(function(error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function getSong(request, respond) {
    var title = request.body.title;
    try {
        songsDB.getSong(title, function(error, result) {
            if(error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (err) {
        respond.json({result: "invalid song title"});
    }
}

function addSong(request, respond) {
    var song = new Song(null, request.body.title, request.body.artist, request.body.genre, request.body.image, request.body.preview);
    songsDB.addSong(song, function(error, result) {
        if(error) {
            respond.json(error);
        }
        else {
            respond.json(result);   
        }
    });
}

module.exports = {getAllSongs, getEverySong, getSong, addSong};