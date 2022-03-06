const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining  patient schemas maps to a  MongoBD collection

const Patient = new Schema({
            
            patientId: {
                type: String,
                required: true,
                unique: true,
                trim: true
            },
               
            age: {
                type: Number,
                required: false
            },    
            
            zipCode: {
                type: String,
                required: true
            },
            
            
            latestBmi: {
                type: String,
                required: false
            },
            
            latestWeight: {
                type: String,
                required: false
            },

            latestHeight: {
                type: String,
                required: false
            },

        },
        
       { timestamps: true },   
        
      );
    
    module.exports = mongoose.model('paitent', Patient);
