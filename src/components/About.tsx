import React from "react";
import {
  Box,
  Container,
  Typography,
  // Grid,
  Card,
  CardContent,
  alpha,
  useTheme,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const About: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <LocalShippingIcon />,
      title: "Professional Team",
      description: "Trained professionals with years of moving experience",
      color: theme.palette.primary.main,
    },
    {
      icon: <SecurityIcon />,
      title: "Safe & Secure",
      description: "Fully insured services with damage protection",
      color: theme.palette.success.main,
    },
    {
      icon: <GroupsIcon />,
      title: "24/7 Support",
      description: "Round-the-clock customer service assistance",
      color: theme.palette.secondary.main,
    },
    {
      icon: <EmojiEventsIcon />,
      title: "Award Winning",
      description: "Recognized as best moving service provider",
      color: theme.palette.warning.main,
    },
  ];

  const stats = [
    { value: "12+", label: "Years Experience", icon: "🏆" },
    { value: "50K+", label: "Happy Customers", icon: "😊" },
    { value: "100+", label: "Cities Covered", icon: "📍" },
    { value: "500+", label: "Expert Staff", icon: "👨‍🔧" },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 1)} 0%, ${alpha(
          theme.palette.primary.light,
          0.03,
        )} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
          opacity: 0.5,
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Chip
                label="About Us"
                color="primary"
                sx={{
                  mb: 3,
                  px: 2,
                  py: 1,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                India's Most Trusted Moving & Logistics Partner
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}
              >
                At <strong>Well Logistic & Movers</strong>, we transform the
                stressful experience of moving into a seamless journey. With
                over 12 years of expertise, we've perfected the art of
                relocation across India.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 5,
                  lineHeight: 1.8,
                }}
              >
                From packing your first box to unloading at your new
                destination, our professional team ensures every item is handled
                with care. We serve individuals, families, and businesses with
                customized moving solutions that prioritize safety, efficiency,
                and affordability.
              </Typography>

              {/* Stats */}
              <Grid container spacing={3} sx={{ mb: 5 }} alignItems="stretch">
                {stats.map((stat, index) => (
                  <Grid
                    item
                    xs={6} // 📱 mobile → 2 cards per row
                    sm={3} // 💻 desktop → 4 cards per row
                    key={index}
                    sx={{ display: "flex" }}
                  >
                    <motion.div
                      style={{ width: "100%", display: "flex" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "center",
                          p: 2,
                          background: alpha(
                            theme.palette.background.paper,
                            0.6,
                          ),
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: `0 10px 20px ${alpha(
                              theme.palette.primary.main,
                              0.1,
                            )}`,
                          },
                        }}
                      >
                        <CardContent
                          sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                          }}
                        >
                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 800,
                              fontSize: "2rem",
                              lineHeight: 1.2,
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
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              fontWeight: 500,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 1,
                              minHeight: 40, // 🔥 keeps all cards equal
                              textAlign: "center",
                            }}
                          >
                            <span style={{ fontSize: "1.2rem" }}>
                              {stat.icon}
                            </span>
                            {stat.label}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Features */}
        {/* <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Grid
            container
            spacing={4}
            wrap="nowrap"
            sx={{
              overflowX: "auto",
            }}
          >
            {features.map((feature, index) => (
              <Grid
                item
                key={index}
                sx={{
                  minWidth: 280,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      p: 3,
                      textAlign: "center",
                      background: alpha(theme.palette.background.paper, 0.6),
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 20px 40px ${alpha(feature.color, 0.15)}`,
                        borderColor: alpha(feature.color, 0.3),
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `linear-gradient(135deg, ${alpha(
                            feature.color,
                            0.1,
                          )} 0%, ${alpha(feature.color, 0.2)} 100%)`,
                          margin: "0 auto 20px",
                          "& svg": {
                            fontSize: 32,
                            color: feature.color,
                          },
                        }}
                      >
                        {feature.icon}
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: "text.primary",
                        }}
                      >
                        {feature.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box> */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Grid
            container
            spacing={4}
            sx={{
              overflowX: "hidden", // ❌ No horizontal scrollbar anywhere
            }}
          >
            {features.map((feature: any, index: number) => (
              <Grid
                item
                key={index}
                xs={12} // 📱 Mobile → vertical
                sm={6} // 📱 Tablet → 2 cards
                md={3} // 💻 Desktop → 4 cards
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      p: 3,
                      textAlign: "center",
                      background: alpha(theme.palette.background.paper, 0.6),
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 20px 40px ${alpha(feature.color, 0.15)}`,
                        borderColor: alpha(feature.color, 0.3),
                      },
                    }}
                  >
                    <CardContent>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: `linear-gradient(135deg, ${alpha(
                            feature.color,
                            0.1,
                          )} 0%, ${alpha(feature.color, 0.2)} 100%)`,
                          margin: "0 auto 20px",
                          "& svg": {
                            fontSize: 32,
                            color: feature.color,
                          },
                        }}
                      >
                        {feature.icon}
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: "text.primary",
                        }}
                      >
                        {feature.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mission & Vision */}
        <Grid container spacing={6} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: alpha(theme.palette.primary.main, 0.1),
                      mb: 3,
                      "& svg": {
                        fontSize: 28,
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <span style={{ fontSize: "1.8rem" }}>🎯</span>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8 }}
                  >
                    To provide exceptional moving services that exceed customer
                    expectations through professionalism, reliability, and
                    innovative solutions. We aim to make every move stress-free
                    and efficient.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 100%)`,
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: alpha(theme.palette.secondary.main, 0.1),
                      mb: 3,
                      "& svg": {
                        fontSize: 28,
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    <span style={{ fontSize: "1.8rem" }}>👁️</span>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.8 }}
                  >
                    To become India's most trusted and preferred moving partner,
                    setting new standards in the logistics industry through
                    technology, customer-centric approach, and sustainable
                    practices.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
