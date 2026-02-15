import React from 'react'
import {
  Box,
  Container,
  // Grid,
  Typography,
  Link,
  IconButton,
  alpha,
  useTheme,
  Stack,
  Chip,
} from '@mui/material'
import Grid from "@mui/material/GridLegacy";
import { motion } from 'framer-motion'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
// import LocationOnIcon from '@mui/icons-material/LocationOn'
// import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import VerifiedIcon from '@mui/icons-material/Verified'
import ShieldIcon from '@mui/icons-material/Shield'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import {Divider} from '@mui/material'

const Footer: React.FC = () => {
  const theme = useTheme()

  const services = [
    'Packing & Moving',
    'Loading & Unloading',
    'Car & Bike Transport',
    'Storage & Warehouse',
    'Office Relocation',
    'Separate & Sharing',
  ]

  const features = [
    { icon: <VerifiedIcon />, text: 'Verified Partners' },
    { icon: <ShieldIcon />, text: 'Insurance Covered' },
    { icon: <SupportAgentIcon />, text: '24/7 Support' },
  ]

  const socialLinks = [
    { icon: <FacebookIcon />, label: 'Facebook', color: '#1877F2' },
    { icon: <TwitterIcon />, label: 'Twitter', color: '#1DA1F2' },
    { icon: <InstagramIcon />, label: 'Instagram', color: '#E4405F' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', color: '#0A66C2' },
    { icon: <YouTubeIcon />, label: 'YouTube', color: '#FF0000' },
  ]

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%)`,
        color: '#2d3748',
        pt: 6,
        pb: 3,
        position: 'relative',
        borderTop: `2px solid ${theme.palette.primary.main}`,
        boxShadow: '0 -4px 30px rgba(0,0,0,0.05)',
      }}
    >
      {/* Top Bar with Features */}
      <Box
  sx={{
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    py: 2.5,
    borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  }}
>
  <Container maxWidth="xl">
    <Grid container spacing={1} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",   // 🔥 icon top, text below
                alignItems: "center",
                textAlign: "center",
                gap: 0.8,
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& svg": {
                    fontSize: 18,
                  },
                }}
              >
                {feature.icon}
              </Box>

              <Typography
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.dark,
                  fontSize: "0.7rem",
                  lineHeight: 1.2,
                }}
              >
                {feature.text}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


      <Container maxWidth="xl" sx={{ mt: 4 }}>
        {/* Main Footer Content - New Structure */}
        <Grid container spacing={4}>
          {/* Left Column: Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ pr: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocalShippingIcon 
                  sx={{ 
                    fontSize: 48, 
                    color: theme.palette.primary.main,
                    mr: 2 
                  }} 
                />
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      mb: 0.5,
                    }}
                  >
                    CarryPack
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontWeight: 600,
                    }}
                  >
                    Logistics
                  </Typography>
                </Box>
              </Box>
              
              <Typography
                variant="body2"
                sx={{
                  mb: 3,
                  lineHeight: 1.7,
                  color: '#4a5568',
                  fontSize: '0.95rem',
                }}
              >
                Professional moving and logistics services across India. 
                We make your relocation seamless, safe, and stress-free.
              </Typography>
            </Box>
          </Grid>

          {/* Middle Column: Two Sections Stacked */}
          <Grid item xs={12} md={4}>
            <Stack spacing={4}>

              {/* Services */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2.5,
                    color: theme.palette.primary.dark,
                    fontSize: '1.1rem',
                    position: 'relative',
                    pb: 1,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      width: 40,
                      height: 3,
                      backgroundColor: theme.palette.secondary.main,
                      borderRadius: 2,
                    },
                  }}
                >
                  Our Services
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {services.map((service, index) => (
                    <Chip
                      key={index}
                      label={service}
                      size="small"
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        color: theme.palette.primary.dark,
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.15),
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: alpha('#000', 0.1) }} />

        {/* Bottom Section - Contact Details & Copyright */}
        <Grid container spacing={3} alignItems="center">
          {/* Contact Details */}
          {/* <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ 
                  fontSize: 18, 
                  color: theme.palette.primary.main 
                }} />
                <Typography variant="body2" sx={{ color: '#4a5568' }}>
                  123 Business Street, Jaipur
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon sx={{ 
                  fontSize: 18, 
                  color: theme.palette.primary.main 
                }} />
                <Typography variant="body2" sx={{ color: '#4a5568' }}>
                  Mon-Sat: 8AM-10PM
                </Typography>
              </Box>
            </Box>
          </Grid> */}

          {/* Copyright & Links */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 2
            }}>
              <Typography variant="body2" sx={{ color: '#718096', fontWeight: 500 }}>
                © {new Date().getFullYear()} CarryPack Logistics
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link
                  href="#"
                  sx={{
                    color: '#718096',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: '#718096',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: '#718096',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Contact
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

    <Box sx={{ 
  mt: 3, 
  pt: 3, 
  borderTop: `1px dashed ${alpha('#000', 0.1)}`,
}}>
  <Box sx={{ 
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3
  }}>
    {/* Copyright Text */}
    <Typography 
      variant="body2" 
      sx={{ 
        color: '#718096', 
        fontWeight: 500,
        fontSize: '0.9rem',
        order: { xs: 2, sm: 1 }
      }}
    >
      All Rights Reserved with @ CarryPack Logistics
    </Typography>
    
    {/* Vertical Divider - Hidden on mobile */}
    <Divider
      orientation="vertical" 
      flexItem 
      sx={{ 
        display: { xs: 'none', sm: 'block' },
        borderColor: alpha('#000', 0.1),
        height: 24,
        order: { xs: 1, sm: 2 }
      }} 
    />
    
    {/* Social Icons */}
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: 0.5,
      order: { xs: 1, sm: 3 }
    }}>
      {socialLinks.map((social, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            size="small"
            sx={{
              backgroundColor: alpha(theme.palette.primary.main, 0.05),
              color: alpha('#000', 0.7),
              width: 36,
              height: 36,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: social.color,
                color: 'white',
                transform: 'translateY(-2px)',
              },
            }}
            aria-label={social.label}
          >
            {social.icon}
          </IconButton>
        </motion.div>
      ))}
    </Box>
  </Box>
</Box>
      </Container>
    </Box>
  )
}

export default Footer