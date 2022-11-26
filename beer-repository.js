const db = require('./beer-catalog.js');

const delay = ms => new Promise(res => setTimeout(res, ms));

// No callback
exports.findAll = async () => {
    await delay(3_000);
    return db.beers;
}

// Callback
exports.findByName = async (name, callback) => {
    await delay(3_000);

    const results = db.beers.filter(b => b.title.toLowerCase().includes(name.toLowerCase()));
    callback(results);
}