const express =require('express');

const app=express();
const PORT=4011;
const HOSTNAME='localhost';

app.get('/',(req,res)=>{
    res.send('hello world!');

});
app.get('/about',(req,res)=>{
    res.send('about world!');

});
app.get('/contact',(req,res)=>{
    res.send('contact world!');

});
app.listen(PORT,()=>{
    console.log('server running at ${HOSTNAME}:${PORT}');
});