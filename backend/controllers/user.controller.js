import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, password, phoneNumber, role } = req.body;

    if (!fullname || !email || !password || !phoneNumber || !role) {
      return res.status(400).json({
        message: "Please fill all the details",
        success: false,
      });
    }
    const file=req.file
 let cloudResponse = null;

    // UPLOAD PROFILE PHOTO IF PROVIDED
    if (file) {
      const fileUri = getDataUri(file);

      cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "image",
        folder: "profile-photos",
      });
    }

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullname: fullname,
      email: email,
      password: hashedPassword,
      role: role,
      phoneNumber: phoneNumber,
      profile:{
   profilePhoto: cloudResponse?.secure_url || null, 
      }
    });
    return res.status(201).json({
      message: "Account Created Successfully",
      newUser,
      success: true,
    });
  } catch (error) {
    console.log("Error in Register Controller", error);
    return res.status(500).json({ message: "Internal server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Please fill all the details",
        success: false,
      });
    }
    let user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid Credentials.", success: false });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ message: "Invalid Credentials", success: false });
    }
    //check the correct role
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account does not exists with current role.",
        success: false,
      });
    }

    //preparing user to send in response
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    //generating token
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "lax",
        secure:false,
        path:'/'
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log("Error in login controller", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logout Successfully", success: true });
  } catch (error) {
    console.log("Error in logout controller", error);
    return res.status(500).json("Internal Server Error");
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, skills, bio } = req.body;

    let cloudResponse = null;  // <-- declare outside
const file=req.file
if (file) {
  const fileUri = getDataUri(file);

  cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
    resource_type: "raw",
    folder: "resumes",
    public_id: `${Date.now()}.pdf`
  });
}

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.id; // middleware authentication
    let user = await User.findById(userId);

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", success: false });
    }
    // updating data
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;

    if (cloudResponse) {
      user.profile.resume = cloudResponse.secure_url; // saving resume link
      user.profile.resumeOriginalName = file.originalname; //save file name
    }

    await user.save();

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .json({ message: "Profile Updated", user, success: true });
  } catch (error) {
    console.log("Error in updateprofile controller", error);
  }
};
