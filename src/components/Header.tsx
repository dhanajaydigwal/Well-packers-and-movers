// // import React, { useState, useEffect, type JSX } from 'react'
// // import {
// //   Box,
// //   Typography,
// //   alpha,
// //   useTheme,
// //   Fade,
// // } from '@mui/material'
// // import { motion } from 'framer-motion'
// // import LocalShippingIcon from '@mui/icons-material/LocalShipping'
// // import HomeIcon from '@mui/icons-material/Home'
// // import InfoIcon from '@mui/icons-material/Info'
// // import DesignServicesIcon from '@mui/icons-material/DesignServices'
// // import BusinessIcon from '@mui/icons-material/Business'
// // import PublicIcon from '@mui/icons-material/Public'
// // import HelpIcon from '@mui/icons-material/Help'
// // import ContactMailIcon from '@mui/icons-material/ContactMail'

// // export type SectionType =
// //   | 'home'
// //   | 'about'
// //   | 'services'
// //   | 'industries'
// //   | 'network'
// //   | 'faq'
// //   | 'contact'


// // interface NavigationProps {
// //   scrollToSection: (sectionId: SectionType) => void
// //   activeSection: SectionType
// // }

// // const Header: React.FC<NavigationProps> = ({
// //   scrollToSection,
// //   activeSection,
// // }) => {
// //   const theme = useTheme()
// //   const [scrolled, setScrolled] = useState(false)

// //   const sections: {
// //     id: SectionType
// //     label: string
// //     icon: JSX.Element
// //   }[] = [
// //     { id: 'home', label: 'Home', icon: <HomeIcon /> },
// //     { id: 'about', label: 'About', icon: <InfoIcon /> },
// //     { id: 'services', label: 'Services', icon: <DesignServicesIcon /> },
// //     { id: 'industries', label: 'Industries', icon: <BusinessIcon /> },
// //     { id: 'network', label: 'Network', icon: <PublicIcon /> },
// //     { id: 'faq', label: 'FAQ', icon: <HelpIcon /> },
// //     { id: 'contact', label: 'Contact', icon: <ContactMailIcon /> },
// //   ]

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 100)
// //     }
// //     window.addEventListener('scroll', handleScroll)
// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [])

// //   return (
// //     <>
// //       {/* Logo */}
// //       <Fade in={scrolled}>
// //         <Box
// //           sx={{
// //             position: 'fixed',
// //             top: 20,
// //             right: 20,
// //             zIndex: 1000,
// //             p: 2,
// //             borderRadius: 3,
// //             cursor: 'pointer',
// //             backgroundColor: alpha(theme.palette.background.paper, 0.9),
// //             backdropFilter: 'blur(10px)',
// //             boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
// //           }}
// //           onClick={() => scrollToSection('home')}
// //         >
// //           <LocalShippingIcon sx={{ color: theme.palette.primary.main }} />
// //         </Box>
// //       </Fade>

// //       {/* Side Navigation */}
// //       <Box
// //         sx={{
// //           position: 'fixed',
// //           right: 20,
// //           top: '50%',
// //           transform: 'translateY(-50%)',
// //           zIndex: 999,
// //           display: 'flex',
// //           flexDirection: 'column',
// //           gap: 0.5,
// //         }}
// //       >
// //         {sections.map(section => (
// //           <motion.div
// //             key={section.id}
// //             whileHover={{ scale: 1.2 }}
// //             whileTap={{ scale: 0.9 }}
// //           >
// //             <Box
// //               onClick={() => scrollToSection(section.id)}
// //               sx={{
// //                 width: 40,
// //                 height: 40,
// //                 borderRadius: '50%',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 cursor: 'pointer',
// //                 backgroundColor:
// //                   activeSection === section.id
// //                     ? theme.palette.primary.main
// //                     : alpha(theme.palette.primary.main, 0.15),
// //                 color:
// //                   activeSection === section.id
// //                     ? 'white'
// //                     : theme.palette.primary.main,
// //                 transition: 'all 0.3s ease',
// //                 '&:hover': {
// //                   backgroundColor: theme.palette.primary.main,
// //                   color: 'white',
// //                 },
// //               }}
// //             >
// //               {section.icon}
// //             </Box>
// //           </motion.div>
// //         ))}
// //       </Box>

