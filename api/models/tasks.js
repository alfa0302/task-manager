const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "in progress", "completed"],
    default: "pending",
  },
  dueDate: {
    type: Date,
    required: true,
  },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, red: "User" },
  attachments: [{ type: String }],
  todoCheckList: [todoSchema],
  progress: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
module.exports = mongoose.model("Task", taskSchema);
