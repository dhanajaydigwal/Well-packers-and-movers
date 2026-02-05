import React, { useState, useEffect, type JSX } from 'react'
import {
  Box,
  Typography,
  alpha,
  useTheme,
  Fade,
  useMediaQuery,
  IconButton,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import BusinessIcon from '@mui/icons-material/Business'
import PublicIcon from '@mui/icons-material/Public'
import HelpIcon from '@mui/icons-material/Help'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleSectionClick = (sectionId: SectionType) => {
    scrollToSection(sectionId)
    if (isMobile) {
      setMenuOpen(false)
    }
  }

  // Circular position calculation for icons around the cross icon (RIGHT TOP CORNER)
  const getCircularPosition = (index: number, total: number, radius: number, centerX: number, centerY: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    return { x: centerX + x, y: centerY + y }
  }

  return (
    <>
      {!isMobile && <Box
        sx={{
          position: 'fixed',
          top: 16,
          right: isMobile ? 70 : 20,
          zIndex: 1002,
          p: isMobile ? 1.5 : 2,
          borderRadius: 3,
          cursor: 'pointer',
          backgroundColor: alpha(theme.palette.background.paper, scrolled ? 0.9 : 0.7),
          backdropFilter: 'blur(10px)',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: alpha(theme.palette.background.paper, 1),
            transform: 'scale(1.05)',
          },
          transition: 'all 0.3s ease',
        }}
        onClick={() => scrollToSection('home')}
      >
        <LocalShippingIcon 
          sx={{ 
            color: theme.palette.primary.main,
            fontSize: isMobile ? 24 : 28
          }} 
        />
      </Box>}

      {isMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: menuOpen ? 85 : 16,
            right: menuOpen ? 90 : 16,
            zIndex: 1002,
            cursor: 'pointer',
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)', // smooth move
          }}
        >
          <IconButton
            onClick={handleMenuClick}
            sx={{
              p: 1.5,
              borderRadius: menuOpen ? "50%"  : 3,
              backgroundColor: menuOpen
                ? "white"
                : alpha(theme.palette.background.paper, scrolled ? 0.9 : 0.7),
              backdropFilter: 'blur(10px)',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: menuOpen
                  ? theme.palette.primary.dark
                  : alpha(theme.palette.background.paper, 1),
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {menuOpen ? (
              <CloseIcon sx={{ color: 'black'}} />
            ) : (
              <MenuIcon sx={{ color: theme.palette.primary.main }} />
            )}
          </IconButton>
        </Box>
      )}

      {/* Desktop Side Navigation - ALWAYS VISIBLE */}
      {!isMobile && (
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
            alignItems: 'center',
          }}
        >
          {sections.map(section => (
            <motion.div
              key={section.id}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                onClick={() => handleSectionClick(section.id)}
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
                      : alpha(theme.palette.primary.main, 0.1),
                  color:
                    activeSection === section.id
                      ? 'white'
                      : theme.palette.primary.main,
                  transition: 'all 0.3s ease',
                  border: activeSection === section.id
                    ? `2px solid ${theme.palette.primary.main}`
                    : `2px solid transparent`,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {React.cloneElement(section.icon, {
                  sx: { fontSize: 20 }
                })}
              </Box>
            </motion.div>
          ))}
        </Box>
      )}

      {/* Mobile Circular Menu - Shows AROUND the cross icon when menuOpen is true */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000,
                backgroundColor: alpha(theme.palette.common.black, 0.5),
                backdropFilter: 'blur(4px)',
                pointerEvents: 'auto',
              }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Icons in Circle AROUND the cross icon (which is at top right corner) */}
            {sections.map((section, index) => {
              // Center of circle = Cross icon position (top right corner)
              const centerX = -75 // Adjust based on cross icon position
              const centerY = 75 // Adjust based on cross icon position
              const radius = 80 // Radius of circle

              const position = getCircularPosition(index, sections.length, radius, centerX, centerY)

              return (
                <motion.div
                  key={section.id}
                  initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: position.x,
                    y: position.y
                  }}
                  exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    position: 'fixed',
                    right: 16, // Cross icon se offset
                    top: 16,   // Cross icon se offset
                    zIndex: 1001,
                  }}
                >
                  <Box
                    onClick={() => handleSectionClick(section.id)}
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      backgroundColor:
                        activeSection === section.id
                          ? theme.palette.primary.main
                          : alpha(theme.palette.background.paper, 0.95),
                      color:
                        activeSection === section.id
                          ? 'white'
                          : theme.palette.primary.main,
                      transition: 'all 0.3s ease',
                      border: activeSection === section.id
                        ? `2px solid ${theme.palette.primary.main}`
                        : `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                      boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {React.cloneElement(section.icon, {
                      sx: { fontSize: 22 }
                    })}
                  </Box>
                </motion.div>
              )
            })}
          </>
        )}
      </AnimatePresence>

      {/* Active Section Indicator - Shows when scrolled */}
      <Fade in={scrolled}>
        <Box
          sx={{
            position: 'fixed',
            top: isMobile ? 80 : 90,
            right: isMobile ? 12 : 20,
            zIndex: 1001,
            px: isMobile ? 1.5 : 2,
            py: isMobile ? 0.5 : 1,
            borderRadius: 3,
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
            backdropFilter: 'blur(10px)',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            minWidth: isMobile ? 60 : 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              textTransform: 'uppercase',
              fontSize: isMobile ? '0.65rem' : '0.75rem',
              letterSpacing: '0.5px',
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