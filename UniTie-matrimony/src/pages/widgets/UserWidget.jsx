import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FriendRequest from "components/FriendRequest/FriendRequest";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
  const paramsCheck = useParams();

  const getUser = async () => {
    const response = await fetch(`https://matrimony-backend.onrender.com/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    friends,
    horoscope,
    religion,
    nationality,
    maritialStatus,
  } = user;

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage
            image={
              picturePath.startsWith("https")
                ? "defaultProfile.png"
                : picturePath
            }
          />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>
      <Divider />
      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <img src="../assets/icons8-location-24.png" alt="location" />
          <Typography color={medium}>
            {" "}
            {location ? location : "------------"}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <img src="../assets/icons8-suitcase-24.png" alt="occupation" />
          <Typography color={medium}>
            {occupation ? occupation : "------------"}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <img src="../assets/icons8-hand-24 (1).png" alt="horoscope" />
          <Typography color={medium}>
            {horoscope ? horoscope : "------------"}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <img src="../assets/icons8-earth-24.png" alt="nationality" />
          <Typography color={medium}>
            {nationality ? nationality : "------------"}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <img src="../assets/icons8-pray-24.png" alt="religion" />
          <Typography color={medium}>
            {religion ? religion : "------------"}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <img src="../assets/icons8-ring-24.png" alt="maritialStatus" />
          <Typography color={medium}>
            {maritialStatus ? maritialStatus : "------------"}
          </Typography>
        </Box>
      </Box>
      <Divider />
      {!paramsCheck.userId && <FriendRequest />}

      {/* THIRD ROW */}
      <Divider />
      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <a href="https://www.twitter.com">
              <img src="../assets/twitter.png" alt="twitter" />
            </a>
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>{firstName}@twitter.com</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem" pb="1.1rem">
            <a href="https://www.facebook.com">
              <img src="../assets/icons8-facebook-24grey.png" alt="facebook" />
            </a>
            <Box>
              <Typography color={main} fontWeight="500">
                Facebook
              </Typography>
              <Typography color={medium}>{firstName}@facebook.com</Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>
        <Divider />

        {/* SECOND ROW */}

        <Box p="1.5rem 0">
          <Box display="flex" alignItems="center" gap="1rem">
            {!paramsCheck.userId && (
              <Typography color={main}>
                <a href="/completeprofile">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#FF80AB" }}
                  >
                    Complete Your Profile
                  </Button>
                </a>
              </Typography>
            )}
          </Box>
        </Box>

        {/* <Divider /> */}
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
