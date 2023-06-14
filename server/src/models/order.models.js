const Order = require("./order.mongo");

async function create(order) {
  const newOrder = await Order(order);
  await newOrder.save();
  return {
    status: "sucess",
    order: newOrder,
  };
}

async function get() {
  const orders = await Order.find();
  return {
    status: "sucess",
    orders,
  };
}

module.exports = {
  create,
  get,
};
