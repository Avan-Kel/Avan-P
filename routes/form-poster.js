const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const bcrypt = require("bcryptjs");
require("dotenv").config();

let supabase = createClient(process.env.Supabase_URL, process.env.Supabase_KEY);

let router = express.Router();

router.post("/", async (req, res, next) => {
    const { email, username, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        const { data, error: insertError } = await supabase
            .from("Users")
            .insert([{
                email: email,
                username: username,
                password: hashedPassword,
                confirmpassword: hashedPassword  // Optionally hash confirmPassword as well
            }]);

        // If there's an error inserting, return a 500 error
        if (insertError) {
            return res.status(500).json({
                error: "Error posting user",
                details: insertError.message || insertError
            });
        }

        console.log(data);  // Logs the inserted data
        res.status(200).json(data);  // Responds with the inserted user data

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
