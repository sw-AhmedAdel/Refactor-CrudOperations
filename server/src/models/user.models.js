const User = require("./user.mongo");

async function create(user) {
  const newUser = await User(user);
  await newUser.save();
  return {
    status: "sucess",
    user: newUser,
  };
}

async function get() {
  const users = await User.find();
  return {
    status: "sucess",
    users,
  };
}

module.exports = {
  create,
  get,
};
