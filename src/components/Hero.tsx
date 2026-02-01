import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  alpha,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
export type SectionType =
  | "home"
  | "about"
  | "services"
  | "industries"
  | "network"
  | "faq"
  | "contact";

interface HeroProps {
  scrollToSection: (sectionId: SectionType) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const theme = useTheme();

  const stats = [
    { value: "5000+", label: "Successful Moves", icon: <LocalShippingIcon /> },
    {
      value: "50+",
      label: "Cities Covered",
      icon: <EmojiTransportationIcon />,
    },
    { value: "24/7", label: "Customer Support", icon: <AccessTimeIcon /> },
    { value: "98%", label: "Client Satisfaction", icon: <SecurityIcon /> },
  ];

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(
          theme.palette.secondary.main,
          0.05,
        )} 100%)`,
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
          animation: "float 8s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={9} sx={{ mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 5,
                  fontSize: {
                    xs: "2.2rem",
                    sm: "3rem",
                    md: "3.5rem",
                    lg: "5rem",
                  },
                  lineHeight: 1.2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                The Well Logistic & Movers
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3rem" },
                  lineHeight: 1.2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Professional Moving & Logistic Services
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Reliable, Efficient, and Stress-Free Moving Solutions Across
                India. Experience seamless relocation with our expert team.
              </Typography>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                  }}
                >
                  Get Free Quote
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  onClick={() => scrollToSection('services')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "nowrap", // 🔥 no wrapping on mobile
                  flexDirection: "row",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => scrollToSection("contact")}
                  sx={{
                    flex: { xs: 1, sm: "unset" }, // 📱 50% width
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: "0.95rem", sm: "1.1rem" },
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  Get Free Quote
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  onClick={() => scrollToSection("services")}
                  sx={{
                    flex: { xs: 1, sm: "unset" }, // 📱 50% width
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: "0.95rem", sm: "1.1rem" },
                    fontWeight: 700,
                    borderWidth: 2,
                    whiteSpace: "nowrap",
                    "&:hover": {
                      borderWidth: 2,
                    },
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Stats Section */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Grid container spacing={3} sx={{ mt: { xs: 6, md: 10 } }}>
            {stats.map((stat, index) => (
              <Grid
                item
                xs={12} // 📱 Mobile → vertical (1 card per row)
                sm={3} // 💻 Desktop → same as before
                key={index}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 1,
                    background: `linear-gradient(135deg,
              ${alpha(theme.palette.background.paper, 0.8)} 0%,
              ${alpha(theme.palette.background.paper, 0.6)} 100%)`,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        color: "primary.main",
                        mb: 2,
                        "& svg": { fontSize: 40 },
                      }}
                    >
                      {stat.icon}
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        mb: 1,
                        background: `linear-gradient(135deg,
                  ${theme.palette.primary.main} 0%,
                  ${theme.palette.secondary.main} 100%)`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {stat.value}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", fontWeight: 500 }}
                    >
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </Box>
  );
};

export default Hero;
