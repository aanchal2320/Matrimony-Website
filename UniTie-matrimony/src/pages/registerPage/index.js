import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import BackgroundImage from "../../images/registerbg.gif";

const Register = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      p="1rem"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Typography fontWeight="bold" fontSize="0px" color="primary">
        .
      </Typography>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={"#FEECE9"}
      >
        <Typography
          fontWeight="bold"
          fontSize="42px"
          color="black"
          style={{
            fontFamily: "Ink free",
            textAlign: "center",
            padding: "10px",
            marginTop: "-20px",
          }}
        >
          UniTie
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default Register;
