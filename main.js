var express = require('express')
var app = express();

//app.engine('jade', require('jade').__express);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index', {title:'Zstar\'s blog', message:'Hello there'});
});

var server = app.listen(9210, function()
{
    console.log("express server start at 9210");
});