import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Card,
  Button,
  useMediaQuery,
  InputLabel,
} from "@mui/material";

const LoginPage = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    login_id: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    login_id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    if (formData.login_id.trim() !== "admin") {
      newErrors.login_id = "Username is incorrect";
      isValid = false;
    }

    if (formData.password.trim() !== "1234") {
      newErrors.password = "Password is incorrect";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    alert("Login successful!");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          width: isMobile ? "100%" : "50%",
          padding: isMobile ? "20px" : "40px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Grid container justifyContent="center" sx={{ mb: 4 }}>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg"
                alt="logo"
                style={{ width: "100px" }}
              />
            </Grid>

            <Box sx={{ marginBottom: "20px" }}>
              <InputLabel htmlFor="login_id" style={{ marginBottom: "10px" }}>
              Username
              </InputLabel>
              <TextField
                fullWidth
                id="login_id"
                name="login_id"
                placeholder="Username"
                value={formData.login_id}
                onChange={handleChange}
                error={!!errors.login_id}
                helperText={errors.login_id}
                InputProps={{
                  sx: {
                    borderRadius: "50px",
                    padding: "25px 12px",
                    height: "40px",
                  },
                }}
                required
              />
            </Box>

            <Box sx={{ marginBottom: "20px" }}>
              <InputLabel
                htmlFor="password"
                style={{ marginBottom: "10px", marginTop: "25px" }}
              >
                Password
              </InputLabel>
              <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  sx: {
                    borderRadius: "50px",
                    padding: "25px 12px",
                    height: "40px",
                  },
                }}
                required
              />
            </Box>

            <Grid container justifyContent="center" sx={{ mb: 3 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{
                  borderRadius: "50px",
                  padding: "18px",
                  width: "250px",
                }}
              >
                Login
              </Button>
            </Grid>

            <Grid container justifyContent="center" sx={{ mb: 4 }}>
              <Typography variant="subtitle1"> Forgot password&nbsp;&nbsp;/&nbsp;&nbsp;</Typography>
              <Typography variant="subtitle1">
                Don't have login details?
              </Typography>
              <Typography variant="h6" fontWeight="lighter">
                Please ask your teacher for the login user ID and password.
              </Typography>
            </Grid>
          </form>
        </Container>
      </Card>
    </Container>
  );
};

export default LoginPage;
