import React, { useState } from "react";
import { Box, Button, Typography, Switch } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import LoginForm from "./componets/LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleToggle = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      {isLoggedIn ? (
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          color="primary"
          style={{ borderRadius: "50px", marginBottom: "20px" }}
          onClick={handleToggle}
        >
          Login with Google
        </Button>
        
      ) : (
          <LoginForm />
      )}

      {isLoggedIn && (
        <>
        <Typography
          variant="body2"
          style={{ marginTop: "20px", color: "gray" }}
        >
          Login with Student ID
        </Typography>

        <Switch
            checked={!isLoggedIn} // Switches back to Google login
            onChange={handleToggle}
            color="primary"
            sx={{ marginTop: 0 }} // No additional margin to prevent gaps
          />
          </>
      )}
    </Box>
  );
};

export default App;
