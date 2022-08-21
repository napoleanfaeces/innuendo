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

app.listen(8080, "ec2-18-232-209-130.compute-1.amazonaws.com"); // start the nodejs to be listening for incoming request @ port 8080
console.log("Web server running @ http://ec2-18-232-209-130.compute-1.amazonaws.com:8080"); // output to console
