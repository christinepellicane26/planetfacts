const express = require('express');
const app = express();
// const morgan = require('morgan');
const port = 4000;


//Middleware
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});

//planet database
const planets = [
{name: 'Mercury', radiusmiles: "1,516", year: '88 Earth days', hightemp: '800F', lowtemp: '-290F', type: 'rocky', numberofmoons: 0, img:'url'},
{name: 'Venus', radiusmiles: "3,760", year: '225 Earth days', hightemp: '880F', lowtemp: '880F', type: 'rocky', numberofmoons: 0, img:'url'},
{name: 'Earth', radiusmiles: "3,959", year: '365 Earth days', hightemp: '136F', lowtemp: '-126F', type: 'rocky', numberofmoons: 1, img:'url'},
{name: 'Mars', radiusmiles: "2,106", year: '670 Earth days', hightemp: '70F', lowtemp: '-225F', type: 'rocky', numberofmoons: 2, img:'url'},
{name: 'Jupiter', radiusmiles: "43,441", year: '4,333 Earth days', hightemp: '90,032F', lowtemp: '90,032F', type: 'gas giant', numberofmoons: 79, img:'url'},
{name: 'Saturn', radiusmiles: "36,183", year: '10,759 Earth days', hightemp: '134F', lowtemp:'-280F' , type: 'gas giant', numberofmoons: 53, img:'url'},
{name: 'Uranus', radiusmiles: "15,759", year: '30,687 Earth days', hightemp: '-240F', lowtemp: '-370F', type: 'ice giant', numberofmoons: 27, img:'url'},
{name: 'Neptune', radiusmiles: "15,299", year: '60,190 Earth days', hightemp: '-328F', lowtemp:'-360F', type: 'ice giant', numberofmoons: 13, img:'url'}
];


app.get('/api/planets', (req, res) => {

  res.json(planets);
  console.log(planets)
});

app.get('/api/planets/:name',(req,res)=>{
  req.params.name
    // res.send(${data})
})

