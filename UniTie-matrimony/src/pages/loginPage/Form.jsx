import styled from "styled-components";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const loginSchema = yup.object().shape({
  // email: yup.string().email("invalid email").required("required"),
  // password: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().min(8, 'Password must be at least 8 characters').matches(

   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/,
    
     'Password must contain at least one lowercase letter, one uppercase letter, and one special character'
    
     ).required('Required'),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const login = async (values, onSubmitProps) => {
  //   const loggedInResponse = await fetch(
  //     "https://matrimony-backend.onrender.com/auth/login",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(values),
  //     }
  //   );
  //   const loggedIn = await loggedInResponse.json();
  //   onSubmitProps.resetForm();
  //   if (loggedIn) {
  //     dispatch(
  //       setLogin({
  //         user: loggedIn.user,
  //         token: loggedIn.token,
  //       })
  //     );
  //     navigate("/home");
  //   }

  try {
      const loggedInResponse = await fetch(
        "https://matrimony-backend.onrender.com/auth/login",
        {
          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(values),
        }
      );

      if (loggedInResponse.ok) {
        const loggedIn = await loggedInResponse.json();

        onSubmitProps.resetForm();

        dispatch(
          setLogin({
            user: loggedIn.user,

            token: loggedIn.token,
          })
        );

        navigate("/home");
      } else {
        const errorResponse = await loggedInResponse.json();

        onSubmitProps.setStatus(errorResponse.msg); // Set error message

        onSubmitProps.setSubmitting(false); // Set submitting state to false
      }
    } catch (error) {
      console.error(error);

      onSubmitProps.setStatus("An error occurred. Please try again."); // Set generic error message

      onSubmitProps.setSubmitting(false); // Set submitting state to false
    }
  };

  const createOrGetUser = async (req, res) => {
    // console.log(req.credential);
    const token = req.credential;
    const decoded = jwt_decode(req.credential);
    // console.log(decoded);
    const { given_name, family_name, email, picture } = decoded;

    const googleUser = {
      firstName: given_name,
      lastName: family_name,
      email: email,
      picturePath: picture,
      password: "",
      friends: [],
      location: "To be updated",
      occupation: "To be updated",
    };

    const password = googleUser.password;

    const loggedInResponse = await fetch(
      "https://matrimony-backend.onrender.com/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const loggedIn = await loggedInResponse.json();
    console.log(loggedIn);

    if (!loggedIn.msg) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
    } else {
      const googleLogged = await fetch(
        "https://matrimony-backend.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(googleUser),
        }
      );
      const googleLoggedIn = await googleLogged.json();
      dispatch(
        setLogin({
          user: googleLoggedIn,
          token: token,
        })
      );
    }
    navigate("/home");
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
      enableReinitialize={true}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        status,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email ? errors.email : ""}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={
                touched.password && errors.password ? errors.password : ""
              }
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "1rem 0",
                p: "1rem",
                backgroundColor: "#EA6363",
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              LOGIN
            </Button>

            {status && (
              <Typography
                color="error"
                sx={{
                  gridColumn: "span 4",
                  textAlign: "center",
                  marginBottom: "1rem",
                  color: "#B71C1C",
                }}
              >
                {status}
              </Typography>
            )}

            <Typography style={{ textAlign: "center" }}>OR</Typography>

            <Button
              fullWidth
              type="submit"
              sx={{
                m: "0.8rem 0",
                p: "1rem",
                height: "3.5rem",
                backgroundColor: "white", // set background color to white
                color: palette.background.alt,
                "&:hover": {
                  backgroundColor: "#ECEFF1", // set background color to grey on hover
                  color: palette.primary.main,
                },
              }}
            >
              <GoogleLogin
                onSuccess={(response) => createOrGetUser(response)}
                onError={() => {
                  console.log("Login Failed");
                }}
              >
                SIGN IN WITH GOOGLE
              </GoogleLogin>
            </Button>
            <Typography
              onClick={() => {
                resetForm();
              }}
              sx={{
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              <a
                href="/register"
                style={{
                  color: "white",
                  textDecorationLine: "none",
                  marginLeft: "8%",
                  fontSize: "14px",
                }}
              >
                Don't have an account? Sign Up here.
              </a>
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
