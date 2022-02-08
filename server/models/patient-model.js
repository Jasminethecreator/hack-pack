const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining  patient schemas maps to a  MongoBD collection

const Patient = new Schema({
            
            patientid: {
                type: Mixed,
                required: true
                },
                
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: false
            },
            sex: {
                type: String,
                required: false
            },
            race: {
                type: String,
                required: false
            },
            zipcode: {
                type: String,
                required: false
            },
            bmi: {
                type: Number,
                required: false
            },
            weight: {
                type: Number,
                required: false
            },

            height: {
                type: Number,
                required: false
            },

            icuAdmin: {
                type: Boolean,
                required: true
            },

            covid: {
                type: Boolean,
                required: true
            },

            mortality: {
                type: Boolean,
                required: false
            },
        },
        
    );
    
    module.exports = mongoose.model('paitent', Patient);