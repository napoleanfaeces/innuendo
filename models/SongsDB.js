"use strict";

var db = require("../db-connections");
class SongsDB {
  getAllSongs(callback) {
      var sql = "SELECT * from song_database.song";
      db.query(sql, callback);
  }

  getEverySong(callback) {
    var sql = "SELECT * from song_database.allsongs";
    db.query(sql, callback);
  }

  getSong(title, callback) {
    var sql = "SELECT distinct title, artist, genre, image, preview from song_database.allsongs where title = ?";
    db.query(sql, [title], callback);
  }

  addSong(song, callback) {
    var sql = "INSERT INTO song_database.song (title, artist, genre, image, preview) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [song.getTitle(), song.getArtist(), song.getGenre(), song.getImage(), song.getPreview()], callback);
  }
}

module.exports = SongsDB;
