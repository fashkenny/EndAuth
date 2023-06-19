const express = require("express");
const userModel = require("../model/userModel");

//get all users

const getAllUser = async (req, res) => {
  try {
    const getUsers = (await userModel.find()).reverse();
    res.status(200).json({
      message: "gotten all users",
      data: getUsers,
    });
  } catch (error) {
    res.status(404).json({
      message: "couldnt get all users",
    });
  }
};

const newUser = async (req, res) => {
  try {
    const { name, email, password, isFemale, phoneNumber } = req.body;

    const createUser = await userModel.create({
      name,
      email,
      phoneNumber,
      password,
      isFemale,
    });
    res.status(201).json({
      message: "create a new users",
      data: createUser,
    });
  } catch (error) {
    res.status(404).json({
      message: "couldnt create users",
    });
  }
};

module.exports= {getAllUser, newUser}