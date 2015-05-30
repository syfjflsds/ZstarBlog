var express = require('express')

var BlogApp = function()
{
    this.setupVariable = function()
    {
        this.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        this.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof this.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            this.ipaddress = "127.0.0.1";
        };
    }

    this.setupServer = function()
    {
        this.server = express();
        this.server.set('views', __dirname + '/views'); //论__dirname的重要性，缺少这个会导致页面渲染失败
        this.server.set('view engine', 'ejs');
        this.server.use(express.static(__dirname + '/public'));
    }

    this.setupRouter = function()
    {
        this.server.get('/', function(req, res){
            res.render('index', {title:'Zstar\'s blog'});
        })
    }

    this.init = function()
    {
        this.setupVariable();
        this.setupServer();
        this.setupRouter();
    }

    this.start = function()
    {
        this.server.listen(this.port, this.ipaddress, function(){
            console.log('%s: Node server started on ...' + this.ipaddress + ':' + this.port,
                Date(Date.now() ));//, this.ipaddress, this.port);
        })
    }
}

var app = new BlogApp();
app.init();
app.start();

