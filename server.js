const express=require("express");
const haseeb=express();
haseeb.get("/",function (request , response) {
response.send("<h1>Haseeb</h1>");
    
});
haseeb.listen(3000,function(){
    console.log("server started on port 3000");
});