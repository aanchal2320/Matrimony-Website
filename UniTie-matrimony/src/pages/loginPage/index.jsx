import { useTheme, useMediaQuery } from "@mui/material";
import Userstories from "./Userstories";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
   <>
   <Userstories />
   </>
 
  );
};

export default LoginPage;
