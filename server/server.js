const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDb = require('./db/DataBase')
const dotenv = require('dotenv')

dotenv.config({ path: '../.env' })

// DataBase called Here
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api', require('./routes/api/users.js'))
app.use('/api', require('./routes/api/profile'))
app.use('/api', require('./routes/api/post.js'))
app.use('/api', require('./routes/api/auth.js'))

app.listen(PORT, () => console.log(`Server running on port ${PORT} `))
