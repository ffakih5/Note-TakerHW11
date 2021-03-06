const express = require('express')
const fs = require("fs") 
const path = require('path');

const app = express()
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public')) 




app.get('/api/notes', function (req, res) {
  const file = fs.readFileSync("db/db.json", "utf8");

  res.json(JSON.parse(file));
})



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));