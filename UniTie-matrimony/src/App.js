import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import LoginPage from "pages/loginPage";
import ProfilePage from "pages/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Register from "pages/registerPage";
import CompleteProfile from "pages/completeProfilePage";
import Events from "pages/eventsPage";
import ContactUs from "pages/contactPage";
import Subscription from "pages/subscription";
import SuccessPage from "pages/successPage";
import Wedding from "pages/weddingPage";
import Travel from "pages/travelPage";
import ChatApp from "pages/chattingPage";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  var isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
            <Route
              path="/contact"
              element={isAuth ? <ContactUs /> : <Navigate to="/" />}
            />
            <Route
              path="/completeprofile"
              element={isAuth ? <CompleteProfile /> : <Navigate to="/" />}
            />
            <Route exact path="/events" element={<Events />} />
            <Route
              exact
              path="/subscription"
              element={isAuth ? <Subscription /> : <Navigate to="/" />}
            />
            <Route
              path="/success"
              element={isAuth ? <SuccessPage /> : <Navigate to="/" />}
            />
            <Route
              path="/chat"
              element={isAuth ? <ChatApp /> : <Navigate to="/" />}
            />
            <Route
              exact
              path="/weddingPage"
              element={isAuth ? <Wedding /> : <Navigate to="/" />}
            />
            <Route
              exact
              path="/travelPage"
              element={isAuth ? <Travel /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
