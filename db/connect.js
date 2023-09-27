const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  mimeType: {
    type: String,
    require: true
  },
  data: {
    type: Buffer,
    require: true
  }
});

module.exports = mongoose.model("File", fileSchema);