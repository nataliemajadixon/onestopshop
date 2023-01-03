const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config();

const server = express();

const MONGO_PASS = process.env.DB_PASSWORD

const DB_URL = `mongodb+srv://${MONGO_PASS}@onestopshop.mkri76t.mongodb.net/?retryWrites=true&w=majority`;


