const Exam = require('../models/exam-model');

getExams = async (req, res) => {
    Exam.find({}, (err, exams) => {
        if (err) {
            console.error(`Error finding exams in 'getExams' error: ${err}`);
            return res.status(400).json({
                success: false,
                error: err,
            });
        }
        if (!exams.length) {
            console.error(`Error 404, no exams found`);
            return res.status(404).json({
                success: false,
                patients: [],
            });
        }
        return res.json(exams);
    });
};

getExamById = async (req, res) => {
    Exam.findById(req.params.id)
        .then(exam => res.json(exam))
        .catch(err => {
            console.log(`Error 404, exam not found`);
            res.status(404).json({
            success: false,
            error: err
        })}); 
};

// TODO
createExam = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an examID',
        });
    }

    const exam = new Exam(body);
    const examId = body._id;
    console.log(examId);
    if (!exam) {
        console.log("NOPE");
    }
    else console.log(exam);
};

module.exports = {
    getExams,
    getExamById,
    createExam,
};