const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const postRoutes = require('./routes/postRoutes');
app.use('/api', postRoutes);

module.exports = app;
