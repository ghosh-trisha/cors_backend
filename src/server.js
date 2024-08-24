import express from 'express';
const app = express();
import "dotenv/config";
const port=process.env.PORT;
import cors from 'cors';

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));

app.listen(port, ()=>{
    console.log(`port ${port} is assigned successfully`);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

// import testRouter from './routers/test.router.js';
// app.use("/test", testRouter);


// import multerRouter from './routers/multer.router.js';
// app.use("/multer", multerRouter);


import uploadRouter from './routers/upload.router.js';
app.use("/api/v1/cors" , uploadRouter);


import fetchRouter from './routers/fetch.router.js';
app.use('/api/v1/cors' , fetchRouter);


import errorHandler from './middlewares/errorHandler.js';
app.use(errorHandler);