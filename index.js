// Initialize Project
require("dotenv").config();
const express = require("express");
const app = express();

// Serve static files
app.use(express.static("public"));
// Use body parsers for url encoded and json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Endpoints
// Homepage
app.get("/", (req,res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/submit", (req,res) => {
  res.json({result: req.files});
});

// Create port and listen to a server on the port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is litening on port ${port}`));