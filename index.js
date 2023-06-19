const express = require('express');

require("./Config/database")
const userrouter = require("./Router/route")
const port = 2000;

const app= (express())

app.use(express.json());

//default get 

app.use("/api", userrouter)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running"
    })
})

app.listen(port, () => {
    console.log("")
    console.log("server listening on port", port)
})