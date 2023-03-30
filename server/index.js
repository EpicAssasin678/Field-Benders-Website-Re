import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import newsRouter from './routes/newsPost.js'; 
import adminUserRouter from './routes/adminUser.js';

import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use('/news', newsRouter);
app.use('/admin', adminUserRouter);

const CONNECTION_URL = process.env.MONGO_TOKEN;
const PORT = process.env.PORT || 5000;

//Configure deployment for GCP backend using app engine
mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, process.env.ENTRYPOINT || '0.0.0.0', () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
