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
 
// for a specific Icecream.
exports.icecream_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await icecream.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
 
// Handle icecream create on POST. 
exports.icecream_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new icecream(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.icecream_Flavour = req.body.icecream_Flavour; 
    document.liters = req.body.liters; 
    document.price = req.body.price; 
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
 
// Handle Icecream update form on PUT.
exports.icecream_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await icecream.findById( req.params.id)
// Do updates of properties
if(req.body.costume_Flavour)
toUpdate.icecream_Flavour = req.body.icecream_Flavour;
if(req.body.litres) toUpdate.cost = req.body.litres;
if(req.body.price) toUpdate.price = req.body.price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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