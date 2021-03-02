//path package
const path = require('path');

module.exports = (app) => {

    app.get('/notes', (err,res)=>{
        res.sendFile(path.join(__dirname, '..public/notes.html'));
    });
}

