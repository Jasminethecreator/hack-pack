const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//defining  patient schemas

const Exam = new Schema ( {
        id: {
            type : String,
            require : true
        },

        testname: {
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
       
        brixiascore: {
            type: Number,
            required: true
        },
        
    },
    
);

module.exports = mongoose.model('exam', Exam);