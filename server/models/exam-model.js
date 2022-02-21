const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//defining exam schemas maps to a MongoBD collection

const Exam = new Schema ( {
       
       
       patientKey: {        
         type: mongoose.Schema.Types.ObjectId,        
         ref: 'Patient'    
      },                
       
       
       examId: {        
         type: String,        
         required: true,    
      },     
       
        hoursAdmission: {
           type: Number,
           required: true,
        },
       
        xrayImage: {
           type: String,
           required: true,
        }, 
       
        keyFindings: {
           type: String,
           required: true,
        },  
       
        brixiaScores: {
           type: Number,
           required: true,
        },  
        
       
     },
                                         
);

module.exports = mongoose.model('exam', Exam);
