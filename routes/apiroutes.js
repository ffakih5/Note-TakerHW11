const fs = require ('fs');

module.exports = (app) => {

    app.get('/api/notes', (req,res) => json(){
        

    })

    app.post('/api/tables', (req, res) => {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        if (tableData.length < 5) {
          tableData.push(req.body);
          res.json(true);
        } else {
          waitListData.push(req.body);
          res.json(false);
        }
      });
    
      // I added this below code so you could clear out the table while working with the functionality.
      // Don"t worry about it!
    
      app.post('/api/clear', (req, res) => {
        // Empty out the arrays of data
        tableData.length = 0;
        waitListData.length = 0;
    
        res.json({ ok: true });
      });
    };
    
}