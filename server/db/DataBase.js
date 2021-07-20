const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MogoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log('Database connection established successfully')
  } catch (error) {
    console.error(error)
  }
}

module.exports = connectDb
