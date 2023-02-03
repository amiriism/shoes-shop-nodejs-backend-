//impotr modules
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


//config server express
const app = express()
const server = http.createServer(app)

//config .env file
dotenv.config()    

//config body of request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//connect to database
mongoose.connect(process.env.DARABASE_URL+process.env.DARABASE_NAME)
mongoose.set('strictQuery', true);

//start server
server.listen(process.env.PORT, process.env.HOST, () => {
    console.log("server runnig on port " + process.env.PORT)
})

