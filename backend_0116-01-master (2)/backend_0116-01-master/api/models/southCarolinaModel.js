const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const southSchema = new Schema({
    State: {type: String, required: true, default: 0},
    County: {type: String, required: false, default: 0},
    previous_visitor: {type: String, required: false, default: 0},
    Tier: {type: String, required: false, default: 0}
 
});

const southcarolina = mongoose.model('south_tier_table', southSchema, 'south_tier_table');

module.exports = southcarolina;