"use client";

import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  // Grid,
  // TextField
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const Verified = () => {
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
            paddingX: "10%",
            borderRadius: "20px",
            backgroundColor: "#f4ecf4",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ color: "#5781ED", fontWeight: "600" }}
            >
              Verified
            </Typography>
            <Image
              src="/Verified.svg"
              alt="email"
              width={180}
              height={180}
              priority
              style={{ margin: "20px auto 0" }}
            />{" "}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
export default Verified;
