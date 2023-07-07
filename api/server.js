import express from "express";
import mongoose from "mongoose";

const app = express();

app.listen(8800, () => {
  console.log("Backend server is running");
});
