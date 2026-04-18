const mongoose = require("mongoose"); // mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Use the correct env variable name
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log("MongoDB Error ❌", err); // we are handling error here
  }
};

module.exports = connectDB; // module.exports is used to export functions, objects, or primitives from a given file so they can be used in other files with the require() function.
