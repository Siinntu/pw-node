const express=require('express');

const app = express();
const PORT = 4010;
const HOSTNAME ='localhost';

app.get('/',(req,res)=>{
    res.send('Hello ji sintu')
});
app.get('/about',(req,res)=>{
    res.send('Hello jiiiiiiiiii sintu');
});
app.get('/sintu',(req,res)=>{
    res.send('Hello jiiiiiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiii sintu');
});
app.get('/contact',(req,res)=>{
    res.send('Hello iyttttttttttttttttrtytytytytytytytytyaaaaaaaaaaaaaaaaaaaaaaaaaatytytytyrfrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrriiiiiiiiii sintu');
});
app.listen(PORT,()=>{
    console.log('server running at ${HOSTNAME}: ${PORT}');
});