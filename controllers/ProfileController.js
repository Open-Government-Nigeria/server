const User = require("../models/User")const dotenv = require("dotenv")dotenv.config()exports.getAllUsers = async (req, res) => {    try {        const users = await User.find({}).populate('posts');        const formattedUsers = users.map(user => {            return {                id: user._id,                fullName: `${user.firstName} ${user.lastName}`,                email: user.email,                phone: user.phone,                dateOfBirth: user.dateOfBirth.toLocaleDateString(),                houseAddress: user.houseAddress,                user_role: user.user_role,                posts: user.posts            }        })        formattedUsers.sort((a, b) => {            if (a.user_role === 'admin' && b.user_role !== 'admin') {                return -1;            }            if (a.user_role !== 'admin' && b.user_role === 'admin') {                return 1;            }            return 0;        });        return res.status(200).json({users: formattedUsers})    } catch (err) {        console.error(err)        return res.status(500).json({error: "Failed to retrieve users"})    }}exports.getPersonalProfile = async (req, res) => {    try {        const userId = req.session.userId;        console.log(userId)        if (!userId) {            return res.status(400).json({error: "User ID is required"});        }        const user = await User.findById(userId).populate('posts');        if (!user) {            return res.status(400).json({error: "User does not exist"});        }        const formattedUser = {            id: user._id,            fullName: `${user.firstName} ${user.lastName}`,            email: user.email,            phone: user.phone,            dateOfBirth: user.dateOfBirth.toLocaleDateString(),            houseAddress: user.houseAddress,            user_role: user.user_role,            posts: user.posts        }        return res.status(200).json({user: formattedUser})    } catch (err) {        console.error(err)        return res.status(500).json({error: "Failed to retrieve user profile"})    }}