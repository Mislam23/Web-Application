const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

//PORT
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, () => {
    console.log('my node app works!');
});