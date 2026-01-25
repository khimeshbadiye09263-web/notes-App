const express = require("express");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

// DB connect
connectDB();

// middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", noteRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// cd "c:\Users\khime\OneDrive\Desktop\professional\notes-app" ; npm start