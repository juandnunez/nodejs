const express = require("express");

const app = express();


app.listen(4444)

app.use("/homepage", (req, res)=> {
    res.send("homepage setup on GET")
})