import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";

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
    heading: "Deposit Money",
    desc:
      "Rather than driving to a bank branch and waiting in line, you may be able to deposit cheques online in minutes with a few clicks you are good to go",
    link: "/onlinepayment.jpg"
  }
];

export default function ServicesSection() {
  const styles = {
    servicesContainer: {
      width: { lg: "80%", md: "100%", sm: "100%", xs: "100%" },
      height: { lg: "200px", md: "300px", xs: "400px" },
      m: { lg: 0, md: 3 },

      bgcolor: "#800080",
      borderRadius: 2
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
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row", lg: "row" }, bgcolor: "#eee" }}
            key={section.id}
          >
            <Box sx={{ width: { lg: "100%", md: "30%", sm: "100%" }, p: { lg: 3, xs: 1 } }}>
              <CardMedia component="img" sx={styles.servicesContainer} src={section.link} alt="services image" />
            </Box>
            <Box
              sx={{
                width: { lg: "100%", md: "70%", xs: "100%" },
                p: { lg: 1, xs: 1 },
                m: { lg: 1, xs: 1 },
                bgcolor: "#eee"
              }}
            >
              <Typography
                sx={{
                  color: "#9932CC",
                  fontSize: "3rem",
                  fontFamily: "Brush Script MT",
                  textAlign: "center"
                }}
              >
                {section.heading}
              </Typography>
              <Typography sx={{ color: "#4169E1", fontSize: "1.5rem", textAlign: "left", fontFamily: "Verdana" }}>
                {section.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
}
