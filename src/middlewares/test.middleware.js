
import asyncHandler from '../utils/asyncHandler.js';
const testMiddleware = asyncHandler((req, res, next)=>{
    console.log("I'm test middleware");
    next();
});

export default testMiddleware;