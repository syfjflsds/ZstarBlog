/**
 *
 * Created by syf on 15/5/24.
 */

function showBlog(request, response)
{
    console.log("Should show blog text");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Your request is successfully processed");
    response.end();
}



exports.showBlog = showBlog;
