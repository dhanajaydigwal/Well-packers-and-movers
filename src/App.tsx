import { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import Network from './components/Network'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HelpWidget from './components/HelpWidget'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
      light: '#534bae',
      dark: '#000051',
    },
    secondary: {
      main: '#ff6f00',
      light: '#ffa040',
      dark: '#c43e00',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
})

type SectionType = 'home' | 'about' | 'services' | 'industries' | 'network' | 'faq' | 'contact'

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home')

  const scrollToSection = (sectionId: SectionType) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionType[] = ['home', 'about', 'services', 'industries', 'network', 'faq', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ position: 'relative' }}>
          <ScrollProgress />
          <Header scrollToSection={scrollToSection} activeSection={activeSection} />
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Services />
          <Industries />
          <Network />
          <FAQ />
          <Contact />
          <Footer />
          <HelpWidget />
          {/* <SocialFloat /> */}
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App