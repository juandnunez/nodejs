const express = require("express");
const app = express();
app.use("/homepage", (req, res)=> {
    res.send("homepage setup on GET")
})

app.set("view engine", "ejs");

app.use("/static", express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("todo.ejs");
});

app.listen(4444)
