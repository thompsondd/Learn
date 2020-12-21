const express = require ('express')
const server = express();
server.get('/hello',(request,response)=>{
    response.JSON({
        message : "hello",
        name: "hoa",
    })
})
/*server.post('/',(req,res)=>{
    const name =req.body.name;
    
    res.JSON({
        message: "ok",
        name:name,
    })
})*/
server.listen(3000)