require("dotenv").config();
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { mongoConnect } = require("./services/mongo");

async function startServer() {
  await mongoConnect();

  server.listen(process.env.PORT, () => {
    console.log("Running Server");
  });
}

startServer();
