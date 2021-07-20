const express = require('express')
const router = express.Router()

// @route        GET api/profile
// @desc          TEST ROUTES
// @access       public
router.get('/profile', (req, res) => {
  res.send('profile')
})

module.exports = router
