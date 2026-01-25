import React, { useEffect, useState } from 'react'
import { Box, LinearProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const ScrollProgress: React.FC = () => {
  const theme = useTheme()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.pageYOffset
      const progress = (scrollPosition / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
      }}
    >
      <LinearProgress
        variant="determinate"
        value={scrollProgress}
        sx={{
          height: 3,
          backgroundColor: 'transparent',
          '& .MuiLinearProgress-bar': {
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          },
        }}
      />
    </Box>
  )
}

export default ScrollProgress