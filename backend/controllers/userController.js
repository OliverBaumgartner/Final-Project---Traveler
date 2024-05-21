const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = async(req, res) =>{
    try{
        let{username, email, password} = req.body;
        if(!email || !username || !password){
            return res.send({msg: "ALL fields must be filled"});
        }
        let oldUser = await User.findOne({email});
        if(oldUser){
            return res.send({ msg: "user already exists. Please login or register with a new E-mail"});
        }
        let hashPassword = await bcrypt.hash(password, +process.env.SALT_ROUND);
        await User.create({ username, email, password: hashPassword});
        return res.send({ msg: "Registered successfully"});
    } catch (error) {
        console.log(error);
        return res.send({ msg: "Internal server error, can not register..."});
    }
};

const login = async (req, res) => {
    try{
        let {email, password} = req.body;
        if(!email || !password){
            return res.send({ msg: "Both email and password are required"});
        }
        let user = await User.findOne({ email});
        if (!user){
            return res.send({
                msg: "user not found, please check the Emailadress",
            });
        }
        let isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid){
            return res.send({
                msg: "Invalid or wrong password",
            });
        }

        let token = jwt.sign(
            {email: user.email, id: user._id, username: user.username},
            process.env.SECRET_KEY
        );
        res.send({msg: "login successfull", token});
    } catch (error){
        console.log(error);
        res.send({msg: "Internal server error, can not login..."});
    }
};

const saveDaytrip = async (req,res)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        let updated = await User.updateOne({_id:id}, data);
        res.status(200).send({msg:"updated successfully", status:true, updated});
    } catch (error) {
        console.log(error);
        res.send({msg: "Internal server error, can not save..."});
    }
}

module.exports = {login, register, saveDaytrip};