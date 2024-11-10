import { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal, TextField } from "@material-ui/core";

import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Message, DarkMode, LightMode, Menu, Close } from "@mui/icons-material";
import MessageIcon from "@mui/icons-material/Message";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { Link, useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Button = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  color: #1d267d;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = useSelector((state) => state.user._id);
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchDetails, setSearchDetails] = useState([]);

  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();

  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;

  const alt = theme.palette.background.alt;

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
  };

  const handleSearch = (query) => {
    setQuery(query);
    fetch("https://matrimony-backend.onrender.com/users/search-users", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setSearchDetails(result.user);
      });
  };

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontFamily="Ink free"
          // fontStyle="italic"

          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="#FF4081"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          UniTie
          {/* <img src='../../images/unitielogo.png' width={182} height={64} /> */}
        </Typography>

        <div>
          <a
            onClick={handleOpen}
            style={{ color: { dark }, cursor: "pointer" }}
          >
            <SearchIcon fontSize="large" />
          </a>
          <Modal open={open} onClose={handleClose}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <h2 style={{ color: "#EC407A" }}>Search</h2>
              <TextField
                label="Search"
                fullWidth
                autoFocus
                value={query}
                style={{ textDecoration: "none" }}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {searchDetails.map((item) => {
                return (
                  <Link
                    to={"/profile/" + item._id}
                    style={{ textDecoration: "none" }}
                    onClick={() => {
                      setQuery("");
                    }}
                  >
                    {" "}
                    <p
                      className="collection-item"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "15px",
                      }}
                    >
                      {item.email}
                    </p>{" "}
                  </Link>
                );
              })}
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginTop: "20px",
                  background: "#039BE5",
                  color: "white",
                }}
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </Modal>
        </div>
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <Typography
            fontWeight="bold"
            fontSize="1.2rem"
            color="#000000"
            onClick={() => navigate("/home")}
            sx={{
              "&:hover": {
                color: "#000000",
                cursor: "pointer",
              },
            }}
          >
            <a
              style={{ textDecoration: "none", color: "#FF4081" }}
              href="/events"
            >
              Events
            </a>
          </Typography>
          <Typography
            fontWeight="bold"
            fontSize="1.2rem"
            color="#000000"
            onClick={() => navigate("/home")}
            sx={{
              "&:hover": {
                color: "#000000",
                cursor: "pointer",
              },
            }}
          >
            <a
              style={{ textDecoration: "none", color: "#FF4081" }}
              href="/contact"
            >
              Contact
            </a>
          </Typography>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: "#FF4081", fontSize: "25px" }} />
            )}
          </IconButton>
          <Link to="/chat">
            <MessageIcon
              sx={{ color: "#FF4081", fontSize: "25px", marginTop: "10px" }}
            />
          </Link>

          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: "#F48FB1",
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: "#F48FB1",
                },
              }}
              input={<InputBase />}
            >
              <MenuItem
                value={fullName}
                onClick={() => navigate(`/profile/${userId}`)}
              >
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate("/subscription")}>
                Subscribe Now
              </MenuItem>
              <MenuItem onClick={() => navigate("/weddingPage")}>
                Wedding Plan
              </MenuItem>

              <MenuItem onClick={() => navigate("/travelPage")}>
                Travel With Us
              </MenuItem>
              {/* <MenuItem onClick={() => navigate("/subsPayment")}>
                Pay Now
              </MenuItem> */}
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <Typography
              fontWeight="bold"
              fontSize="1.2rem"
              color="#000000"
              onClick={() => navigate("/home")}
              sx={{
                "&:hover": {
                  color: "#000000",
                  cursor: "pointer",
                },
              }}
            >
              <a
                style={{ textDecoration: "none", color: "#FF4081" }}
                href="/events"
              >
                Events
              </a>
            </Typography>
            <Typography
              fontWeight="bold"
              fontSize="1.2rem"
              color="#000000"
              onClick={() => navigate("/home")}
              sx={{
                "&:hover": {
                  color: "#000000",
                  cursor: "pointer",
                },
              }}
            >
              <a
                style={{ textDecoration: "none", color: "#FF4081" }}
                href="/contact"
              >
                Contact
              </a>
            </Typography>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: "#FF4081", fontSize: "25px" }} />
              )}
            </IconButton>

            <Link to="/chat">
              <MessageIcon
                sx={{ color: "#FF4081", fontSize: "25px", marginTop: "10px" }}
              />
            </Link>

            {/* <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} /> */}
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: "#F48FB1",
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: "#F48FB1",
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigate("/weddingPage")}>
                  Wedding Planner
                </MenuItem>
                <MenuItem onClick={() => navigate("/travelPage")}>
                  Travel Planner
                </MenuItem>
                <MenuItem onClick={() => navigate("/subscription")}>
                  Subscribe Now
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
