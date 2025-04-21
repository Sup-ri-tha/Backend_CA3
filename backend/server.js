const express = require ('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())

const PORT = process.env.port || 8080;
const url = process.env.db_url;

const connectDB = async() => {
    try{
        await mongoose.connect(url)
        console.log("Connected to databse successfully")
    }
    catch(err){
        console.log("Error connecting to database", err.message)
    }
}

connectDB();

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page")
})

app.listen(PORT, () => {
    console.log(`The server is running successfully on http://localhost:${PORT}`)
})