const express = require("express");
const router = express.Router();
const userModel = require("../models/UserSchema");

// register api

router.post("/register", async (req, res) => {
  const { fname, lname, email, gender, phone, country, password } = req.body;

  if (
    !fname ||
    !lname ||
    !email ||
    !gender ||
    !phone ||
    !country ||
    !password
  ) {
    res.status(422).send({ msg: "Fields are empty" });
  }

  try {
    const checkEmail = await userModel.findOne({ email: email });
    if (checkEmail) {
      res.status(422).send({ msg: "Email Present" });
    } else {
      let user = new userModel(req.body);
      await user.save();
      res.status(201).send({ msg: "User Registered" });
    }
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
