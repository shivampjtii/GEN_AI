const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");

async function authUser(req,res,next){
    const token = req.cookies.token;
    const isTokenBlacklist = await blacklistModel.findOne({token});

    if(!token){
        return res.status(401).json({
            message: "Token is required"
        })
    }

    if(isTokenBlacklist){
        return res.status(401).json({
            message: "Invalid Token"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({
            message:"Invalid Token"
        })
    }

}

module.exports = authUser;

