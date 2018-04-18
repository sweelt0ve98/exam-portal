const http = require('http');
const fsys = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 3000;

//setup server
const server = http.createServer((req,res) => {
    console.log("Request for " + req.url + ' by method ' + req.method);

    if (req.method == 'GET') {   
        var fileUrl;
        if(req.url == '/') fileUrl = './../../public/index.htmlindex.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./../../public/html'+ fileUrl);

        const fileExt = path.extname(filePath);
        if(fileExt == '.html'){
            fsys.exists(filePath, (exists) => {
                if(!exsist){
                    res.statusCode = 404;
                    fileUrl = './../../public/html/404.html';
                    return;
                }
                else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    fsys.createReadStream(filePath).pipe(res);
                }
            })
        }
        else{
            res.statusCode = 404;
            fileUrl = './../../public/html/404type.html';
            return;
        }
    }
    else {
        res.statusCode = 403;
        fileUrl = './../../public/html/404forbitdden.html';
        return;
    }
    

});

server.listen(port , hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`); 
});