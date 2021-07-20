const express = require('express')
const router = express.Router()

// @route        GET api/auth
// @desc          TEST ROUTES
// @access       public
router.get('/auth', (req, res) => {
  res.json({
    message: 'auth Rout goes here'
  })
})

module.exports = router
