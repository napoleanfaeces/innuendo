function getEverySongData() {
    var request = new XMLHttpRequest();
    request.open("GET", everysong_url, true);
    //This function will be called when data returns from the web api
    request.onload = function () {
      
      everysong_array = JSON.parse(request.responseText);
      
      displayRestaurants();
    };
  
    //This command starts the calling of the restaurants web api
    request.send();
  }