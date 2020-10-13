const express =require('express');
const app=express();


const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended:true
}));


app.use(express.static('public'));
var path=require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

const movieRoutes = require('./routes/movieroutes');

app.use('/',movieRoutes);

app.listen(3000,()=>{
	console.log("server started on port 3000....");
});

