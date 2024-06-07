const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  res.json(allDbUsers);
}
async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, {
    lastName: "changed",
  });
  res.json({ status: "success" });
}
async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: "success" });
}
async function handleGetUserById(req, res) {

  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
} 
async function handleCreateUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.jobTitle ||
    !body.gender
  ) {
    res.status(400).json({ error: "All fields are required" });
  }
  const user = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.jobTitle,
    gender: body.gender,
  });

  res.status(201).json({ status: "success", id: user._id });
}

module.exports = {
  handleGetAllUsers,
  handleUpdateUserById,
  handleDeleteUserById,
  handleGetUserById,
  handleCreateUser,
};
