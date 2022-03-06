/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./database/database');
// const itemRouter = require('./routes/item-router');
const patientRouter = require('./routes/patient-router');
// const examRouter = require('./routes/exam-router');
const { default: mongoose } = require('mongoose');

const app = express();
const apiPort = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.use('/api', itemRouter);
app.use('/api', patientRouter);
// app.use('/api', examRouter);

app.listen(apiPort, () => {
   console.log(`[Hack.Diversity React Template] - Server running on port ${apiPort}`);
});
