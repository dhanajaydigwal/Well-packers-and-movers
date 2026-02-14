// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   alpha,
//   useTheme,
// } from "@mui/material";
// import Grid from "@mui/material/GridLegacy";
// import { motion } from "framer-motion";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import SecurityIcon from "@mui/icons-material/Security";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
// export type SectionType =
//   | "home"
//   | "about"
//   | "services"
//   | "industries"
//   | "network"
//   | "faq"
//   | "contact";

// interface HeroProps {
//   scrollToSection: (sectionId: SectionType) => void;
// }

// const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
//   const theme = useTheme();

//   const stats = [
//     { value: "5000+", label: "Successful Moves", icon: <LocalShippingIcon /> },
//     {
//       value: "50+",
//       label: "Cities Covered",
//       icon: <EmojiTransportationIcon />,
//     },
//     { value: "24/7", label: "Customer Support", icon: <AccessTimeIcon /> },
//     { value: "98%", label: "Client Satisfaction", icon: <SecurityIcon /> },
//   ];

//   return (
//     <Box
//       id="home"
//       sx={{
//         position: "relative",
//         background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(
//           theme.palette.secondary.main,
//           0.05,
//         )} 100%)`,
//         pt: { xs: 12, md: 16 },
//         pb: { xs: 8, md: 12 },
//         overflow: "hidden",
//       }}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: -100,
//           right: -100,
//           width: 300,
//           height: 300,
//           borderRadius: "50%",
//           background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
//           animation: "float 6s ease-in-out infinite",
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: -100,
//           left: -100,
//           width: 400,
//           height: 400,
//           borderRadius: "50%",
//           background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
//           animation: "float 8s ease-in-out infinite",
//           animationDelay: "1s",
//         }}
//       />

//       <Container maxWidth="xl">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} lg={9} sx={{ mb: 6 }}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h1"
//                 component="h1"
//                 sx={{
//                   fontWeight: 800,
//                   mb: 5,
//                   fontSize: {
//                     xs: "2.2rem",
//                     sm: "3rem",
//                     md: "3.5rem",
//                     lg: "5rem",
//                   },
//                   lineHeight: 1.2,
//                   background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//                   backgroundClip: "text",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                   textShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                 }}
//               >
//                 The Well Logistic & Movers
//               </Typography>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Typography
//                 variant="h1"
//                 component="h1"
//                 sx={{
//                   fontWeight: 600,
//                   mb: 3,
//                   fontSize: { xs: "2.5rem", sm: "3.5rem", lg: "3rem" },
//                   lineHeight: 1.2,
//                   background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//                   backgroundClip: "text",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 Professional Moving & Logistic Services
//               </Typography>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <Typography
//                 variant="h5"
//                 sx={{
//                   mb: 4,
//                   color: "text.secondary",
//                   fontWeight: 400,
//                   lineHeight: 1.6,
//                 }}
//               >
//                 Reliable, Efficient, and Stress-Free Moving Solutions Across
//                 India. Experience seamless relocation with our expert team.
//               </Typography>
//             </motion.div>

//             {/* <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   onClick={() => scrollToSection('contact')}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     fontWeight: 700,
//                   }}
//                 >
//                   Get Free Quote
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   size="large"
//                   onClick={() => scrollToSection('services')}
//                   sx={{
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1.1rem',
//                     fontWeight: 700,
//                     borderWidth: 2,
//                     '&:hover': {
//                       borderWidth: 2,
//                     },
//                   }}
//                 >
//                   Our Services
//                 </Button>
//               </Box>
//             </motion.div> */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   gap: 2,
//                   flexWrap: "nowrap", // 🔥 no wrapping on mobile
//                   flexDirection: "row",
//                 }}
//               >
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   onClick={() => scrollToSection("contact")}
//                   sx={{
//                     flex: { xs: 1, sm: "unset" }, // 📱 50% width
//                     px: 4,
//                     py: 1.5,
//                     fontSize: { xs: "0.95rem", sm: "1.1rem" },
//                     fontWeight: 700,
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   Get Free Quote
//                 </Button>

//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   size="large"
//                   onClick={() => scrollToSection("services")}
//                   sx={{
//                     flex: { xs: 1, sm: "unset" }, // 📱 50% width
//                     px: 4,
//                     py: 1.5,
//                     fontSize: { xs: "0.95rem", sm: "1.1rem" },
//                     fontWeight: 700,
//                     borderWidth: 2,
//                     whiteSpace: "nowrap",
//                     "&:hover": {
//                       borderWidth: 2,
//                     },
//                   }}
//                 >
//                   Our Services
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//         </Grid>

//         {/* Stats Section */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <Grid container spacing={3} sx={{ mt: { xs: 6, md: 10 } }}>
//             {stats.map((stat, index) => (
//               <Grid
//                 item
//                 xs={12} // 📱 Mobile → vertical (1 card per row)
//                 sm={3} // 💻 Desktop → same as before
//                 key={index}
//               >
//                 <Card
//                   sx={{
//                     height: "100%",
//                     textAlign: "center",
//                     p: 1,
//                     background: `linear-gradient(135deg,
//               ${alpha(theme.palette.background.paper, 0.8)} 0%,
//               ${alpha(theme.palette.background.paper, 0.6)} 100%)`,
//                     backdropFilter: "blur(10px)",
//                     border: "1px solid rgba(255,255,255,0.2)",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       transform: "translateY(-8px)",
//                       boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//                     },
//                   }}
//                 >
//                   <CardContent>
//                     <Box
//                       sx={{
//                         color: "primary.main",
//                         mb: 2,
//                         "& svg": { fontSize: 40 },
//                       }}
//                     >
//                       {stat.icon}
//                     </Box>

