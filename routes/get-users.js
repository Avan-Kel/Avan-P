const express = require("express");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

let router = express.Router();
let supabaseData = createClient(process.env.Supabase_URL, process.env.Supabase_KEY);


router.get("/",  async (req, res, next) => {
    console.log('Supabase Key: ', process.env.Supabase_KEY);
    console.log('Supabase URL: ', process.env.Supabase_URL);
    
    try {
        // destructuring
        const {data, error} = await supabaseData
        .from("Users")
        .select("*");
        // to retrieve or extract information 
        // * for all column else specific name with ,
        if (error) {
            return( res.status(500).json({error: "error fetching users"}))
        } 
        console.log(data)
        res.status(200).json(data)

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "internal server error"})
    }
})


module.exports = router