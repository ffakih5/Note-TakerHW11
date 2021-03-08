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
        console.log(dbInput);

        stringData = JSON.stringify(dbInput);

        fs.writeFile('./db/db.json', stringData, (err, data) => {
          if (err) throw err;
        });
      });
      res.send('Cool Note!')
      
      });
    
      // I added this below code so you could clear out the table while working with the functionality.
      // Don"t worry about it!
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware if (notesData.length < 5) { notesData.push(req.body); res.json(true); } else { waitListData.push(req.body); res.json(false);  }
    
      app.delete('/api/notes/:note', (req, res) => {
        const deleteNote = req.params.note;
        console.log(deleteNote);

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
    
