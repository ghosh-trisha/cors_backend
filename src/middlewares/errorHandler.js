import ApiError from "../utils/ApiError.js"

const errorHandler = (error, req, res, next)=>{
    if(error instanceof ApiError){
        res.status(error.status).json({
            success: error.success,
            message: error.message
        });
    }
    else{
        res.status(500).json({
            success: false,
            message: "internal server error"
        });
    }
}

export default errorHandler;