import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriendRequests } from "state";
import FriendRequestCard from "./FriendRequestCard";

const FriendRequest = () => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  const [isPending, isSetPending] = useState(true);
  const [requests,setRequests] = useState([]);
  const [check,setCheck] = useState(false);
  const token = useSelector((state)=>state.token)
  const userId = user._id;
  // const friendRequests = useSelector((state)=>state.user.friendRequests);
  
  useEffect(()=>{
    const getFriendRequests = async() => {
      // console.log(user)
        try{
        const response = await fetch(
          `https://matrimony-backend.onrender.com/users/${userId}/friendrequests`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/JSON",
            },
          }
        );
        const data = await response.json();
        setRequests(data);
        dispatch(setFriendRequests({ friendRequests: data }));
        isSetPending(false);
        // console.log(data);
    }catch(err){
        console.log(err);
    }
    }
    getFriendRequests();
    setCheck(false);
  },[check])
  return (
    <div>
      <button  style={{padding:'5px', margin:'4px 0px',fontSize:'16px',border:'none', cursor:'pointer', width:'100%'}}onClick={(e)=>setCheck(true)}> 
            Check Requests
      </button>
     
      {requests.length ? (requests.map((friend) => (
          <FriendRequestCard
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))): <p>No pending requests, click the above button to check!</p> }
    </div>
  );
};

export default FriendRequest;
