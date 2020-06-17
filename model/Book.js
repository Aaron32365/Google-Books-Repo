const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 200,
        },
        authors: [{
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 200,
        }],
        link: {
            type: String,
            required: true, 
            trim: true,
            minlength: 1,
            maxlength: 999,
        },
        image: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 200,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 9999,
        }
    }
)

  const Book = mongoose.model("Book", BookSchema);
  
  module.exports = Book;