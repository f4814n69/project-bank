const Transfer = require("../models/transfer.model");
const User = require("../models/user.model");
exports.signup = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.create({
      name,
      password,
    });
    res.status(201).json({
      status: "succes, message",
      message: "The account has been created succesfully!",
    });
  } catch (error) {}
};

exports.signin = async (req, res) => {
  const { accountNumber, password } = req.body;
  const user = await User.findOne({
    where: {
      accountNumber,
      password,
      status: "active",
    },
  });
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "Invalid password or account number",
    });
  }
  res.status(200).json({
    status: "success",
    message: "Login succesfully",
    user,
  });
};
exports.findOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        status: "active",
        id,
      },
    });
    const userTransfer = await Transfer.findAll({
      where: {
        senderUserId: id,
      },
    });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Successful request",
      userTransfer,
    });
  } catch (error) {
    console.log(error);
  }
};
