//Authentication System(Student Portal)
//Implement authentication using express,mongoDb,JWT,and bcyrpt
//post/registerUser:Register a new user with a hashed password
//post/login athenticate user and return a JWT token 
//get/profile Protected route to return user profile data
//post/logout invalidate jwt
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();

const app = express();
connectDB();
// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("Student Auth API Running");
});
// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>  console.log(`Server running on port ${PORT}`));
