import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    setUsernameError("");
    setPasswordError("");

    let hasError = false;

    if (username !== "admin") {
      setUsernameError("Username is incorrect");
      hasError = true;
    }

    if (password !== "1234") {
      setPasswordError("Password is incorrect");
      hasError = true;
    }

    if (!hasError) {
      alert("Login successful!");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper
        elevation={3}
        style={{
          padding: "60px",
          borderRadius: "10px",
          textAlign: "center",
          width: "550px",
          paddingBlock:"100px"
        }}
      >
        <Typography variant="h4" marginBottom="50px" gutterBottom>
          Student Login
        </Typography>

        <Typography variant="h6" textAlign="left" color="#9e9e9e" gutterBottom>
          Student Name
        </Typography>
        <TextField
          label="Student Name"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameError(""); // Clear the error when user types
          }}
          error={!!usernameError} // Highlights the field in red if there's an error
          helperText={usernameError} // Shows the error message below the field
          style={{ paddingBottom: "20px" }}
          InputProps={{ style: { borderRadius: "50px" } }}
        />

        <Typography variant="h6" textAlign="left" color="#9e9e9e" gutterBottom>
          Student Password
        </Typography>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(""); // Clear the error when user types
          }}
          error={!!passwordError}
          helperText={passwordError} // Shows the error message below the field
          style={{ paddingBottom: "20px" }}
          InputProps={{ style: { borderRadius: "50px" } }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          style={{
            borderRadius: "50px",
            marginTop: "20px",
            padding: "18px",
            width: "300px",
          }}
        >
          Login
        </Button>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          style={{ marginTop: "20px" }}
        >
          <Typography variant="h6">Forgot password / Don’t have login details?</Typography>
          <Typography variant="h6" color="#757575" fontSize="22px">
            Please ask your teacher to provide you the team login user id and
            password
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
