const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 4000;


//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});

//planet database
const planets = [{name:'Mercury', radiusmiles: 1,516, year: 88 days, hightemp: 800, lowtemp: -290, type: rocky, numberofmoons: 0, img:'url'},
{name: Venus, radiusmiles: , year: , hightemp: , lowtemp: , type: 'rocky', numberofmoons: 0, img:'url'}
{name: Earth, radiusmiles: , year: 365 , hightemp: , lowtemp: , type: 'rocky', numberofmoons: 1, img:'url'}
{name: Mars, radiusmiles: , year: , hightemp: , lowtemp: , type: '', numberofmoons: 0, img:'url'}
{name: Jupiter, radiusmiles: , year:  , hightemp: , lowtemp: , type: 'gas giant', numberofmoons: 1, img:'url'}
{name: Saturn, radiusmiles: , year: , hightemp: , lowtemp: , type: 'gas giant', numberofmoons: 0, img:'url'}
{name: Uranus, radiusmiles: , year:  , hightemp: , lowtemp: , type: '', numberofmoons: 1, img:'url'}
{name: Neptune, radiusmiles: , year: , hightemp: , lowtemp: , type: '', numberofmoons: 0, img:'url'}]


app.get('/api/planets', (req, res) => {

  res.json(planets);
});

