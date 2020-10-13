const express   = require('express');
const app       = express();
const request = require('request');


module.exports.homepage = (req,res)=>{	
	res.render('home');
};



module.exports.moviesubmit = (req,res)=>{

	var movie = req.body.movie;
    var url = `http://www.omdbapi.com?apikey=41e32058&t=${movie}`;

    request(url,(err,response,body)=>{
    	newBody=JSON.parse(body);
    	if(err) throw err;
    	else{
    		console.log("body:",newBody);
    		
    		res.render('home',{dataa:newBody})
    	}
    	 
    	
    })
  
}
