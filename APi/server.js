const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();
const router = require('./routes/routes')
const app = express();
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected...')).catch(err => console.log(err))

app.use(cors());
app.use('/api', router)

app.listen(process.env.PORT || 4000, () => console.log('server running'))