import { AppBar, Box, Typography, Toolbar, Container, Link, Menu, MenuItem } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function NavBar() {
  const pages = [
    { id: "1", name: "About", link: "/about" },
    { id: "2", name: "Login", link: "/login" },
    { id: "3", name: "Register", link: "/register" }
  ];

  return (
    <>
      <Box>
        <AppBar position="static" sx={{ bgcolor: "#77098E" }}>
          <Container>
            <Toolbar disableGutters>
              <Link href="/" sx={{ textDecoration: "none", display: "flex", flexDirection: { sm: "row", xs: "column" } }}>
                <AccountBalanceIcon sx={{ color: "#fff", mt: { md: 3, xs: 1 }, fontSize: "3rem" }} />
                <Typography
                  component="div"
                  sx={{
                    color: "#fff",
                    pt: { lg: 2, sm: 3, xs: 0 },
                    pl: { md: 2 },
                    fontSize: { lg: "3rem", md: "2rem", sm: "1.5rem" }
                  }}
                >
                  Leap Bank
                </Typography>
              </Link>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "auto",
                  gap: 5,
                  color: "#eee"
                }}
              >
                {pages.map(page => (
                  <Typography key={page.id}>
                    <Link
                      sx={{
                        textDecoration: "none",
                        fontWeight: "bolder",
                        fontSize: { sm: "2rem", xs: "1rem" },
                        color: "#eee"
                      }}
                      href={page.link}
                    >
                      {page.name}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
