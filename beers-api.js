const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');

const filePath = path.resolve('./public/beers.json');
const beers = fs.readFileSync(filePath, { encoding: 'utf-8', flag: 'r' });
const beersJson = JSON.parse(beers);

const router = express.Router();
router.use(bodyParser.json());
router.get('/', (req, res) => {
    res.json(beersJson);
});

router.get('/random', (req, res) => {
    const id = getRandomArbitrary(1, 25);
    const beer = beersJson.filter(b => b.id === id);
    res.json(beer);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const beer = beersJson.filter(b => b.id === id);
    res.json(beer);
})
    .delete('/:id', (req, res) => {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(`{"message": "Deleted beer with ID ${req.params.id}."}`);
    });;

router.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(`{"message": "Beer '${req.body.name}' added."}`);
});

router.put('/', (req, res) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(`{"message": "PUT operation is not yet supported."}`);
});

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = router;