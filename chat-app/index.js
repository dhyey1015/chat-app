const express = require('express');
const path = require('path');
const dotenv =  require('dotenv');
const connectDB = require('./config/db');
const userRouter = require('./routes/user/userRoutes');
const file = path.resolve("./public/index.html")

const app = express();
dotenv.config();
connectDB();

app.use('/api/user', userRouter);

app.listen(3000);

