var express = require('express'); 
const icecream_controlers= require('../controllers/icecream'); 
var router = express.Router(); 
 
/* GET icecreams */ 
router.get('/', icecream_controlers.icecream_view_all_Page ); 
module.exports = router; 

//GET request for one icecream. 
router.get('/icecreams/:id',icecream_controlers.icecream_detail); 

/* GET detail icecream page */ 
router.get('/detail', icecream_controlers.icecream_view_one_Page); 

/* GET create icecream page */ 
router.get('/create',secured, icecream_controlers.icecream_create_Page); 

/* GET create update page */ 
router.get('/update',secured, icecream_controlers.icecream_update_Page); 

/* GET create icecream page */ 
router.get('/delete',secured, icecream_controlers.icecream_delete_Page); 

 

module.exports = router;
