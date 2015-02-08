//app/routes.js
 

//expose the routes to our app with module.exports

module.exports = function(app){
    //api -----------------------------
 

    //application------------------------------------
    app.get('*', function(req,res){
    	res.sendfile('./public/index.html'); //load the single view file (ngular will handle page changes on the front-ends)
    });
    /*app.get('/pdfopen', function(req,res){
    	res.sendfile('./public/index.html');  
    });*/

}