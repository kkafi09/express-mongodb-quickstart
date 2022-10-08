const express = require("express");
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
    res.json({ message : "GET all users"});
});

// GET single user
router.get("/:id", (req,res) => {
    res.json({ message : "GET single user"});
});

// POST new user
router.post("/", (req,res) => {
    res.json({ message : "POST new user" });
});

// DELETE a user
router.delete("/:id", (req,res) => {
    res.json({ message : "DELETE a user"})
});

// PUT a user
router.put('/:id', (req,res) => {
    res.json({ message : "PUT a user" })
});

module.exports = router;
