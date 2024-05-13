
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


const multerControllerSingle = asyncHandler((req, res, next)=>{
    console.log("\n\nreq file ----->", req.file,"\n\n");

    console.log("req body ----->", req.body,"\n\n");
    console.log("req body.name ----->", req.body.name);
    console.log("req body.singlefile ----->", req.body.singlefile);
    console.log("req files ----->", req.files);

    res.status(200).json(new ApiResponse("multer controller for single file runned successfully", {}));
});


const multerControllerArray = asyncHandler((req, res, _)=>{
    console.log("\n\nreq files ----->", req.files,"\n\n");

    console.log("req body ----->", req.body);
    console.log("req body.name ----->", req.body.name);
    console.log("req body.arrayfile ----->", req.body.arrayfile);
    console.log("\n\nreq file ----->", req.file,"\n\n");

    res.status(200).json(new ApiResponse("multer controller for Array files runned successfully", {}));
});


const multerControllerFields = asyncHandler((req, res, _)=>{
    console.log("\n\nreq files ----->", req.files,"\n\n");

    console.log("req body ----->", req.body);
    console.log("req body.name ----->", req.body.name);
    console.log("req body.fieldfile ----->", req.body.fieldfile);
    console.log("\n\nreq file ----->", req.file,"\n\n");

    res.status(200).json(new ApiResponse("multer controller for Field files runned successfully", {}));
});


export default {multerControllerSingle , multerControllerArray , multerControllerFields};