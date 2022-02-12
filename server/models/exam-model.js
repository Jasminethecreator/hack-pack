const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//defining exam schemas maps to a MongoBD collection

const Exam = new Schema ( {
        
        testName: {
            type: String,
            required: false
        },
        lastVisit: {
            type: String,
            required: false
        },
        finding: {
            type: String,
            required: false
        },
        xraylink: {
            type: String,
            required: true
        },
       
        brixiaScore: {
            type: Number,
            required: true
        },
        
    },
    
);

module.exports = mongoose.model('exam', Exam);
