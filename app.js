const express = require("express");
const userModel = require("./models/user");
const app = express();
const usersData = require("./dummydata.js");

app.get("/", function (req, res) {
  res.send("working");
});

// insertMany
app.get("/createMany", async function (req, res) {
  let data = await userModel.insertMany(usersData);

  res.send(data);
});

//eq operator
app.get("/users", async function (req, res) {
  let user = await userModel.find({ age: { $eq: 30 } });

  res.send(user);
});
//ne operator
app.get("/ne", async function (req, res) {
  let user = await userModel.find({ age: { $ne: 30 } });

  res.send(user);
});
//lt operator
app.get("/lt", async function (req, res) {
  let user = await userModel.find({ age: { $lt: 30 } });

  res.send(user);
});
//lte operator
app.get("/lte", async function (req, res) {
  let user = await userModel.find({ age: { $lte: 30 } });

  res.send(user);
});
//gt operator
app.get("/gt", async function (req, res) {
  let user = await userModel.find({ age: { $gt: 30 } });

  res.send(user);
});
//gte operator
app.get("/gte", async function (req, res) {
  let user = await userModel.find({ age: { $gte: 30 } });

  res.send(user);
});
//in operator
app.get("/in", async function (req, res) {
  let user = await userModel.find({ age: { $in: [25, 26, 31] } });

  res.send(user);
});
//nin operator
app.get("/nin", async function (req, res) {
  //   let user = await userModel.find({ age: { $nin: [25, 30] } });
  let user = await userModel.find({ isMarried: { $nin: false } });

  res.send(user);
});

//exists operator search on the basis of a fields existance in schema
app.get("/exists", async function (req, res) {
  let user = await userModel.find({ isAdmin: { $exists: true } });

  res.send(user);
});
// and and or operators for joined query
app.get("/joined", async function (req, res) {
  let user = await userModel.find({
    $or: [{ age: { $gte: 35 } }, { isMarried: false }],
  });
  //   let user = await userModel.find({
  //     $and: [{ age: { $gte: 35 } }, { isMarried: true }],
  //   });

  res.send(user);
});

//Regex operator
app.get("/regex", async function (req, res) {
  let user = await userModel.find({ name: { $regex: /^a.*n$/i } });

  res.send(user);
});
app.listen(3000);