// //       {/* Active Section Indicator */}
// //       <Fade in={scrolled}>
// //         <Box
// //           sx={{
// //             position: 'fixed',
// //             top: 90,
// //             right: 20,
// //             zIndex: 1000,
// //             px: 2,
// //             py: 1,
// //             borderRadius: 3,
// //             backgroundColor: alpha(theme.palette.background.paper, 0.9),
// //             backdropFilter: 'blur(10px)',
// //             boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
// //           }}
// //         >
// //           <Typography
// //             variant="caption"
// //             sx={{
// //               fontWeight: 700,
// //               color: theme.palette.primary.main,
// //               textTransform: 'uppercase',
// //             }}
// //           >
// //             {activeSection}
// //           </Typography>
// //         </Box>
// //       </Fade>
// //     </>
// //   )
// // }

// // export default Header

// import React, { useState, useEffect, type JSX } from 'react'
// import {
//   Box,
//   Typography,
//   alpha,
//   useTheme,
//   Fade,
//   IconButton,
//   Drawer,
//   useMediaQuery,
// } from '@mui/material'
// import { motion, AnimatePresence } from 'framer-motion'
// import LocalShippingIcon from '@mui/icons-material/LocalShipping'
// import HomeIcon from '@mui/icons-material/Home'
// import InfoIcon from '@mui/icons-material/Info'
// import DesignServicesIcon from '@mui/icons-material/DesignServices'
// import BusinessIcon from '@mui/icons-material/Business'
// import PublicIcon from '@mui/icons-material/Public'
// import HelpIcon from '@mui/icons-material/Help'
// import ContactMailIcon from '@mui/icons-material/ContactMail'
// import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close'

// export type SectionType =
//   | 'home'
//   | 'about'
//   | 'services'
//   | 'industries'
//   | 'network'
//   | 'faq'
//   | 'contact'

// interface NavigationProps {
//   scrollToSection: (sectionId: SectionType) => void
//   activeSection: SectionType
// }

// const Header: React.FC<NavigationProps> = ({
//   scrollToSection,
//   activeSection,
// }) => {
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'))
//   const [scrolled, setScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)

//   const sections: {
//     id: SectionType
//     label: string
//     icon: JSX.Element
//   }[] = [
//     { id: 'home', label: 'Home', icon: <HomeIcon /> },
//     { id: 'about', label: 'About', icon: <InfoIcon /> },
//     { id: 'services', label: 'Services', icon: <DesignServicesIcon /> },
//     { id: 'industries', label: 'Industries', icon: <BusinessIcon /> },
//     { id: 'network', label: 'Network', icon: <PublicIcon /> },
//     { id: 'faq', label: 'FAQ', icon: <HelpIcon /> },
//     { id: 'contact', label: 'Contact', icon: <ContactMailIcon /> },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 100)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const handleNavigation = (sectionId: SectionType) => {
//     scrollToSection(sectionId)
//     setMenuOpen(false)
//   }

//   // Mobile Menu Button
//   const MobileMenuButton = () => (
//     <Fade in={isMobile}>
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 20,
//           right: 20,
//           zIndex: 1100,
//           display: 'flex',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         {/* Active Section Indicator */}
//         {scrolled && (
//           <Box
//             sx={{
//               px: 2,
//               py: 1,
//               borderRadius: 3,
//               backgroundColor: alpha(theme.palette.background.paper, 0.9),
//               backdropFilter: 'blur(10px)',
//               boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
//               mr: 1,
//             }}
//           >
//             <Typography
//               variant="caption"
//               sx={{
//                 fontWeight: 700,
//                 color: theme.palette.primary.main,
//                 textTransform: 'uppercase',
//               }}
//             >
//               {activeSection}
//             </Typography>
//           </Box>
//         )}

