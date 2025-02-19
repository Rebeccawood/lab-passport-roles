const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
      name: String,
      teacher: String,
      duration: Number,
  },
  {
    timestamps: {
      timestamps: true
    }
  });

const Course = mongoose.model("Course", courseSchema);

module.exports = Course