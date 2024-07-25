const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

const getTodos = async (req, res, next) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

const getTodo = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such task" });
  }
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ error: "No such task" });
  }
  res.status(200).json(todo);
};

const createTodo = async (req, res, next) => {
  const { title, duedate } = req.body;
  try {
    const todo = await Todo.create({ title, duedate });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such task" });
  }
  const todo = await Todo.findOneAndDelete({ _id: id });
  if (!todo) {
    return res.status(404).json({ error: "No such task" });
  }
  res.status(200).json(todo);
};

const updateTodo = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such task" });
  }
  const todo = await Todo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!todo) {
    return res.status(404).json({ error: "No such task" });
  }
  res.status(200).json(todo);
};

module.exports = { getTodos, getTodo, createTodo, deleteTodo, updateTodo };
