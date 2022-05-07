let express = require('express');
let app = express();
let path = require('path');

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, () => {
    console.log('my node app works!');
});