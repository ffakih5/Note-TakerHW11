const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')) 

require('./routes/apiroutes') (app);
require('./routes/htmlroutes') (app);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));



/*app.get('/api/notes', function (req, res) {
  const file = fs.readFileSync("db/db.json", "utf8");

  res.json(JSON.parse(file));
})
const path = require('path');
*/