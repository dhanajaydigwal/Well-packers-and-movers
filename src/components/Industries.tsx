import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  alpha,
  useTheme,
} from '@mui/material'
import { motion } from 'framer-motion'
import ComputerIcon from '@mui/icons-material/Computer'
import HomeIcon from '@mui/icons-material/Home'
import BusinessIcon from '@mui/icons-material/Business'
import SchoolIcon from '@mui/icons-material/School'
import StoreIcon from '@mui/icons-material/Store'
import FactoryIcon from '@mui/icons-material/Factory'

const Industries: React.FC = () => {
  const theme = useTheme()

  const industries = [
    {
      icon: <ComputerIcon />,
      title: 'IT & Consumer Electronics',
      description: 'Heavy machinery and industrial equipment transportation.',
      color: theme.palette.primary.main,
    },
    {
      icon: <HomeIcon />,
      title: 'Residential',
      description: 'Heavy machinery and industrial equipment transportation.',
      color: theme.palette.secondary.main,
    },
    {
      icon: <BusinessIcon />,
      title: 'Corporate',
      description: 'Heavy machinery and industrial equipment transportation.',
      color: theme.palette.success.main,
    },
    {
      icon: <SchoolIcon />,
      title: 'Educational',
      description: 'Heavy machinery and industrial equipment transportation.',
      color: theme.palette.info.main,
    },
    {
      icon: <StoreIcon />,
      title: 'Retail',
      description: 'Heavy machinery and industrial equipment transportation.',
      color: theme.palette.warning.main,
    },
    {
      icon: <FactoryIcon />,
      title: 'Industrial',
      description: 'Heavy machinery and industrial equipment transportation.',
      color: theme.palette.error.main,
    },
  ]

  return (
    <Box
      id="industries"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 1)} 0%, ${alpha(
          theme.palette.secondary.light,
          0.03
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
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Industries We Serve
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
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              We provide specialized moving solutions for diverse industries across India
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    textAlign: 'center',
                    border: `2px solid ${alpha(industry.color, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: alpha(industry.color, 0.3),
                      boxShadow: `0 20px 40px ${alpha(industry.color, 0.15)}`,
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${alpha(industry.color, 0.1)} 0%, ${alpha(
                          industry.color,
                          0.2
                        )} 100%)`,
                        margin: '0 auto 20px',
                        '& svg': {
                          fontSize: 36,
                          color: industry.color,
                        },
                      }}
                    >
                      {industry.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {industry.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {industry.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Industries