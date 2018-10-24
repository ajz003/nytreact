const router = require("express").Router();
const Article = require("../models/article.js");
// import axios from "axios";


// You'll need several Express routes for your app:

// /api/articles (get) - your components will use this to query MongoDB for all saved articles

// /api/articles (post) - your components will use this to save an article to the database

// /api/articles (delete) - your components will use this to delete a saved article in the database

// * (get) - will load your single HTML page (with ReactJS) in client/build/index.html. Make sure you put this after all other GET routes

router.get("/api/articles", function(req, res) {

  Article.find({}).then((articles) => {
    res.json(articles);
    console.log(articles)
  });


})

router.post("/api/articles", function(req, res) {


  Article.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    res.json(err);
  });


})

router.get("/api/articles", function(req, res) {

  Article.find({}).then((articles) => {
    res.json(articles);
    console.log(articles)
  });


})


router.post("/save", function(req, res) {
  
  // // TODO: save posted data in mongo db

  //   // Create a new user using req.body
  //   console.log(req.body)
  //   Person.create(req.body)
  //   .then(function(dbPerson) {
  //     // If saved successfully, send the the new User document to the client
  //     res.json(dbPerson);
  //   })
  //   .catch(function(err) {
  //     // If an error occurs, send the error to the client
  //     res.json(err);
  //   });


});

module.exports = router;



// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log(body);
// })
