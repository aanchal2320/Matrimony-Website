import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
      );
      res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getFriendRequests = async(req,res) => {
  
  const {id} = req.params;
  try{
  const user = await User.findById(id);
  const friendRequests = await Promise.all(
    user.friendRequests.map((id) => User.findById(id))
  );
  const formattedFriends = friendRequests.map(
    ({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    }
    );
    res.status(200).json(formattedFriends);
}catch(error){
  res.status(500).json(error);
}
}

export const searchUsers = async(req,res) => {
  try{
    let userPattern = new RegExp("^"+req.body.query)
    const user = await User.find({email:{$regex:userPattern}})
    .select("_id email")
    res.status(200).json({user});
  }
  catch(err){
    res.status(404).json({message:err.message});
  }

}


/* UPDATE */

export const sendFriendRequests = async(req,res) => {
  const { id, friendId } = req.params;
  try{
  const user = await User.findById(id);
  const friend = await User.findById(friendId);
  if (friend.friendRequests.includes(id)) {
    friend.friendRequests = friend.friendRequests.filter((id) => id !== id);
  } else {
    friend.friendRequests.push(id);
  }
  await friend.save();
  res.status(200).json({"msg":"request successfull!"})
}catch(error){
  res.status(500).json(error);
}

}

export const removeAcceptedFriendRequests = async(req,res) => {
  const {id , friendId} = req.params;
  try{
    const user = await User.findById(id);
    user.friendRequests = user.friendRequests.filter((id)=>id!==friendId);
    await user.save();
    res.status(200).json(user)
  }
  catch(error){
    res.status(500).json(error);
  }
}

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};