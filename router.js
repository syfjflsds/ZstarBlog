/**
 *
 * Created by syf on 15/5/23.
 */

var http = require('http');
var url = require('url');
var handler = require('./handler');

//handle is the dictionary that works for the different kind of request
//it's separated by the request's pathname
var handle = {};
handle["/"] = handler.showBlog;
handle["/blog"] = handler.showBlog;

//route helps choose the right handle to process the request
function route(request, response)
{
    var pathname = url.parse(request.url).pathname;
    if(typeof handle[pathname] == 'function')
    {
        handle[pathname](request, response);
    }
    else
    {
        console.log("No request handler for " + pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Your request is wrong!");
    }
    console.log("request for pathname:" + pathname);
}

exports.route = route;
