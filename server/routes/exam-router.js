const express = require('express');

const ExamController = require('../controllers/exam-controller');

const router = express.Router();

router.get('/exams', ExamController.getExams);
router.get('/getexam/:id', ExamController.getExamById);

module.exports = router;