//         {/* Menu Button */}
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <IconButton
//             onClick={() => setMenuOpen(!menuOpen)}
//             sx={{
//               width: 56,
//               height: 56,
//               backgroundColor: alpha(theme.palette.primary.main, 0.9),
//               backdropFilter: 'blur(10px)',
//               color: 'white',
//               boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
//               '&:hover': {
//                 backgroundColor: theme.palette.primary.main,
//               },
//             }}
//           >
//             {menuOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//         </motion.div>
//       </Box>
//     </Fade>
//   )

//   // Mobile Side Menu Drawer
//   const MobileMenuDrawer = () => (
//     <Drawer
//       anchor="right"
//       open={menuOpen}
//       onClose={() => setMenuOpen(false)}
//       sx={{
//         '& .MuiDrawer-paper': {
//           width: 280,
//           backgroundColor: alpha(theme.palette.background.paper, 0.95),
//           backdropFilter: 'blur(20px)',
//           borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//           boxShadow: '-10px 0 40px rgba(0,0,0,0.15)',
//           p: 3,
//         },
//       }}
//     >
//       {/* Logo Header */}
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: 2,
//           mb: 4,
//           pb: 2,
//           borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//         }}
//       >
//         <LocalShippingIcon
//           sx={{
//             fontSize: 32,
//             color: theme.palette.primary.main,
//           }}
//         />
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 700,
//             color: theme.palette.primary.main,
//           }}
//         >
//           Logistics
//         </Typography>
//       </Box>

//       {/* Menu Items */}
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 1,
//         }}
//       >
//         {sections.map((section, index) => (
//           <motion.div
//             key={section.id}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <Box
//               onClick={() => handleNavigation(section.id)}
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 2,
//                 p: 2,
//                 borderRadius: 2,
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 backgroundColor:
//                   activeSection === section.id
//                     ? alpha(theme.palette.primary.main, 0.1)
//                     : 'transparent',
//                 borderLeft: activeSection === section.id
//                   ? `3px solid ${theme.palette.primary.main}`
//                   : '3px solid transparent',
//                 '&:hover': {
//                   backgroundColor: alpha(theme.palette.primary.main, 0.08),
//                   transform: 'translateX(5px)',
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 40,
//                   height: 40,
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   backgroundColor:
//                     activeSection === section.id
//                       ? theme.palette.primary.main
//                       : alpha(theme.palette.primary.main, 0.1),
//                   color:
//                     activeSection === section.id
//                       ? 'white'
//                       : theme.palette.primary.main,
//                 }}
//               >
//                 {section.icon}
//               </Box>
//               <Box>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontWeight: 600,
//                     color:
//                       activeSection === section.id
//                         ? theme.palette.primary.main
//                         : theme.palette.text.primary,
//                   }}
//                 >
//                   {section.label}
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     color: theme.palette.text.secondary,
//                     display: 'block',
//                   }}
//                 >
//                   Click to navigate
//                 </Typography>
//               </Box>
//             </Box>
//           </motion.div>
//         ))}
//       </Box>

//       {/* Footer */}
//       <Box
//         sx={{
//           mt: 'auto',
//           pt: 3,
//           borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//           textAlign: 'center',
//         }}
//       >
//         <Typography
//           variant="caption"
//           sx={{
//             color: theme.palette.text.secondary,
//             display: 'block',
//             mb: 1,
//           }}
//         >
//           Logistics Solutions Inc.
//         </Typography>
//         <Typography
//           variant="caption"
//           sx={{
//             color: theme.palette.primary.main,
//             fontWeight: 600,
//           }}
//         >
//           © 2024 All rights reserved
//         </Typography>
//       </Box>
//     </Drawer>
//   )

//   return (
//     <>
//       {/* Mobile Menu Button - Only shows on mobile */}
//       {isMobile && (
//         <>
//           <MobileMenuButton />
//           <MobileMenuDrawer />
//         </>
//       )}

//       {/* Desktop Navigation - Only shows on desktop */}
//       {!isMobile && (
//         <>
//           {/* Logo */}
//           <Fade in={scrolled}>
//             <Box
//               sx={{
//                 position: 'fixed',
//                 top: 20,
//                 right: 20,
//                 zIndex: 1000,
//                 p: 2,
//                 borderRadius: 3,
//                 cursor: 'pointer',
//                 backgroundColor: alpha(theme.palette.background.paper, 0.9),
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
//               }}
//               onClick={() => scrollToSection('home')}
//             >
//               <LocalShippingIcon sx={{ color: theme.palette.primary.main }} />
//             </Box>
//           </Fade>

