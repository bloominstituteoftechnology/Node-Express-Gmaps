const express = require('express');
const fetch = require('node-fetch');
const config = require('./config.js');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

const PORT = config.port;

server.get('/place', (req, res) => {
  const textSearch = req.query.textSearch;
  fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${textSearch}&key=${
      config.gmaps.apiKey
    }`
  )
    .then(res => res.json())
    .then(json => {
      // const placeID = json.results[0].place_id
      json.results.forEach(element => {
        resultsArray.push(element);
      });
      resultsArray.forEach(result => {
        placeIdArr.push(result.place_id);
      });
      placeIdArr.forEach(place => {
        fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place}&key=${
            config.gmaps.apiKey
          }`
        )
          .then(res => res.json())
          .then(json => detailsArray.push(json));
      });
    });
  res.send(detailsArray);
});

const resultsArray = [];
const detailsArray = [];
const placeIdArr = [];

server.listen(PORT, err => {
  if (err) {
    console.log(`ERROR!, ${err}`);
  } else {
    console.log(`SUCCESS! Server listening on ${PORT}`);
  }
});
