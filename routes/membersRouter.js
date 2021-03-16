import express from "express";
import {addMember} from "../controllers/memberControllers.js"

const membersRouter = express.Router();

//record a member
membersRouter.post("/", (req, res) =>{
    res.send("this route records a member");

});

//update a member
membersRouter.put("/", (req, res) =>{
    res.send("this route updates a member");

});

//delete a member
membersRouter.delete("/:id", (req, res) =>{
    res.send("this route deletes a member");

});

export default membersRouter;