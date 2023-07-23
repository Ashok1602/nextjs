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
  // Grid,
  // TextField
} from "@mui/material";
import { Box } from "@mui/system";
import OtpInput from "react-otp-input";
import Link from "next/link";

const VerifyOTP = () => {
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
            paddingY: "3%",
            paddingX: "5%",
            borderRadius: "20px",
            backgroundColor: "#f4ecf4",
            width: "48%",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ color: "#5781ED", fontWeight: "600" }}
            >
              Verification
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{ fontSize: "16px", fontWeight: "300", color: "#363636" }}
            >
              Enter 4 digit OTP that has been sent to your email address
            </Typography>
            <form style={{ marginTop: "20px" }}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                containerStyle={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
                inputStyle={{
                  backgroundColor: "#fff",
                  width: "60px",
                  margin: "10px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
                renderInput={(props) => <OutlinedInput {...props} />}
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
                Verify
              </Button>
              <Link
                href={"/login"}
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "13px",
                  textDecoration: "underline",
                  color: "#363636",
                }}
              >
                Resend code
              </Link>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
export default VerifyOTP;
