const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

async function registerController(req,res){
    const { username, email, password } = req.body;

    if(!username || !email || !password){
        return res.status(401).json({
            message: "All fields are required"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {email},
            {username}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(401).json({
            message: "User already exists"
        })
    }

    const hash = await bcrypt.hash(password,10);
    

    const user = await userModel.create({
        username,
        email,
        password:hash
    })

    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET,{expiresIn:"3d"})

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully.",
        user:{
            id:user._id,
            username: user.username,
            email: user.email
        }
    })
}

async function loginController(req,res){
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        return res.status(401).json({
            message: "All fields are required"
        })
    }
    
    const user = await userModel.findOne({
        $and:[{email},{username}]
    })

    if(!user){
        return res.status(401).json({
            message: "User doesn't exists"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(401).json({
            message: "Invalid credentials"
        })
    }

    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET,{expiresIn:"3d"});

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully.",
        user:{
            id:user._id,
            username: user.username,
            email: user.email
        }
    })
}

module.exports = {
    registerController,
    loginController
}