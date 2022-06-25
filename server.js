const express=require('express');
const server=express();


server.get('/',(req,res)=>{
    res.send('  Welcome to Express server')
})
server.get('/about',(req,res)=>{
    res.send('The About Page')
})
server.get('/contact',(req,res)=>{
    res.send('The Contact Page')
})
server.get('/home',(req,res)=>{
    res.send('The Home Page')
})
const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
}
)

