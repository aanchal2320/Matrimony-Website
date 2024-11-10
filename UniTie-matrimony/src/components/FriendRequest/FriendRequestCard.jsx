import FlexBetween from "components/FlexBetween";
import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import UserImage from "../UserImage";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendRequestCard = ({ friendId, name, subtitle, userPicturePath }) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const token = useSelector((state)=>state.token);
  const {_id} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(_id);
  console.log(friendId)
  const removeRequest = async () => {
    try{
      const response = await fetch(
        `https://matrimony-backend.onrender.com/users/${_id}/${friendId}/removerequest`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      window.location.reload();
      console.log(result);
    }
    catch(error){
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
        await removeRequest();
        window.location.reload();

    }catch(error){
      console.log(error);
    }
      };


  return (
    <FlexBetween>
      <FlexBetween gap="1.2rem">
        <UserImage image={userPicturePath} size="30px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h6"
            fontWeight="500"
            fontStyle="normal"
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
      <IconButton  onClick={handleRequest}>
      <CheckCircleOutlineIcon
        style={{ cursor: "pointer" }}
       
      />
      </IconButton>
     <IconButton onClick={removeRequest} >
      <CancelIcon style={{ cursor: "pointer" }} />
    </IconButton>
    </FlexBetween>
  );
};

export default FriendRequestCard;
