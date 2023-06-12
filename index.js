const express = require("express")
const app = express()

app.get('/', (req,res) => {
  res.send("Hello ASC")
})

app.listen(5000)
