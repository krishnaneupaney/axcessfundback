import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
import userRouter from "./routes/user.js";

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://krishna:Medbus2020@cluster0.hrjbe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));





