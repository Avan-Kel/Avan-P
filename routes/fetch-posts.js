const express = require("express");

let router = express.Router();

router.get("/", (req, res, next) => {
    console.log("Hello Server");
    res.json({
        posts: [
            {
                id: 1,
                title: "How to Make Money Online",
                description: "In this post, i will teach you how to start making money online without leaving the comfort of your home",
                author: "Admin"
            },
            {
                id: 2,
                title: "How to Create A Dam",
                description: "This 100 page course will give a detailed experimental procedure to creating an adequate hydrodam.",
                author: "Admin"
            },
            {
                id: 3,
                title: "How to Become a Medical Professional",
                description: "The requirements to gaining the knowledge of a professional medical doctor.",
                author: "Admin"
            },
            {
                id: 4,
                title: "How to Start Trading",
                description: "In this post, i will teach you how to start trading courses that can earn you millions of dollars.",
                author: "Trading"
            },
            {
                id: 5,
                title: "Welcome to Qatar Airline",
                description: "Want to know more about Qatar Airline? Read on!",
                author: "Qatar"
            }
        ]
    })
})

module.exports = router