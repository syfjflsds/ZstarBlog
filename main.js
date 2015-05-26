var express = require('express')
var app = express();

//app.engine('jade', require('jade').__express);
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/Hello.txt', function(req, res)
    {
        res.send('Hello world');
    }
);

app.get('/', function(req, res){
    res.render('index', {title:'Hey', message:'Hello there'});
});

//app.engine('jade', require('jade').__express);

var server = app.listen(9210, function()
{
    console.log("express server start at 9210");
});