const mongoose = require ('mongoose');

const {PRODUCTS_MONGODB_HOST, PRODUCTS_MONGODB_DATABASE} = process.env;

MONGODB_URI = `mongodb://${PRODUCTS_MONGODB_HOST}/${PRODUCTS_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then (db => console.log('Database connected'))
    .catch (err => console.log(err));

    mongoose.set('strictQuery', true);