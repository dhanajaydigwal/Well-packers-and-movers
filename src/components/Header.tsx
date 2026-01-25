import React, { useState, useEffect, type JSX } from 'react'
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

export type SectionType =
  | 'home'
  | 'about'
  | 'services'
  | 'industries'
  | 'network'
  | 'faq'
  | 'contact'


interface NavigationProps {
  scrollToSection: (sectionId: SectionType) => void
  activeSection: SectionType
}

const Header: React.FC<NavigationProps> = ({
  scrollToSection,
  activeSection,
}) => {
  const theme = useTheme()
  const [scrolled, setScrolled] = useState(false)

  const sections: {
    id: SectionType
    label: string
    icon: JSX.Element
  }[] = [
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
      {/* Logo */}
      <Fade in={scrolled}>
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 1000,
            p: 2,
            borderRadius: 3,
            cursor: 'pointer',
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
            backdropFilter: 'blur(10px)',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          }}
          onClick={() => scrollToSection('home')}
        >
          <LocalShippingIcon sx={{ color: theme.palette.primary.main }} />
        </Box>
      </Fade>

      {/* Side Navigation */}
      <Box
        sx={{
          position: 'fixed',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5,
        }}
      >
        {sections.map(section => (
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
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor:
                  activeSection === section.id
                    ? theme.palette.primary.main
                    : alpha(theme.palette.primary.main, 0.15),
                color:
                  activeSection === section.id
                    ? 'white'
                    : theme.palette.primary.main,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                },
              }}
            >
              {section.icon}
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Active Section Indicator */}
      <Fade in={scrolled}>
        <Box
          sx={{
            position: 'fixed',
            top: 90,
            right: 20,
            zIndex: 1000,
            px: 2,
            py: 1,
            borderRadius: 3,
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
            backdropFilter: 'blur(10px)',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              textTransform: 'uppercase',
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
