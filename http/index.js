const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('<h1>hello,sintu is here!</h1>');
    }
    res.end();
});
server.listen(5001);
console.log('the http server is running on port');