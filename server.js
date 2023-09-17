const http = require('http');
const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>hey</title></head>');
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('</html>');
      
        res.end();

    }
    const home = req.url;
    if(home === '/home'){
        res.write('<html>');
        res.write('<head><title>hey</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
      
        res.end();

    }
    const node = req.url;
    if(node === '/node'){
        res.write('<html>');
        res.write('<head><title>hey</title></head>');
        res.write('<body><h1>Welcome to nodejs project</h1></body>');
        res.write('</html>');
      
        res.end();

    }
    // console.log(req.url, req.method, req.headers);
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>hey</title></head>');
    // res.write('<body><h1>Welcome home</h1></body>');
    // res.write('</html>');
      
    // res.end();
    
});
server.listen(4000);