import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import adminUserModal from '../models/adminUser.js';

const secret = "test";

export const signin = async (req, res) => {
    console.log(req.body);

    const { username, email, password } = req.body;
    console.log(username);
    try {
        console.log("Attempt at admin user sign in");

        //const oldAdmin = await adminUserModal.findOne({ username });
        console.log(adminUserModal);
        const oldAdmin = await adminUserModal.findOne({ username: 'zuporsky' });

        //const firstProfile = await adminUserModal.findOne({username: 'zuporsky'});
        console.log(oldAdmin);
        if (!oldAdmin) return res.status(404).json({message: "User is not an admin"});

        //series of securtiy passes
        const isPasswordCorrect = await bcrypt.compare(password, oldAdmin.password);
        const isEmailCorrect = (email == oldAdmin.email);

        if (!isPasswordCorrect || !isEmailCorrect) return res.status(400).json({ message: "Invalid credentials"});
        
        const token = jwt.sign({ email: oldAdmin.email, id: oldAdmin._id}, secret, {expiresIn: "1h"});
        res.status(200).json({result: oldAdmin, token});
        console.log('Admin profile found, sending response: ', token);
    } catch (err) {
        res.status(500).json({message: "Something went wrong" });
    }
}