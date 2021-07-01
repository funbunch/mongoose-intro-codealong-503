// require mongoose package
const mongoose = require('mongoose')
 require('dotenv').config()

// define my atlas URI
const uri = process.env.ATLAS_URI

// connect mongoose to atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const db = mongoose.connection

db.once('open', () => {
  console.log(`⛓ mongoDB connecton ${db.host}:${db.port}`)
})

db.on('error', err => {
  console.log(`🔥 oh no! the datacenter burned down!\n ${err}`)
})

// export a function to connect