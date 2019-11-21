const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getArticle', (req, res, next) => {
  api.getArticle(req, res, next);
});

router.post('/setView', (req, res, next) => {
  api.setView(req, res, next);
});

router.get('/getArticleAll', (req, res, next) => {
  api.getArticleAll(req, res, next);
});


module.exports = router;