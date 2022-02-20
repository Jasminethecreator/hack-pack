const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining  patient schemas maps to a  MongoBD collection

const Patient = new Schema({
            
            patientId: {
                type: Mixed,
                required: true
                },
                
         
            age: {
                type: Number,
                required: false
            },
            
          
            zipCode: {
                type: String,
                required: false
            },
            
            latestBmi: {
                type: Number,
                required: false
            },
            latestWeight: {
                type: Number,
                required: false
            },

            

            icuAdmin: {
                type: Boolean,
                required: true
            },

            

            
        },
        
    );
    
    module.exports = mongoose.model('paitent', Patient);
