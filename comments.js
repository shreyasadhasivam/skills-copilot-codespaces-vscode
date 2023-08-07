//create web server
//http://localhost:8080/comments
var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = [];
var server = http.createServer(function(request, response) {
    //parse the url to get the pathname
    var pathname = url.parse(request.url).pathname;
    //console.log(pathname);
    //if the request is for the comments page
    if (pathname == '/comments') {
        //if the request is a GET request
        if (request.method == 'GET') {
            //set the response header to 200 OK
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            //get the comments.html file
            fs.readFile('comments.html', function(error, data) {
                //if there is an error
                if (error) {
                    //throw the error
                    throw error;
                }
                //write the contents of the file to the response
                response.write(data.toString());
                //end the response
                response.end();
            });
        }
        //if the request is a POST request
        else if (request.method == 'POST') {
            //set the response header to 200 OK
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            //get the data from the request
            request.on('data', function(data) {
                //convert the data to a string
                var dataString = data.toString();
                //parse the data
                var parsedData = JSON.parse(dataString);
                //add the parsed data to the comments array
                comments.push(parsedData);
                //write the contents of the comments array to the response
                response.write(JSON.stringify(comments));
                //end the response
                response.end();
            });
        }
    }
    //if the request is for the comments.json file
    else if (pathname == '/comments.json') {
        //if the request is a GET request
        if (request.method == 'GET') {
            //set the response header to 200 OK
            response.writeHead(200, {
                'Content-Type': 'application/json'
            });
            //write the contents of the comments array to the response
            response.write(JSON.stringify(comments));
            //end the response
            response.end();
        }
    }
    //if the request is for the comments.css file
    else if (pathname == '/comments.css') { 
        //if the request is a GET request
        if (request.method == 'GET') {
            //set the response header to 200 OK
            response.writeHead(200, {
                'Content-Type': 'text/css'
            });
            //get the comments.css file
            fs.readFile('comments.css', function(error, data) {
                //if there is an error
                if (error) {
                    //throw the error
                    throw error;
                }
                //write the contents of the file to the response
                response.write(data.toString());
                //end the response
                response.end();
            });
        }
    }
    //if the request is for the comments.js file
    else if (pathname == '/comments.js') {
        //if the request is a GET request
        if (request.method == 'GET') {
            //set the response header to 200 OK
            response.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
            //get the comments.js file
            fs.readFile('comments.js', function(error, data) {
                //if there is an error
                if (error) {
                    //throw the error
                    throw error;
                }
                //write the contents of the file to the response
                response.write(data.toString());
                //end the response
                response.end();
            });
        }
    }
});