import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import FriendRequest from "./FriendRequest/FriendRequest";


const Friend = ({ friendId, name, subtitle, userPicturePath }) => {

  const [popup,setPopUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const friendrequests = useSelector((state)=>state.user.friendRequests);

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = friends.find((friend) => friend._id === friendId);
  const isRequest = friendrequests.find((request)=> request._id===friendId);

  console.log(friendrequests);

  console.log(friendrequests);
  const handlePopUp = () => {
    setPopUp(true);
  }

  const handleYes = () => {
    setPopUp(false);
    sendFriendRequests();
  }

  const handleNo = () => {
    setPopUp(false);
  }

  const sendFriendRequests = async() => {
    try{
      const response = await fetch(
        `https://matrimony-backend.onrender.com/users/${_id}/${friendId}/friendrequests`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.json();
      console.log(result);
      // window.location.reload();
    }catch(error){
      console.log(error);
    }
  }

  const handleRequest = async () => {
    try{
    const response = await fetch(
      `https://matrimony-backend.onrender.com/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
        const data = await response.json();
        // console.log(data);
        dispatch(setFriends({ friends: data }));
        window.location.reload();

    }catch(error){
      console.log(error);
    }
      };


  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
    { (_id != friendId ) && ( 
      <>
    {/* <IconButton
        onClick={handlePopUp}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      > */}
        {isFriend ? (
          <IconButton
          onClick={handleRequest}
          sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
        >
          <PersonRemoveOutlined sx={{ color: primaryDark }}/>
          </IconButton>
        ) : (
          <IconButton
        onClick={handlePopUp}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
          <PersonAddOutlined sx={{ color: primaryDark }} />
          </IconButton>
        )}
      {/* </IconButton> */}
      </> )
        }
        {/* {(_id == friendId) && ( <DeleteIcon />)} */}
       
        <Dialog open={popup} onClose={() => setPopUp(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to send request?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo} color="primary">
            No
          </Button>
          <Button onClick={handleYes} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </FlexBetween>
  );
};

export default Friend;
