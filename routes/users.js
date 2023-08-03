const express = require("express");
const router = express.Router();

const usersData = require("../models/users.models");

router.get("/", (req, res) => {
  res.json(usersData)
});

router.post("/", (req, res) => {
  let newUser = {
    id: usersData.length + 1,
    userName: req.body.userName,
    age: req.body.age,
  };
  console.log(newUser);
  usersData.push(newUser);

  res.send({
    user: newUser,
    message: "Message received Successfully...",
  });
});

router.put("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = {
    id: userId,
    userName: req.body.userName,
    age: req.body.age,
  };

  const index = usersData.findIndex(user => user.id === userId);
  if (index !== -1) {
    usersData[index] = updatedUser;
    res.send({
      user: updatedUser,
      message: "User updated successfully...",
    });
  } else {
    res.status(404).send("User not found");
  }
});

router.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const index = usersData.findIndex(user => user.id === userId);
  if (index !== -1) {
    const deletedUser = usersData.splice(index, 1)[0]; // Remove the user at the found index
    res.send({
      user: deletedUser,
      message: "User deleted successfully...",
    });
  } else {
    res.status(404).send("User not found");
  }
});


module.exports = router;