import express from "express";

const route = express.Router();

route.post("/register", async (req, res) => {
  res.send("register");
});
























route.post("/login", async (req, res) => {
  res.send("login");
});

export default route;
