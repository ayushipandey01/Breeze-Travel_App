const express = require('express');

const app = express();

const PORT = 7000;

app.get("/" , (req , res) => {
    res.send("Hello");
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Server running on port 7000")
}) 