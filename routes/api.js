const router = require("express").Router();
const Article = require("../models/article.js");
const request = require("request");
// import axios from "axios";

router.post("/api/articles", function (req, res) {

  Article.create(req.body)
    .then((dbArticle) => {
      res.json(dbArticle);
    })
    .catch((err) => {
      res.json(err);
    });

});

router.get("/api/articles", function (req, res) {

  Article.find({}).then((articles) => {
    res.json(articles);
    console.log(articles)
  })
    .catch((err) => {
      res.json(err);
    });

});

router.delete("/api/articles", function (req, res) {

  Article.deleteOne({ title: 'nice one' }).then((data) => {
    if (data.n === 0) {
      res.json("no articles deleted")
    } else {
      res.json("deleted")
    }
  })
  .catch((err) => {
    res.json(err);
  });

});

router.get("/articles", function (req, res) {

  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
      'q': "lightning",
      'begin_date': "20000101",
      'end_date': "20010101"
    },
  }, function(err, response, body) {
    body = JSON.parse(body);
    res.json(body)
  })

});



// axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json")

module.exports = router;

