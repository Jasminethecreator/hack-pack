const Patient = require('../models/patient-model');

// getPatients = async (req, res) => {
//     await Patient.find()
//         .then(patients => res.status(200).json(patients))
//         .catch(err => {
//             if (err) {
//                 console.error(`Error finding patients in 'getPatients' error: ${err}`);
//                 return res.status(400).json({
//                     success: false,
//                     error: err,
//                 });
//             }
//         });
// };

getPatients =  async (req, res) => {
    await Patient.find({}, (err, items) => {
        if (err) {
            console.error(`Error finding patients in 'getPatients' error: ${err}`);
            return res.status(400).json({
                success: false,
                error: err,
            });
        }
        if (!items.length) {
            console.error(`Error 404, item not found`);
            return res.status(200).json({
                success: true,
                items: [],
            });
        }
        return res.json(items);
    }).clone();
};

getPatientById = async (req, res) => {
    await Patient.find({ patientId: req.params.patient_id }, (err, items) => {
        if (err) {
            console.error(`Error finding patient in 'getPatientById' error: ${err}`);
            throw res.status(400).json({
                success: false,
                error: err
            });
        }
        if (!items.length) {
            console.error(`Error finding patient in 'getPatientById' 404 Patient not found`);
            return res.status(200).json({
                success: false,
                error: 'Error 404, patient not found'
            });
        }
    }).clone().catch(err => {
        console.error(`Error: ${err}`);
    });
};

module.exports = {
    getPatients,
    getPatientById,
};