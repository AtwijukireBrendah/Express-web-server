const express=require('express');
const app=express();

app.get('/server',(req,res)=>{
    res.send('Express server')
})

const PORT = 9000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
}
)
