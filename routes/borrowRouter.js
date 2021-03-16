import express from "express";

const borrowRouter = express.Router();

//create a record
borrowRouter.post("/", (req, res) =>{
    res.send("this route creates a borrow record");

});

//update a retured book
borrowRouter.put("/", (req, res) =>{
    res.send("this route edits/updates a returned book");

});

//view particular borrowing
borrowRouter.get("/:id", (req, res) =>{
    res.send("this route views a  particular borrowing");

});

//view all borrowing from a particular member
borrowRouter.get("/:id", (req, res) =>{
    res.send("this route views all borrowing from a particular member ");

});

//view all borrowed books
borrowRouter.get("/", (req, res) =>{
    res.send("this route views all borrowed books ");

});
export default borrowRouter;