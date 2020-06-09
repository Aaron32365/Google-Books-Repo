const express = require("express")
const router = express.Router();

router.get("/api/test", (req,res)=> {
    const test = {"testStatus": "Complete"}
    console.log(JSON.stringify(test))
    res.json(test)
})

module.exports = router