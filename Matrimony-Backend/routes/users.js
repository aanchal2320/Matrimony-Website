import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  searchUsers,
  getFriendRequests,
  sendFriendRequests,
  removeAcceptedFriendRequests
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//Read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

//update
router.post("/search-users", searchUsers);
router.get("/:id/friendrequests",verifyToken,getFriendRequests);
router.post("/:id/:friendId/removerequest",verifyToken,removeAcceptedFriendRequests);
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);
router.post("/:id/:friendId/friendrequests",verifyToken,sendFriendRequests);


export default router;
