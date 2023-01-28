const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../database/models/user");

router.post("/post", async (req, res) => {
  const { name, email, password } = req.body;
  const data = new User({
    name,
    email,
    password,
  });
  try {
    const saveData = await data.save();
    res.status(200).send(saveData);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// getAll users
router.get("/getAll", async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// get one User
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) {
      res.json({ message: `ID : ${req.params.id}` });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// update
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = req.body;
    const option = { new: true };
    const result = await User.findByIdAndUpdate(id, updateUser, option);
    res.send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// delete
router.delete('/delete/:id', async (req, res) =>{
   try{
    const id = req.params.id;
    const delUser = await User.findByIdAndDelete(id);
    res.send('Data is Deleted');
   }catch(error){
    res.status(400).send({ message: error.message });
    
   }
})

module.exports = router;
