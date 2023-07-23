"use client";

import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  OutlinedInput,
  Button,
  InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const LoginComponent = () => {
  const [otp, setOtp] = useState("");
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: "url(/login_screen.svg)",
        backgroundSize: "cover",
        maxWidth: "none !important",
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            paddingY: "4%",
            paddingX: "5%",
            borderRadius: "20px",
            backgroundColor: "#f4ecf4",
            width: "45%",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ color: "#5781ED", fontWeight: "600" }}
            >
              Welcome back
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{ fontSize: "18px", fontWeight: "300", color: "#363636" }}
            >
              Login to continue your journey
            </Typography>
            <form style={{ marginTop: "20px" }}>
              <OutlinedInput
                fullWidth
                placeholder="Email*"
                margin="dense"
                size="medium"
                sx={{
                  fontSize: "16px",
                  borderRadius: "40px",
                  margin: "10px 0",
                  backgroundColor: "#fff",
                  padding: "0 20px",
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Image
                      src="/EmailIcon.svg"
                      alt="email"
                      width={25}
                      height={25}
                      priority
                      style={{ marginRight: "10px" }}
                    />
                  </InputAdornment>
                }
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  marginTop: "30px",
                  fontSize: "17px",
                  textTransform: "capitalize",
                  borderRadius: "40px",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                  backgroundColor: "#5781ED",
                }}
              >
                Proceed
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
export default LoginComponent;
