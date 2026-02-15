import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  alpha,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import PinDropIcon from "@mui/icons-material/PinDrop";

const Network: React.FC = () => {
  const theme = useTheme();

  const networkData = {
    coverage: "Pan-India",
    tier1: "8+ Cities",
    tier2Tier3: "70+ Cities",
    states: "28 States",
  };

  const majorCities = [
    { name: "Mumbai", state: "Maharashtra", type: "Metro" },
    { name: "Delhi", state: "Delhi", type: "Metro" },
    { name: "Bangalore", state: "Karnataka", type: "Metro" },
    { name: "Chennai", state: "Tamil Nadu", type: "Metro" },
    { name: "Kolkata", state: "West Bengal", type: "Metro" },
    { name: "Hyderabad", state: "Telangana", type: "Metro" },
    { name: "Pune", state: "Maharashtra", type: "Tier 1" },
    { name: "Ahmedabad", state: "Gujarat", type: "Tier 1" },
    { name: "Jaipur", state: "Rajasthan", type: "Tier 2" },
    { name: "Lucknow", state: "Uttar Pradesh", type: "Tier 2" },
    { name: "Chandigarh", state: "Punjab", type: "Tier 2" },
    { name: "Bhopal", state: "Madhya Pradesh", type: "Tier 2" },
  ];

  return (
    <Box
      id="network"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(
          theme.palette.background.default,
          1,
        )} 100%)`,
      }}
    >
      <Container maxWidth="xl">
        <Box textAlign="center" mb={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Our Network
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                fontWeight: 400,
              }}
            >
              Serving all over India with extensive coverage in 2nd & 3rd tier
              cities
            </Typography>
          </motion.div>
        </Box>

        {/* Network Stats */}
        {/* <Grid container spacing={2} sx={{ mb: 8 }}>
          {Object.entries(networkData).map(([key, value], index) => (
            <Grid item xs={6} sm={3} key={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    textAlign: 'center',
                    background: alpha(theme.palette.background.paper, 0.6),
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(
                          theme.palette.secondary.main,
                          0.1
                        )} 100%)`,
                        margin: '0 auto 15px',
                        '& svg': {
                          fontSize: 28,
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {index === 0 ? <PublicIcon /> : <LocationOnIcon />}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        mb: 1,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      {value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      }}
                    >
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid> */}
        <Grid container spacing={2} sx={{ mb: 8 }}>
          {Object.entries(networkData).map(([key, value], index) => (
            <Grid
              item
              xs={12} // 📱 Mobile → full width (vertical)
              sm={3} // 💻 Desktop → same layout as before
              key={key}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
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
                        background: `linear-gradient(135deg,
                  ${alpha(theme.palette.primary.main, 0.1)} 0%,
                  ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                        margin: "0 auto 15px",
                        "& svg": {
                          fontSize: 28,
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {index === 0 ? <PublicIcon /> : <LocationOnIcon />}
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
                      {value}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Cities Coverage */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
              color: "text.primary",
            }}
          >
            Major Cities We Serve
          </Typography>
          <Grid container spacing={2} sx={{ mb: 6 }} alignItems="stretch">
            {majorCities.map((city, index) => (
              <Grid
                item
                xs={6} // 📱 2 per row
                sm={4}
                md={3}
                key={index}
                sx={{ display: "flex" }}
              >
                <motion.div
                  style={{ width: "100%", display: "flex" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      p: 2,
                      height:"100px",
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.1,
                      )}`,
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
                        p: 0,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      {/* Top Row */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <PinDropIcon
                            sx={{
                              fontSize: 18,
                              color:
                                city.type === "Metro"
                                  ? theme.palette.primary.main
                                  : city.type === "Tier 1"
                                    ? theme.palette.secondary.main
                                    : theme.palette.success.main,
                            }}
                          />
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 600,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: 90,
                            }}
                          >
                            {city.name}
                          </Typography>
                        </Box>

                        <Chip
                          label={city.type}
                          size="small"
                          sx={{
                            height: 20,
                            fontSize: "0.65rem",
                            backgroundColor:
                              city.type === "Metro"
                                ? alpha(theme.palette.primary.main, 0.1)
                                : city.type === "Tier 1"
                                  ? alpha(theme.palette.secondary.main, 0.1)
                                  : alpha(theme.palette.success.main, 0.1),
                            color:
                              city.type === "Metro"
                                ? theme.palette.primary.main
                                : city.type === "Tier 1"
                                  ? theme.palette.secondary.main
                                  : theme.palette.success.main,
                          }}
                        />
                      </Box>

                      {/* State */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          minHeight: 32, // equal height
                        }}
                      >
                        {city.state}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Additional Info */}
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(
                theme.palette.secondary.main,
                0.05,
              )} 100%)`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Extensive 2nd & 3rd Tier City Coverage
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  We pride ourselves on serving not just metro cities but also
                  extensive coverage in 2nd and 3rd tier cities across India.
                  Our network includes:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {[
                    "Nagpur",
                    "Indore",
                    "Vadodara",
                    "Coimbatore",
                    "Visakhapatnam",
                    "Kochi",
                    "Guwahati",
                    "Bhubaneswar",
                    "Dehradun",
                    "Surat",
                  ].map((city, index) => (
                    <Chip
                      key={index}
                      label={city}
                      size="small"
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(
                        theme.palette.secondary.main,
                        0.1,
                      )} 100%)`,
                      border: `2px dashed ${alpha(theme.palette.primary.main, 0.3)}`,
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      70+
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Network;
