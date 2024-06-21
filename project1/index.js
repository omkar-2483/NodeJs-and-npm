const http = require('http');
const path = require('path');
const fs = require('fs');



const hostname = "localhost";
const port = 3000;

const server = http.createServer((req,res)=>{
    // console.log(req.headers);

    console.log('request for '+req.url+' by method '+req.method);

    if(req.method == 'GET'){
        var fileURL;
        if(req.url=='/'){
            fileURL='/index.html';
        }else{
            fileURL=req.url;
        }

        var filePath = path.resolve('./public'+fileURL);
        const fileExt = path.extname(filePath);

        if(fileExt == '.html'){
            fs.exists(filePath,(exits)=>{
                if(!exits){
                    res.statusCode=404;
                    res.setHeader('Content-type','text/html');
                    res.end('<html> <body> <h1> error 404:'+fileURL+' does not exits </h1> </body> </html>');
                }
                else{
                    res.statusCode = 200; //for successful connection
                    res.setHeader('Content-Type','text/html');
                    //  res.end('<html> <body> <h1> Server Connection successful :) </h1> </body> </html>');

                    fs.createReadStream(filePath).pipe(res);
                }
            });
        }else{
            res.statusCode=404;
            res.setHeader('Content-type','text/html');
            res.end('<html> <body> <h1> error 404:'+fileURL+' is not a html file </h1> </body> </html>');
        }

    }else{
        res.statusCode=404;
        res.setHeader('Content-type','text/html');
        res.end('<html> <body> <h1> error 404:'+fileURL+'not supported </h1> </body> </html>');
    }

});

//server call
server.listen(port,hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`);
});