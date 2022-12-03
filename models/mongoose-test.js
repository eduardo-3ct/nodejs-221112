const mongoose = require('mongoose');
const Beer = require('./beers');

async function main(){
    await mongoose.connect('mongodb+srv://mongoose:mongoose@3ct-sandbox.pmba9.mongodb.net/punk?retryWrites=true&w=majority');
    console.log('Connection successfully.');

    // const beer = new Beer({
    //     name: 'Kamikaze Knitting Club',
    //     // description: 'Our first 2018 Wildcard brew, Kamikaze Knitting Club is a one-off brew',
    // });
    // console.log(beer);
    // console.log('**************************************************');

    // // await beer.save();
    // // console.log(beer);
    // // console.log('**************************************************');

    // const beers = await Beer.find();
    // console.log(beers);
    // console.log('**************************************************');

    const beer = new Beer({
        id: 174,
        name: 'Bashah PRICE',
        image_url: '    https://images.punkapi.com/v2/170.png    ',
        price: 2.99
    });
    await beer.save();
    // await Beer.updateOne({id: 170}, {name: 'Bashah 3CT'});

    await mongoose.connection.close();
}

main().catch(err => console.log(err));