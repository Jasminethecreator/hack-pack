const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//defining exam schemas maps to a MongoBD collection

const Exam = new Schema ( {
        id: {
            type : String,
            require : true
        },

        testName: {
            type: String,
            required: false
        },
        lastvisit: {
            type: String,
            required: false
        },
        finding: {
            type: String,
            required: false
        },
        xraylink: {
            type: Number,
            required: true
        },
       
        brixiaScore: {
            type: Number,
            required: true
        },
        
    },
    
);

module.exports = mongoose.model('exam', Exam);