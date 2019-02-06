const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.error(request.body);
  response.status(200).json(request.body);
});
