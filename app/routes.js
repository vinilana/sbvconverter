const express = require('express')
const router = express.Router()
const VideoRoute = require('./routes/VideoRoute')()

module.exports = () => {

  router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
  });

  router.use('/video', VideoRoute);

  return router
}