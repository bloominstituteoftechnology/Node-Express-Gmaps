const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const fetch = require("node-fetch");

const config = require("./config.js");
server.use(bodyParser.json());

const PORT = config.port;
const MAP_KEY = config.gmaps.apiKey;

const STATUS_USER_ERROR = 422;
const STATUS_SUCCESS = 200;

const url = "https://maps.googleapis.com/maps/api/place";

// server.get("/place", (req, res) => {
//   const { search } = req.query;
//   if (!search) {
//     res.send({ STATUS_USER_ERROR: "Input a place" });
//     return;
//   }
//   console.log("Your search is ", search);
//   fetch(`${url}/textsearch/json?query=${search}&key=${MAP_KEY}`)
//     .then(res => res.json())
//     .then(json => json.results[0].place_id)
//     .then(place => {
//       fetch(`${url}/details/json?placeid=${place}&key=${MAP_KEY}`)
//         .then(res => res.json())
//         .then(json => {
//           res.send({ STATUS_SUCCESS: json.result });
//         })
//         .catch(err => {
//           res.send({ STATUS_USER_ERROR: "Error fetching place" });
//         });
//     })
//     .catch(err => {
//       res.send({ STATUS_USER_ERROR: "Error fetching details" });
//     });
// });

// server.get('/places', (req, res) => {
//   const { search } = req.query;

//   fetch(`${url}/textsearch/json?query=${search}&key=${MAP_KEY}`)
//     .then(res => res.json())
//     .then(json => json.result)
//     .then(places => {
//       const promises = [];

//       places.forEach(place => {
//         promises.push(new Promise(resolve => {
//           fetch(`${url}/details/json?placeid=${place.place_id}&key=${MAP_KEY}`)
//             .then(res => res.json())
//             .then(json => {
//             
//             })
//         }))
//       })
//     })
// })

server.listen(PORT, err => {
  if (err) {
    console.log(`There was an error: ${err}`);
  } else {
    console.log(`Server is listening on port: ${PORT}`);
  }
});
