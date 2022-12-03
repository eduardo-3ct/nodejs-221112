const express = require('express');
const morgan = require('morgan')
const beersApi = require('./beers-api');

const app = express();

// Using asynchronous APIs and route handlers
// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

// app.use(express.static('public'));

app.use(morgan('dev'));
app.use('/beers', beersApi);

const port = 3_000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});