const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { z } = require('zod');
const User = require('../../models/userModel');

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

router.post('/signup', asyncHandler(async (req, res) => {

    const singupData = req.body;
    if (!singupData){
        return res.status(400).json({message: "Please provide signup data",});
    }
    const parseResult = signupSchema.safeParse(singupData);

    if(!parseResult.success){
        return res.status(400).json({error: parseResult.error.errors});
    }

    const user = await User.findOne({
        email: email
    })

    if(user){
        return res.status(400).json({message: "User already exists"});
    }

    const newUser = await User.create({
        name: singupData.name,
        email: singupData.email,
        Password: singupData.password,
    });

    if (newUser){
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            pic: newUser.pic,
        });
    } else {
        res.status(400).json({message: "Failed to create the user"});
    }
    
}))


router.post('/signin', asyncHandler(async (req, res) => {}));

module.exports = router;