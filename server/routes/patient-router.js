const express = require('express');

const PatientController = require('../controllers/patient-controller');

const router = express.Router();

router.get('/patients', PatientController.getPatients);
router.get('/getpatient/:id', PatientController.getPatientById);

module.exports = router;