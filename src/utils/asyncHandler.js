const asyncHandler = (originalFunc)=>{
    return async (req, res, next)=>{
        try{
            await originalFunc(req, res, next);
        }
        catch(error){
            next(error);
        }
    };
}

export default asyncHandler