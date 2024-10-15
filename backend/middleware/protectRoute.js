import jwt from "jsonwebtoken";
const protectRoute=(req,res,next) =>{
    try {
        const token=req.cookie.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized -No Token Provided"});
        }
        const decoded=jwt.verify
            
    } catch (error) {
        console.log("Error in protectRoute middleware:" ,error.message);
        
        res.status(500).json({error:"Internal Server Error"})
    }
}