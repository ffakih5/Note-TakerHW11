const fs = require ('fs');

module.exports = (app) => {

    app.get('/api/notes', (req,res) => {
      fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        dbInput = JSON.parse(data);
        res.send(dbInput);
      });
    });

    app.post('/api/notes', (req, res) => {
      const userNote = req.body;

      fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        dbInput = JSON.parse(data);
        dbInput.push(userNote);
        let number = 1;
        dbInput.forEach((note, i) => {
          note.id = number; 
          number ++;
          return dbInput;
        });

        stringData = JSON.stringify(dbInput);

        fs.writeFile('./db/db.json', stringData, (err, data) => {
          if (err) throw err;
        });
      });
      res.send('Cool Note!')
      
      });
    
      app.delete('/api/notes/:note', (req, res) => {
        const deleteNote = req.params.note;

        fs.readFile('./db/db.json', (err, data) => {
          if (err) throw err;

          dbInput = JSON.parse(data);

          for (let i = 0; i < dbInput.length; i++) {
            if (dbInput[i].id === Number(deleteNote)) {
              dbInput.splice([i], 1);
            }
          }
          stringData = JSON.stringify(dbInput);

          fs.writeFile('./db/db.json', stringData, (err,data) => {
            if (err) throw err;
          });

        });
    
        res.status(204).send();
      });
    };
    
