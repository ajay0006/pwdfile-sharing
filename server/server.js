import cors from "@fastify/cors"
import express from 'express'

// const express =  require("express")
// const express = express()
const app = express()


// app.register
//
// app.register(cors, {
//     origin: process.env.CLIENT_URL,
//     credentials: true
// })
app.get("/", (req, res) => {
    res.render("index")
})

app.get('/upload', (req, res) =>{

})




app.listen({port: process.env.PORT})