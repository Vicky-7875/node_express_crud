const mongoose = require('mongoose')

async function connectMonogoDB(url){
    return mongoose
    .connect(url)
   
}

module.exports= {
    connectMonogoDB
}