const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JoAD8FlrPHdg2hCSidcqbm3bF555IUFLIoZouSIqWzrjRhLaO6rrMrqjVrCF1hpeYVlJx4fqAFkTlaZdIII66I300V5Xynv25")



//  API

//  App config

const app = express()

// Midleware
app.use(cors({origin:true}))
app.use(express.json());


// API routes
app.get('/', (request, response)=> response.status(3004).send("hello world"))

//  Listen command
exports.api = functions.https.onRequest(app)