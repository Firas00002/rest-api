const mongoose = require("mongoose")

const connect = async() =>{
    try {
        await mongoose.connect(process.env.DB)
        console.log("database connected")
    } catch (error) {
        console.error(error)
    }
}

module.exports =connect