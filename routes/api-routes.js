const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const db = require("../model");

router.get("/api/savedBooks", (req,res) => {
    db.Book.find({},
        (err, docs) => {
            if(err){
                console.log(err)
                return res.json(err)
            }
            console.log("saved docs: ",docs)
            res.json(docs)
        })
})

router.post("/api/deleteBook", (req, res) => {
    // console.log(req.body)
    const {book} = req.body
    db.Book.findOne(
        {title: book},
        (err, doc) => {
            if( err){
                console.log(err)
                return res.json(err)
            }
            else{
                console.log(doc)
                db.Book.deleteOne(
                    { _id : doc._id },
                    (err, doc) => {
                        if(err){
                            console.log(err)
                            res.json(err)
                        }else{
                            console.log("deletion response: ", doc)
                            res.json({...doc, message: "Book Removed!"})
                            // setTimeout(() => {
                            //     res.redirect(307, "/save");
                            // }, 2000);
                        }
                    }
                )
                // return res.json(doc)
            }
        }
    )
    // db.Book.deleteOne()
})

router.post("/api/saveBook", (req, res) => {
    const {title, authors, description, image, link} = req.body;
    db.Book.findOne(
        {title: title},
        (err, doc) =>{
            if(err){
                console.log(err)
                res.json(err)
            }
            else if(doc === null){
                db.Book.create({
                    title:title,
                    authors:authors,
                    description:description,
                    link:link,
                    image:image
                }, (err, doc) => {
                    if(err){
                        return res.json(err)
                    }
                    else{
                        console.log("new doc saved")
                        return res.json({...doc, message: "New book saved!"})
                    }
                })
            }
            else{
                return res.json({"message": "Book is already saved!"})
            }
        })

  })
  
module.exports = router