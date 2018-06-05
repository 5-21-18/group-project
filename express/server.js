// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const key = require('./mongokey');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// connecting to mongodb
mongoose.connect(key.mongokey.dbURI, () => {
  console.log("Connected to database");
});

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
