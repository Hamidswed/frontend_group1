import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const matches = useMediaQuery("(min-width:640px)");

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        width: "100%",
        left: 0,
        bottom: 0,
        right: 0,
        textAlign: "center",
        zIndex: 50,
      }}
    >
      <AppBar position="static" sx={{ height: { xs: "70px", md: "120px" } }}>
        <Toolbar sx={{display:{xs:"flex"}, justifyContent:{xs:"center"}}}>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ display: matches ? "block" : "none", margin: "0 20px" }}
          >
            Copyright <CopyrightIcon fontSize="small" /> ProductApp
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
            }}
          />
          <Box sx={{ margin: "0 20px" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
