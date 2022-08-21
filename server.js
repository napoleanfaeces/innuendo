var express = require("express"); // using the express framework

var songController = require('./controllers/songController');
var userController = require('./controllers/userController');
var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/songs').get(songController.getAllSongs); 
app.route('/everysong').get(songController.getEverySong);
app.route('/getSong').post(songController.getSong);
app.route('/songs').post(songController.addSong);
app.route('/users').get(userController.getAllUsers);
app.route('/users').post(userController.addUser);
app.route('/users').put(userController.updateUser);
app.route('/users').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);
app.route('/getUser').post(userController.getUser);

app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("Web server running @ http://127.0.0.1:8080"); // output to console
