const express = require('express');

const ExamController = require('../controllers/exam-controller');

const router = express.Router();

router.get('/exams', ExamController.getExams);
router.get('/exams/:id', ExamController.getExamById);
router.post('/exams/:id', ExamController.createExam);

module.exports = router;