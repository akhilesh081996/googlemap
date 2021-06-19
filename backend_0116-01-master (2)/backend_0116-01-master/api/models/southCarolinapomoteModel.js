const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const southpolygonpromoteSchema = new Schema({
    finalsubmissionvalue: {type: String,  default: ''},
    firstclaculation: {type: String,  default: ''},
    jobcreatedperyear: {type: String,  default: ''},
    personperyear: {type: String, default: ''},
    taxcreditSectors: {type: String, default: ''},
    worldwide: {type: String, default: ''},
    userid: { type: Schema.ObjectId, ref: 'user_tbl' }, 
    Southploygonname : {type: String ,default :''}

});

const southpolygonpromote = mongoose.model('south_carolina_promote_value', southpolygonpromoteSchema, 'south_carolina_promote_value');
module.exports = southpolygonpromote;