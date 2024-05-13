import express from 'express';
const app = express();
import "dotenv/config";
const port=process.env.PORT;

app.listen(port, ()=>{
    console.log(`port ${port} is assigned successfully`);
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

import testRouter from './routers/test.router.js';
app.use("/test", testRouter);


import multerRouter from './routers/multer.router.js';
app.use("/multer", multerRouter);


import corsRouter from './routers/upload.router.js';
app.use("/api/v1/cors" , corsRouter);


import fetchRouter from './routers/fetch.router.js';
app.use('/api' , fetchRouter);


import errorHandler from './middlewares/errorHandler.js';
app.use(errorHandler);