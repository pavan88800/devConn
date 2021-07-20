const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../../modles/User')
const jwt = require('jsonwebtoken')
// @route        GET api/users
// @desc          TEST ROUTES
// @access       public
router.post('/users', (req, res) => {
  // first find user exits are not

  const { name, email, password } = req.body

  let user = User.findOne({ email: email })

  user
    .then(user => {
      console.log(user, 'data functinoahsfuash')

      if (user) {
        return res.status(400).json({ error: 'user Alreay Created.....' })
      } else {
        user = new User({
          name,
          email,
          password
        })
      }
      const payload = {
        user: {
          id: user.id
        }
      }
      bcrypt.genSalt(10, function (err, salt) {
        if (err) throw err
        bcrypt.hash(password, salt, function (err, hash) {
          if (err) throw err
          user.password = hash
          user
            .save()
            .then(data => {
              console.log(data)
            })
            .catch(err => console.error(err.message))
        })
      })
      jwt.sign(payload, 'secret', { expiresIn: '5 days' }, (err, token) => {
        if (err) throw err
        if (token) {
          res.json({ token })
          console.log('token', token)
        }
      })
    })

    .catch(err => console.error(err.message))
})

module.exports = router
