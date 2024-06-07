const express = require("express");
const userRouter = require("./routes/user");
const { connectMonogoDB } = require("./connection");
const { logReqRes } = require("./middlewares");

const app = express();
const PORT = 8000;

//connection
connectMonogoDB("mongodb://127.0.0.1:27017/youTubeApp1")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => console.log("Mongo error", err));

//middlerware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("logText.txt"));
//routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`server stated at PORT ${PORT}`));
