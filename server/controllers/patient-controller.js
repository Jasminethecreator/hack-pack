const Patient = require('../models/patient-model');

getPatients = async (req, res) => {
    Patient.find({}, (err, patients) => {
        if (err) {
            console.error(`Error finding patients in 'getPatients' error: ${err}`);
            return res.status(400).json({
                success: false,
                error: err,
            });
        }
        if (!patients.length) {
            console.error(`Error 404, no patients found`);
            return res.status(404).json({
                success: false,
                patients: [],
            });
        }
        return res.json(patients);
    });
};

getPatientById = async (req, res) => {
    Patient.findById(req.params.id)
        .then(patient => res.json(patient))
        .catch(err => {
            console.log(`Error 404, patient not found`);
            res.status(404).json({
            success: false,
            error: err
        })}); 
};

module.exports = {
    getPatients,
    getPatientById,
};