const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Patient = new Schema(
    {
        patient_id: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        age: {
            type: Number,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        bmi: {
            type: Number,
            required: true
        },
        race: {
            type: Number,
            required: true
        },
        zip_code: {
            type: Number,
            required: true
        },
    },
    { timestamps: true },
    { collection: 'patient'}
);

module.exports = mongoose.model('patient', Patient, 'patient');