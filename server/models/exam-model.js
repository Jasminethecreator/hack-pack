const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Exam = new Schema(
    {
        exam_id: {
            type: String,
            required: true
        },
        patient_id: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        key_findings: {
            type: String,
            required: true
        },
        brixia_scores: {
            type: Array,
            required: true
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('exam', Exam, 'exam');