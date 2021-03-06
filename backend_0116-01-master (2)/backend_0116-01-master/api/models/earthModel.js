const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const earthSchema = new Schema({
    state: {type: String, required: false},
    polygons: {type: Array, required: false}
});

const tbl_earth = mongoose.model('earth_tbl', earthSchema, 'earth_tbl');

module.exports = tbl_earth;