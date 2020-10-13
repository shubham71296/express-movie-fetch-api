const express =require('express');
const router=express.Router();

const movieRoutes = require('../controllers/moviecontroller');


router.get('/',   movieRoutes.homepage);
router.post('/moviesubmit',   movieRoutes.moviesubmit);


module.exports = router;

