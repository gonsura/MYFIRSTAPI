require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')

const usersRoutes = require('./routes/users')

const middlewareLogRequest = require('./middleware/logs')

const app = express()

//* pattern express: app.method(path,handler)

app.use(middlewareLogRequest.logRequest)
app.use(express.json())

app.use('/users', usersRoutes)


app.listen(PORT, () => {
  console.log(`server berhasil running di port ${PORT}`)
})
