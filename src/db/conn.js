const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/blog_contact")
.then(()=>{
    console.log("connection sucessfull............")
}).catch((err)=>{
     console.log(err);
})