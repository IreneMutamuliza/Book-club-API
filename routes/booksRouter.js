import express from "express";

const booksRouter = express.Router();

//create a book
booksRouter.post("/", (req, res) =>{
    res.send("this route creates a book");

});

//update a book
booksRouter.put("/", (req, res) =>{
    res.send("this route edits/updates a book");

});

//delete a book
booksRouter.delete("/:id", (req, res) =>{
    res.send("this route deletes a book");

});

//view a book
booksRouter.get("/:id", (req, res) =>{
    res.send("this route views a book");

});

//view all books
booksRouter.get("/", (req, res) =>{
    res.send("this route views all books");

});

export default booksRouter;