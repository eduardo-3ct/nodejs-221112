const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        maxLength: 15,
        immutable: true
    },
    description: {
        type: String,
        default: function(){
            return 'Exquisite beer.'
        }
    },
    image_url: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 99
    }
},
{ strict: true });

const Beer = mongoose.model('Beer', beerSchema);
module.exports = Beer;