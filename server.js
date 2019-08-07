const express = require('express');
const app = express();
// const morgan = require('morgan');
const port = 4000;
const path = require('path')


//Middleware
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || port, () => {
  console.log(`Server Started on Port ${port}`);
});


//planet database
const solarSystem= [
{name: 'mercury', radiusmiles: "1,516", year: '88 Earth days', hightemp: '800F', lowtemp: '-290F', type: 'rocky', numberofmoons: 0, img:"https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png"},
{name: 'venus', radiusmiles: "3,760", year: '225 Earth days', hightemp: '880F', lowtemp: '880F', type: 'rocky', numberofmoons: 0, img:"https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png"},
{name: 'earth', radiusmiles: "3,959", year: '365 Earth days', hightemp: '136F', lowtemp: '-126F', type: 'rocky', numberofmoons: 1, img:"https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png"},
{name: 'mars', radiusmiles: "2,106", year: '670 Earth days', hightemp: '70F', lowtemp: '-225F', type: 'rocky', numberofmoons: 2, img:"https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png"},
{name: 'jupiter', radiusmiles: "43,441", year: '4,333 Earth days', hightemp: '90,032F', lowtemp: '90,032F', type: 'gas giant', numberofmoons: 79, img:"https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png"},
{name: 'saturn', radiusmiles: "36,183", year: '10,759 Earth days', hightemp: '134F', lowtemp:'-280F' , type: 'gas giant', numberofmoons: 53, img:"https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png"},
{name: 'uranus', radiusmiles: "15,759", year: '30,687 Earth days', hightemp: '-240F', lowtemp: '-370F', type: 'ice giant', numberofmoons: 27, img:"https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png"},
{name: 'neptune', radiusmiles: "15,299", year: '60,190 Earth days', hightemp: '-328F', lowtemp:'-360F', type: 'ice giant', numberofmoons: 13, img:"https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg"},
];


app.get('/api/planets', (req, res) => {

  res.json(solarSystem);
  // console.log(solarSystem)
});

app.get('/api/planets/:name',(req,res)=> {
  let planetString = req.params.name
  // let planetObject = solarSystem[0]
  // if( planetString == "mercury" ){
  //   res.json(solarSystem[0])
  // }
  // else{
  //   res.json(solarSystem);
  // }
  // let planetObject = solarSystem.filter((item)=>{
  //   return item.name == planetString
  // }
  // )
  for (let i = 0; i < solarSystem.length; i++){
    if (solarSystem[i].name == planetString){
      res.json(solarSystem[i])
    }
  }

  
if(process.env.NODE_ENV ==='production'){
  app.use(express.static("client/build"))

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build"))
  })
}
  
  // for (let el in solarSystem){
  //   if (el.name == planetString){
  //     res.json(el);
  //   }
  // }
  
});

// res.send(${data})


  // for loop when using array:
  // for(el in planets){
  //   if(el.name === planetString){
  //     planet = el
  //   }