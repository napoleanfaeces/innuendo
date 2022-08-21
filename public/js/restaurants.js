function getRestaurantData() {
  var request = new XMLHttpRequest();
  request.open("GET", song_url, true);
  //This function will be called when data returns from the web api
  request.onload = function () {
    //get all the restaurants records into our restaurant array
    restaurant_array = JSON.parse(request.responseText);
    //call the function so as to display all restaurants tiles for "Now Showing"
    displayRestaurants();
  };

  //This command starts the calling of the restaurants web api
  request.send();
}

function displayRestaurants() {
  var table = document.getElementById("topRestaurantsTable");
  var restaurantCount = 0;
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  var count2 = totalRestaurants - 15;
  for (var count = totalRestaurants - 1; count >= count2; count--) {
    var image = restaurant_array[count].image;
    var title = restaurant_array[count].title;
    var artist = restaurant_array[count].artist;
    var genre = restaurant_array[count].genre;
    var cell =
      '<div class="card col-md-4" style="background: none; margin-left: -6px; border: none;" ><img class="card-img-top" src="' + image + '" alt="Card image cap" style="width: 80px;">\
      <div class="card-body">\
      <p style="color: white; font-size: 18px; margin-left: 70px; margin-top: -70px;">' + title + "</p><p style='color: white; font-size; 14px; margin-left: 70px; margin-top: -13px;'>" + artist + "</p><div style='background-color: #32252B; width: fit-content; height: 22px; color: white; margin-left: 70px; margin-top: -100px;'><p style='padding-left: 4px; padding-right: 4px;'>" + genre + '</p></div>\
      <i onclick="playPreview(this);" item="' + count + '"class="fa-regular fa-circle-play fa-3x" style="color: white; margin-top: -5px; margin-left: 360px; cursor: pointer;"></i>\
      </div>\
      </div>"';
    table.insertAdjacentHTML("beforeend", cell);
    restaurantCount++;
  }
}

function playPreview(element) {
  var item = element.getAttribute("item");
  var currentIndex = item;
  var website = restaurant_array[currentIndex].preview;
  var audio = new Audio(website);
  audio.volume = 0.5;
  audio.play();
}
