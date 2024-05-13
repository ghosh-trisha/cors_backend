import upload from "../middlewares/multer.middleware.js";
import multerController from "../controllers/multer.controller.js";


import express from "express";
const router = express.Router();


import multer from "multer";


router.post("/upload-single", upload.single("singlefile")  , multerController.multerControllerSingle);


router.post("/upload-array", upload.array("arrayfile",3)  , multerController.multerControllerArray);


router.post("/upload-fields", upload.fields([
    {name: "arrayfile_1" , maxCount: 5},
    {name: "arrayfile_2" , maxCount: 5}
])  , multerController.multerControllerFields);


// router.post("/upload-single", 
//     (req,res,next)=>{ 
//         upload.single("singlefile")(req, res, (err)=>{
//             console.log("hi");
//             if (err instanceof multer.MulterError) {
//                 console.log(err.message);
//                 console.log("A Multer error occurred when uploading");
//             }
//             else if (err) {
//                 console.log(err.message);
//                 console.log("An unknown error occurred when uploading");
//             }
//             next();
//         })
    
//     },
// multerController.multerControllerSingle);


export default router;