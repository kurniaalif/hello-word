const express = require('express');
const connectDB = require('./config/db');
const ejs = require('ejs');
const engine = require('ejs-mate');
const bodyParser = require('body-parser');

//connect to database
connectDB();


const app = express();

//setup engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//home 
app.get('/', (req, res) => res.render('home'));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running In PORT ${PORT}`));