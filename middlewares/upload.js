const multer = require("multer");

// // Set up storage for uploaded files
// const storage = multer.diskStorage({
//   // destination is how we tell multer where to upload file sent from HTTP request.
//   // req is the request object, file is the file itself uploaded from request and cb is the callback
//   // function with which we specify where to upload the file.
//   // In this case "uploads" is the folder named "uploads" in the project's root directory.
//   // For hosting this won't be useful and we should use server where the data will be stored.
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   // Same goes here but with filename and as opposed to destination, callback function is used to
//   // specify filename. We use { new Date().getTime() } for timestamp will be added to the filename
//   // and there won't be any confusions in naming. All of them will be unique in spite of same names.
//   filename: (req, file, cb) => {
//     cb(null, `${new Date().getTime()} - ${file.originalname}`);
//   }
// });

// For host we do not want file to be saved on disk storage so we use memory storage.
// Memory storage won't save the given file on server storage but will be accessible for further tasks.
const storage = multer.memoryStorage();

// Create multer instance
const upload = multer({storage: storage});
module.exports = upload;