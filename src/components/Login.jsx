import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PocketBase from "pocketbase";
import ServerDB from "../helpers/DB";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { modifyLoggedIn } from "../redux/features/loginSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a href="mailto:jorge920801@gmail.com">Jorge Luis Durán Montero</a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [MsgOpen, setMsgOpen] = React.useState(false);
  const [SeverityMsg, setSeverityMsg] = React.useState("");
  const [Msg, setMsg] = React.useState("");
  const OpenMsg = () => {
    setMsgOpen(true);
  };
  const CloseMsg = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMsgOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    if (!email) {
      OpenMsg();
      setSeverityMsg("error");
      setMsg("Email Requerido");
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i.test(email)) {
        OpenMsg();
        setSeverityMsg("error");
        setMsg("Email No Válido");
      } else {
        if (!password) {
          OpenMsg();
          setSeverityMsg("error");
          setMsg("Password Requerido");
        } else {
          if (!/^[A-Z0-9._%+*@-]{5,25}$/i.test(password)) {
            OpenMsg();
            setSeverityMsg("error");
            setMsg(
              "Password No Válido(Símbolos no Permitidos o menor de 5 caracteres)"
            );
          } else {
            try {
              const client = new PocketBase(ServerDB);
              const userData = await client.users.authViaEmail(email, password);
              dispatch(modifyLoggedIn({ data: true }));
              navigate("/", { replace: true });
            } catch (error) {
              //console.log(error.message);
              OpenMsg();
              setSeverityMsg("error");
              setMsg(
                error.message === "Failed to authenticate."
                  ? "Email o Password Incorrecto!"
                  : error.message
              );
            }
          }
        }
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <AccountCircleSharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
        <Snackbar open={MsgOpen} autoHideDuration={3000} onClose={CloseMsg}>
          <Alert
            onClose={CloseMsg}
            severity={SeverityMsg}
            sx={{ width: "100%" }}
          >
            {Msg}
          </Alert>
        </Snackbar>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;
