const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dbConnection = require('./db/connect');
const app = express();

// Import dotenv and configure it to read .env file
require('dotenv').config();

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
const mongoUsername = process.env.MONGODB_USERNAME;
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoConnectionString = `mongodb+srv://${Joemongo}:${encodeURIComponent(7Mwathani77)}@your-mongodb-cluster.example.com/your-database-name?retryWrites=true&w=majority`;

mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Use the database connection
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Mount the routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});