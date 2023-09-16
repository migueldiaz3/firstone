const http = require('http');
const server=http.createServer((req,resp) => {
    console.log('bhuvan');
});
server.listen(4000);