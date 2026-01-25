import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  alpha,
  useTheme,
  Fade,
} from '@mui/material'
import { motion } from 'framer-motion'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import BusinessIcon from '@mui/icons-material/Business'
import PublicIcon from '@mui/icons-material/Public'
import HelpIcon from '@mui/icons-material/Help'
import ContactMailIcon from '@mui/icons-material/ContactMail'

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
  activeSection: string
}

const Header: React.FC<NavigationProps> = ({ scrollToSection, activeSection }) => {
  const theme = useTheme()
  const [scrolled, setScrolled] = useState(false)

  const sections = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <InfoIcon /> },
    { id: 'services', label: 'Services', icon: <DesignServicesIcon /> },
    { id: 'industries', label: 'Industries', icon: <BusinessIcon /> },
    { id: 'network', label: 'Network', icon: <PublicIcon /> },
    { id: 'faq', label: 'FAQ', icon: <HelpIcon /> },
    { id: 'contact', label: 'Contact', icon: <ContactMailIcon /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Logo - Fixed Top Left */}
      <Fade in={scrolled}>
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            p: 2,
            borderRadius: 3,
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
            backdropFilter: 'blur(10px)',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            },
          }}
          onClick={() => scrollToSection('home')}
        >
          <LocalShippingIcon sx={{ color: theme.palette.primary.main }} />
        </Box>
      </Fade>

      {/* Progress Navigation - Left Side */}
      <Box
        sx={{
          position: 'fixed',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Box
              onClick={() => scrollToSection(section.id)}
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease',
                backgroundColor: activeSection === section.id
                  ? theme.palette.primary.main
                  : alpha(theme.palette.primary.main, 0.1),
                color: activeSection === section.id
                  ? 'white'
                  : theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  '& .section-label': {
                    opacity: 1,
                    transform: 'translateX(0)',
                  },
                },
              }}
            >
              {section.icon}
              
              {/* Label Tooltip */}
              <Typography
                className="section-label"
                variant="caption"
                sx={{
                  position: 'absolute',
                  right: '100%',
                  ml: 1,
                  whiteSpace: 'nowrap',
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  opacity: 0,
                  transform: 'translateX(-10px)',
                  transition: 'all 0.3s ease',
                  pointerEvents: 'none',
                  fontWeight: 600,
                }}
              >
                {section.label}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Current Section Indicator */}
      <Fade in={scrolled}>
        <Box
          sx={{
            position: 'fixed',
            top: 90,
            right: 20,
            zIndex: 1000,
            p: 1.5,
            borderRadius: 3,
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
            backdropFilter: 'blur(10px)',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            {activeSection}
          </Typography>
        </Box>
      </Fade>
    </>
  )
}

export default Header