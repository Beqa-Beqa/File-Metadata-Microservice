// Initialize Project
require("dotenv").config();
const express = require("express");
const app = express();
const upload = require("./middlewares/upload");
const File = require("./db/connect");

// Serve static files
app.use(express.static("public"));

// Endpoints
// Homepage
app.get("/", (req,res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Using middleware upload.single("<input-field-name> from index.html") to upload file with POST 
// request on /api/submit endpoint.
app.post("/api/fileanalyse", upload.single("upfile"), async (req,res) => {
  // Using try catch. If any error occurs we use common error message.
  try {
    // Create file and save it on database
    const newFile = new File({
      name: `${new Date().getTime()} - ${req.file.originalname}`,
      mimeType: req.file.mimetype,
      data: req.file.buffer
    });

    await newFile.save();
    // We get uploaded file information from req.file object. req.file is only accessible while using
    // multer package. Without multer the sent file can't be parsed.
    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    });
  } catch {
    res.status(404).json({
      error: "File not found to upload"
    });
  }
});

// Create port and listen to a server on the port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is litening on port ${port}`));