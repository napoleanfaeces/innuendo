const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    document.getElementById('charactersList').style.display = "inline";

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.title.toLowerCase().includes(searchString) ||
            character.artist.toLowerCase().includes(searchString) ||
            character.genre.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('http://127.0.0.1:8080/everysong');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

var counter = 0;
const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <img style="margin-left: -810px;" src="${character.image}"></img>
                <h2 onclick="setSongTitle(this);" class="songTitle" style="cursor: pointer; margin-left: 90px; margin-top: 20px;">${character.title}</h2>
                <p style="margin-left: 90px;">${character.artist}</p>     
            </li>
        `;
        })
        .join('');
    counter++;
    charactersList.innerHTML = htmlString;
};

loadCharacters();

function setSongTitle(element) {
    var title = element.textContent;

    var getSong = new XMLHttpRequest();

    getSong.open("POST", "http://127.0.0.1:8080/getSong", true);   
    getSong.setRequestHeader("Content-Type", "application/json");
    getSong.onload = function() {
        song = JSON.parse(getSong.responseText);
        console.log(getSong.responseText);
        var title = song[0].title;
        var artist = song[0].artist;
        var genre = song[0].genre;
        var image = song[0].image;
        var preview = song[0].preview
        var response = confirm("Are you sure you want to recommend this song?");
        if (response == true) {
            $('#songAddedModal').modal('show');
            recommendSong(title, artist, genre, image, preview);
        }
    }

    var payload = {title : title};
    getSong.send(JSON.stringify(payload));
}

function recommendSong(title, artist, genre, image, preview) {
    console.log("Recommend")
    var addSong = new XMLHttpRequest();
    addSong.open("POST", "http://127.0.0.1:8080/songs", true);
    addSong.setRequestHeader("Content-Type", "application/json");
    var payload = {title:title, artist:artist, genre:genre, image:image, preview:preview};
    addSong.send(JSON.stringify(payload));
}
