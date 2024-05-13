
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
const testController = asyncHandler((req, res, next)=>{
    console.log("I'm test controller");
    res.status(200).json(new ApiResponse("test controller runned successfully", {"name":"test controller", "roll":100}));
});

export default testController;