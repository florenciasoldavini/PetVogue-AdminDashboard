import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { validateEmail, validateNonEmpty } from "./validations";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box, Link } from "@mui/material";
import { useEffect, useState } from "react";
import login from "../../redux/actions/login/login";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const response = await dispatch(login({ email, password }));
    console.log("RESPONSE", response);
    if (response?.response?.data?.error) {
      toast.error(response.response.data.error);
    } else {
      navigate("/users");
      setTimeout(() => toast.success("Inicio de sesión exitoso"), 200);
    }
  };

  return (
    <div className="Login">
      <Toaster position="top-center" />
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            margin: "auto",
          }}
        >
          <TextField
            label="Correo electronico"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={!validateEmail(email)}
            helperText={
              !validateEmail(email)
                ? "Por favor, ingrese un correo electrónico válido."
                : ""
            }
            onBlur={() =>
              setEmailValidation(
                validateEmail(email) && validateNonEmpty(email)
              )
            }
          />
          <TextField
            label="Contraseña"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              handlePasswordChange(e);
              setPasswordValidation(
                validateNonEmpty(e.target.value) && e.target.value.length >= 8
              );
            }}
            error={!validateNonEmpty(password) || password.length < 8}
            helperText={
              !validateNonEmpty(password)
                ? "Por favor, ingrese una contraseña."
                : password.length < 8
                ? "La contraseña debe tener al menos 8 caracteres."
                : ""
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            disabled={!emailValidation || !passwordValidation}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Login;
