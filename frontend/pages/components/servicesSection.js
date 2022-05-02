import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

const sections = [
  {
    id: "1",
    heading: "Pay Bills Online",
    desc:
      " Simply log into your account and pay your bill online right away. For increased efficiency, you may also set up automated bill payments, which helps you manage your cash flow when you have monthly payments to and from vendors.",
    link: "/onlinepayment.jpg"
  },

  {
    id: "2",
    heading: "Transfer money",
    desc:
      "Make  a rapid money transfer to a client or vendor, and transfer money from one account to another without delay. Instead of sending a registered cheque and waiting for it to clear, you may securely transfer the money online",
    link: "/transfermoney.jpg"
  },

  {
    id: "3",
    heading: "Deposit money",
    desc: "Rather than driving to a bank branch and waiting in line, you may be able to deposit cheques online in minutes",
    link: "/depositmoney.jpg"
  }
];

export default function ServicesSection() {
  const styles = {
    servicesContainer: {
      width: { md: "50%", sm: "100%", xs: "100%" },
      height: { md: "300px", xs: "500px" },
      m: { md: 3 },
      bgcolor: "#800080"
    }
  };
  return (
    <React.Fragment>
      <Typography
        sx={{
          boxSizing: "border-box",
          boxShadow: 1,
          bgcolor: "#F0E68C",
          color: "#800000",
          textAlign: "center",
          fontSize: "4rem"
        }}
      >
        Our Services
      </Typography>
      <Box>
        {sections.map(section => (
          <Box sx={{ display: "flex", bgcolor: "#eee" }} key={section.id}>
            <Box>
              <CardMedia component="img" sx={styles.servicesContainer} src={section.link} alt="services" />
            </Box>
            <Box sx={{ width: { md: "55%" }, p: 2, m: 2, bgcolor: "#eee" }}>
              <Typography sx={{ color: "#9932CC", fontSize: "5rem", fontFamily: "Brush Script MT", textAlign: "center" }}>
                {section.heading}
              </Typography>
              <Typography sx={{ color: "#4169E1", fontSize: "1.5rem", textAlign: "center", fontFamily: "Verdana" }}>
                {section.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
}
