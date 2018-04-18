const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 3000;

//setup server
const server = http.createServer((req,res) => {
    console.log("Request for " + req.url + ' by method ' + req.method + '\n');

    if (req.method == 'GET') {   
        var fileUrl;
        if(req.url == '/') fileUrl = './public/index.html';
        else {
            console.log(req.url);
            fileUrl = './public' + req.url;
            console.log(fileUrl);
        }

        var filePath = path.resolve(fileUrl);

        const fileExt = path.extname(filePath);
        if(fileExt == '.html'){
            fs.exists(filePath, (exists) => {
                if(!exists){
                    res.statusCode = 404;
                    fileUrl = './public/html/404.html';
                    filePath = path.resolve(fileUrl);
                    fs.createReadStream(filePath).pipe(res);
                    return;
                }
                else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                }
            })
        }
        else if(fileExt == '.jpg'){ //voi viec lay cac file anh
            fs.exists(filePath, (exists) => {
                if(exists){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'image/jpg');
                }
            })
        }
        else if(fileExt == '.ico'){ //voi viec lay cac file anh icon
            fs.exists(filePath, (exists) => {
                if(exists){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'image/ico');
                }
            })
        }
        else if(fileExt == '.js'){ //voi viec lay cac file js
            fs.exists(filePath, (exists) => {
                if(exists){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/javascript');
                }
            })
        }
        fs.createReadStream(filePath).pipe(res);
        console.log("success");
    }
    else {
        res.statusCode = 404;
        fileUrl = './public/html/404forbitdden.html';
        return;
    }
    
});



server.listen(port , hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`); 
});