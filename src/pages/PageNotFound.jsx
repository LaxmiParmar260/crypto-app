import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const customStyle = {
    padding: "80px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <Container sx={customStyle}>
      <img
        src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"
        alt=""
        style={{ height: "250px" }}
      />
      <Typography variant="h5" color="error" sx={{ margin: "20px 0" }}>
        404 Page Not Found
      </Typography>
      <Link to={"/"}>
        <Button variant="outlined" color="error">
          Go Back
        </Button>
      </Link>
    </Container>
  );
};

export default PageNotFound;
