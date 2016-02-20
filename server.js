var express = require('express');
var expressHandlebars = require('express-handlebars');
var mysql = require('mysql')
var Sequelize = require('sequelize')
var sequelize = new Sequelize('lab', 'root');
var PORT = process.env.NODE_ENV || 8000;
var app = express();

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
var Chocolate = sequelize.define('Chocolate', {
  name: Sequelize.STRING,
  satisfaction: Sequelize.INTEGER
});


app.get('/',function(req,res){
  Chocolate.findAll().then(function(chocolate) {
  res.render('view', {
    chocolate: chocolate
  });
  });
})
sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening!");
  });
});
function fillDB(){
  Chocolate.create({
          name: 'Dark Chocolate',
          satisfaction: 8
  })
  Chocolate.create({
          name: 'Couverture',
          satisfaction: 5
  })
  Chocolate.create({
          name: 'Milk Chocolate',
          satisfaction: 10
  })
  Chocolate.create({
          name: 'Hersey',
          satisfaction: 7
  })
  Chocolate.create({
          name: 'White Chocolate',
          satisfaction: 8
  })
  Chocolate.create({
          name: 'Unsweetened Chocolate',
          satisfaction: 5
  })
  Chocolate.create({
          name: 'Gianduja ',
          satisfaction: 6
  })
  Chocolate.create({
          name: 'Cacao ',
          satisfaction: 4
  })
}
