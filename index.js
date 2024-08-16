const express = require("express");

const {logReqRes} = require("./middlewares");

const {connectMongoDb} = require("./connection");

const userRouter = require("./routes/user");

const app = express();
const port = 8000;

//Connection
connectMongoDb("mongodb://localhost:27017/youtube-app-1").then(() =>
   console.log("Mongodb Connected!")
);

//midleware
app.use(express.urlencoded({extended: false}));

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

app.listen(port, () => console.log(`Server start at port: ${port}`));
