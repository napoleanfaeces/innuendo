"use strict";

class Song {
    constructor(id, title, artist, genre, image, preview) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.image = image;
        this.preview = preview;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }
    
    getArtist() {
        return this.artist;
    }

    getGenre() {
        return this.genre;
    }

    getImage() {
        return this.image;
    }

    getPreview() {
        return this.preview;
    }
}

module.exports = Song;