import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register user
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      friendRequests,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      friendRequests,
      location,
      occupation,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Complete Profile

export const completeProfile = async (req, res) => {
  try {
    const {
      loggedUser,
      firstName,
      lastName,
      dob,
      gender,
      religion,
      occupation,
      annualIncome,
      horoscope,
      nationality,
      height,
      location,
      maritialStatus,
    } = req.body;
    const userId = loggedUser._id;

    // console.log(userId)
    const result = await User.updateOne(
      { _id: userId },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          gender: gender,
          religion: religion,
          nationality: nationality,
          occupation: occupation,
          annualIncome: annualIncome,
          maritialStatus: maritialStatus,
          height: height,
          location: location,
          horoscope: horoscope,
        },
      }
    );
    console.log(result);
    if (result.modifiedCount > 0)
      res.status(200).json({ "Doc affetcted": result.modifiedCount });
    else res.status(404).json({ msg: "Email not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
