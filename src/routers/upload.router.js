
import express from 'express';
const router = express.Router();
import fs from 'fs';
import path from 'path';
import upload from '../middlewares/multer.middleware.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';


router.post("/upload",upload.array("givenfiles" , 10) , (req, res, next)=>{
    //taking time from frontend
    // time is taken in minutes
    const timeOut=(req.body.timeOut)*1000*60;
    if(!timeOut){
        throw new ApiError("invalid field", 400);
    }


    // creating an unique folder where the files will be stored
    // const uniqueFolderName = Date.now().toString();
    const uniqueFolderName = `${Math.round(Math.random() * 10000)}`;
    const uploadDirectory = path.join('public/uploads', uniqueFolderName);
    fs.mkdirSync(uploadDirectory); // Create the folder


    // Move uploaded files to the unique folder
    req.files.forEach(file => {
        const oldPath = file.path;
        const newPath = path.join(uploadDirectory, file.originalname);
        fs.renameSync(oldPath, newPath); // Move file to new path
    });


    //set interval
    setTimeout(()=>{
        req.files.forEach(file =>{
            const filePath = path.join(uploadDirectory, path.basename(file.path));
            fs.unlinkSync(filePath);
            //fs.unlink(`${req.files[0].path}`, ()=>{});
            console.log("hi setTimeout");
        })
        fs.rmdirSync(uploadDirectory);
        console.log(`Files in ${uploadDirectory} deleted`);
    } , timeOut);

    
    // setTimeout(()=>{
    //     fs.readdir("public/uploads/", (err, files)=>{
    //         files.forEach(file => {
    //             fs.unlink(path.join("public/uploads/" , path.basename(file)));
    //         });
    //     });
    // }
    
    //  , time);
   
   
    //sending response back to client
    const data=req.files.map((file)=>{
        return {url:`http://localhost:3000/uploads/${uniqueFolderName}/${path.basename(file.path)}`}
       })
    res.status(201).json(new ApiResponse("uploaded successfully", {
        accessCode: uniqueFolderName,
        links:  data        // data == data: data 
    }));

} );


export default router;