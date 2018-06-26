const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

router.get('/start-page', function(req, res) {
  res.render('start-page')
})

module.exports = router
