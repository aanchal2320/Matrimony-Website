import contactUs from "../models/ContactUs.js";
import PopupFormWedding from "../models/PopupFormWedding.js";
import PopupFormtravel from "../models/PopupFormTravel.js";

export const contactSupport = async (req, res) => {
  const { fullName, mobNo, query } = req.body;
  const contact = new contactUs({
    fullName,
    mobNo,
    query,
  });
  try {
    const result = await contact.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const contactWedding = async (req, res) => {
  const { email, phone, city, budget, weddingType, weddingDate } = req.body;
  const wedding = new PopupFormWedding({
    email,
    phone,
    city,
    budget,
    weddingType,
    weddingDate,
  });
  try {
    const result = await wedding.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const contactTravel = async (req, res) => {
  const { email, phone, city, budget, travelType, travelDate } = req.body;
  const travel = new PopupFormtravel({
    email,
    phone,
    city,
    budget,
    travelType,
    travelDate,
  });
  try {
    const result = await travel.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