//           {/* Side Navigation */}
//           <Box
//             sx={{
//               position: 'fixed',
//               right: 20,
//               top: '50%',
//               transform: 'translateY(-50%)',
//               zIndex: 999,
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 0.5,
//             }}
//           >
//             {sections.map(section => (
//               <motion.div
//                 key={section.id}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Box
//                   onClick={() => scrollToSection(section.id)}
//                   sx={{
//                     width: 40,
//                     height: 40,
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     cursor: 'pointer',
//                     backgroundColor:
//                       activeSection === section.id
//                         ? theme.palette.primary.main
//                         : alpha(theme.palette.primary.main, 0.15),
//                     color:
//                       activeSection === section.id
//                         ? 'white'
//                         : theme.palette.primary.main,
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       backgroundColor: theme.palette.primary.main,
//                       color: 'white',
//                     },
//                   }}
//                 >
//                   {section.icon}
//                 </Box>
//               </motion.div>
//             ))}
//           </Box>

//           {/* Active Section Indicator */}
//           <Fade in={scrolled}>
//             <Box
//               sx={{
//                 position: 'fixed',
//                 top: 90,
//                 right: 20,
//                 zIndex: 1000,
//                 px: 2,
//                 py: 1,
//                 borderRadius: 3,
//                 backgroundColor: alpha(theme.palette.background.paper, 0.9),
//                 backdropFilter: 'blur(10px)',
//                 boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
//               }}
//             >
//               <Typography
//                 variant="caption"
//                 sx={{
//                   fontWeight: 700,
//                   color: theme.palette.primary.main,
//                   textTransform: 'uppercase',
//                 }}
//               >
//                 {activeSection}
//               </Typography>
//             </Box>
//           </Fade>
//         </>
//       )}
//     </>
//   )
// }

// export default Header

import React, { useState, useEffect, type JSX } from 'react'
import {
  Box,
  Typography,
  alpha,
  useTheme,
  Fade,
  useMediaQuery,
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
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
      {/* Logo - Shows on both desktop and mobile */}
      <Fade in={scrolled}>
        <Box
          sx={{
            position: 'fixed',
            top: 16,
            right: isMobile ? 16 : 20,
            zIndex: 1000,
            p: isMobile ? 1.5 : 2,
            borderRadius: 3,
            cursor: 'pointer',
            backgroundColor: alpha(theme.palette.background.paper, 0.9),
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
        </Box>
      </Fade>

      {/* Side Navigation - Shows on both desktop and mobile */}
      <Box
        sx={{
          position: 'fixed',
          right: isMobile ? 12 : 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? 0.25 : 0.5,
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
              onClick={() => scrollToSection(section.id)}
              sx={{
                width: isMobile ? 36 : 40,
                height: isMobile ? 36 : 40,
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
                sx: { fontSize: isMobile ? 18 : 20 }
              })}
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Active Section Indicator - Shows on both desktop and mobile */}
      <Fade in={scrolled}>
        <Box
          sx={{
            position: 'fixed',
            top: isMobile ? 70 : 90,
            right: isMobile ? 12 : 20,
            zIndex: 1000,
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

      {/* Tooltip for Mobile Hover */}
      {isMobile && (
        <Box
          sx={{
            position: 'fixed',
            right: 60,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 998,
            display: 'flex',
            flexDirection: 'column',
            gap: 0.25,
            pointerEvents: 'none',
          }}
        >
          {sections.map(section => (
            <Box
              key={section.id}
              sx={{
                height: 36,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Fade in={activeSection === section.id}>
                <Box
                  sx={{
                    backgroundColor: alpha(theme.palette.background.paper, 0.9),
                    backdropFilter: 'blur(10px)',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      fontSize: '0.7rem',
                    }}
                  >
                    {section.label}
                  </Typography>
                </Box>
              </Fade>
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}

export default Header