//                     <Typography
//                       variant="h3"
//                       sx={{
//                         fontWeight: 800,
//                         mb: 1,
//                         background: `linear-gradient(135deg,
//                   ${theme.palette.primary.main} 0%,
//                   ${theme.palette.secondary.main} 100%)`,
//                         backgroundClip: "text",
//                         WebkitBackgroundClip: "text",
//                         color: "transparent",
//                       }}
//                     >
//                       {stat.value}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{ color: "text.secondary", fontWeight: 500 }}
//                     >
//                       {stat.label}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>
//       </Container>

//       {/* CSS Animation */}
//       <style>
//         {`
//           @keyframes float {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-20px); }
//           }
//         `}
//       </style>
//     </Box>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from "react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Floating truck data


  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        background: `linear-gradient(135deg, ${alpha(
          theme.palette.primary.main,
          0.05
        )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(
            theme.palette.primary.main,
            0.1
          )} 0%, transparent 70%)`,
          animation: "float 6s ease-in-out infinite",
          transform: `translate(${mousePosition.x * 0.3}px, ${
            mousePosition.y * 0.3
          }px)`,
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
          background: `radial-gradient(circle, ${alpha(
            theme.palette.secondary.main,
            0.1
          )} 0%, transparent 70%)`,
          animation: "float 8s ease-in-out infinite",
          animationDelay: "1s",
          transform: `translate(${mousePosition.x * 0.2}px, ${
            mousePosition.y * 0.2
          }px)`,
        }}
      />


      {/* Pulsating Dots (Moving items representation) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          style={{
            position: "absolute",
            width: 10 + Math.random() * 20,
            height: 10 + Math.random() * 20,
            borderRadius: "50%",
            background: alpha(theme.palette.secondary.main, 0.1),
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={9} sx={{ mb: 6, position: "relative", zIndex: 1 }}>
            {/* Animated Title with Bounce Effect */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
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
                  position: "relative",
                  display: "inline-block",
                }}
              >
                CarryPack Logistics
              </Typography>
            </motion.div>

            {/* Subtitles with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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

            {/* Description with Typing Effect Simulation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  position: "relative",
                  paddingLeft: 2,
                  borderLeft: `3px solid ${theme.palette.primary.main}`,
                }}
              >
                Reliable, Efficient, and Stress-Free Moving Solutions Across
                India. Experience seamless relocation with our expert team.
              </Typography>
            </motion.div>

            {/* Buttons with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "nowrap",
                  flexDirection: "row",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => scrollToSection("contact")}
                    sx={{
                      flex: { xs: 1, sm: "unset" },
                      px: 4,
                      py: 1.5,
                      fontSize: { xs: "0.95rem", sm: "1.1rem" },
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      position: "relative",
                      overflow: "hidden",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(90deg, transparent, ${alpha(
                          "#fff",
                          0.3
                        )}, transparent)`,
                        transition: "left 0.7s",
                      },
                      "&:hover::after": {
                        left: "100%",
                      },
                    }}
                  >
                    Get Free Quote
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={() => scrollToSection("services")}
                    sx={{
                      flex: { xs: 1, sm: "unset" },
                      px: 4,
                      py: 1.5,
                      fontSize: { xs: "0.95rem", sm: "1.1rem" },
                      fontWeight: 700,
                      borderWidth: 2,
                      whiteSpace: "nowrap",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: 0,
                        height: 0,
                        borderRadius: "50%",
                        background: alpha(theme.palette.secondary.main, 0.2),
                        transform: "translate(-50%, -50%)",
                        transition: "width 0.6s, height 0.6s",
                      },
                      "&:hover::before": {
                        width: "300%",
                        height: "300%",
                      },
                    }}
                  >
                    Our Services
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Stats Cards with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Grid container spacing={3} sx={{ mt: { xs: 6, md: 10 } }}>
            {stats.map((stat, index) => (
              <Grid
                item
                xs={12}
                sm={3}
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  whileHover={{ y: -10 }}
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
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.3s ease",
                      },
                      "&:hover::before": {
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    <CardContent>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <Box
                          sx={{
                            color: "primary.main",
                            mb: 2,
                            "& svg": { fontSize: 40 },
                          }}
                        >
                          {stat.icon}
                        </Box>
                      </motion.div>

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
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Animated Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          cursor: "pointer",
        }}
        onClick={() => scrollToSection("services")}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "primary.main",
          }}
        >
          <Typography variant="caption" sx={{ mb: 1 }}>
            Scroll to explore
          </Typography>
          <Box
            sx={{
              width: 30,
              height: 50,
              border: `2px solid ${theme.palette.primary.main}`,
              borderRadius: 15,
              display: "flex",
              justifyContent: "center",
              paddingTop: 1,
            }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: 4,
                height: 10,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </motion.div>

      {/* CSS Animation */}
      <style>
        {`
          // @keyframes float {
          //   0%, 100% { transform: translateY(0px) translateX(0px); }
          //   33% { transform: translateY(-20px) translateX(10px); }
          //   66% { transform: translateY(10px) translateX(-10px); }
          // }
          
          // @keyframes pulse {
          //   0%, 100% { opacity: 0.3; transform: scale(1); }
          //   50% { opacity: 0.8; transform: scale(1.1); }
          // }
          
          .glow-text {
            text-shadow: 0 0 10px rgba(25, 118, 210, 0.5),
                         0 0 20px rgba(25, 118, 210, 0.3),
                         0 0 30px rgba(25, 118, 210, 0.2);
          }
        `}
      </style>
    </Box>
  );
};

export default Hero;