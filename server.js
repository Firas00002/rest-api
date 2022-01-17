const express = require("express");
const connect = require("./config/connectDB");
const User = require("./models/User");
require("dotenv").config({ path: "./config/.env" });

var app = express();

app.use(express.json());

var PORT = process.env.PORT || 8000;

connect();

app.listen(PORT, (error) =>
  error ? console.error(error) : console.log(`server run on port: ${PORT}`)
);

app.post("/add", async (req, res) => {
  const { Fullname, email, phone } = req.body;
  try {
    const newUser = new User({
      Fullname,
      email,
      phone,
    });
    await newUser.save();
    res.send("done");
  } catch (error) {
    console.log(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

app.get("/get/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.put("/put/:id", async (req,res ) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.send(updateUser)
  } catch (error) {
      console.log(error)
  }
});

app.delete('/delete/:id',async(req,res)=>{
    try {
        const deleteuser= await User.findOneAndDelete(req.params.id)
        res.send('user deleted')
    } catch (error) {
        console.log(error)
    }
})
