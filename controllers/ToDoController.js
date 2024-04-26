const { text } = require("express");
const ToDoModel = require("../models/ToDoModel");

// List
module.exports.getTodo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

// Create

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then((data) => {
      console.log("Data Added Successfully");
      console.log(data);
      res.send(data);
    })
    .catch((e) => console.log(e));
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send("Updated Successfully...");
    })
    .catch((e) => console.log(e));
};

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
  
    ToDoModel.findByIdAndDelete(_id)
      .then(() => {
        res.send("Deleted Successfully...");
      })
      .catch((e) => console.log(e));
  };