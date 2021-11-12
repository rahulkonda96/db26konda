var icecream = require('../models/icecream'); 
 
// List of all icecream 
exports.icecream_list = async function(req, res) { 
    try{ 
        theicecream = await icecream.find(); 
        res.send(theicecream); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific icecreams. 
exports.icecream_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecreame detail: ' + req.params.id); 
}; 
 
// Handle icecream create on POST. 
exports.icecream_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new icecream(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.icecream_Name = req.body.icecream_Name; 
    document.litre = req.body.litre; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle icecream delete form on DELETE. 
exports.icecream_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id); 
}; 
 
// Handle icecream update form on PUT. 
exports.icecream_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.icecream_view_all_Page = async function(req, res) { 
    try{ 
        theicecream = await icecream.find(); 
        res.render('icecream', { title: 'icecream Search Results', results: theicecream }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 