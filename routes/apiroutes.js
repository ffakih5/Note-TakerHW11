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
          note.i = number; 
          number ++;
          return dbInput;
        });
        console.log(dbInput);

        stringData = JSON.stringify(dbInput);

        fs.writeFile('./db/db.json', (err, data) => {
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
    
      app.delete('/api/notes/:id', (req, res) => {
        const deleteNote = req.params.id;
        console.log(deleteNote);
        // Empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;
    
        res.json({ ok: true });
      });
    };
    
