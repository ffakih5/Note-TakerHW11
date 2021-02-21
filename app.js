const express = require('express')
const app = express()
const fs = require("fs") 
app.use(express.static('public')) 

app.get('/api/notes', function (req, res) {
  const file = fs.readFileSync("db/db.json", "utf8");

  res.json(file);
})



app.listen(3000)
