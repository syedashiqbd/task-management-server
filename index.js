const express = require('express');
const cors = require('cors');
require('dotenv').config();

const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
  MongoAWSError,
} = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Task Management Server is Running');
});

app.listen(port, () => {
  console.log(`Task Management Server is running on port: ${port}`);
});
