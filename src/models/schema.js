const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    }
    ,
    quary:{
        type:String,
        required:true,
        unique:true,
    },
    member:{
        type:String,
        required:true,
    },
    concern:{
        type:String,
        required:true,
    }  
})

const blogCollection = new mongoose.model('blogCollection',schema);

module.exports= blogCollection;