const express = require('express')
const router = express.Router()

// @route        GET api/profile
// @desc          TEST ROUTES
// @access       public
router.get('/post', (req, res) => {
  res.send('Post')
})

module.exports = router
