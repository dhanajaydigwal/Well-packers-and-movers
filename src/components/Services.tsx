import React from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  alpha,
  useTheme,
} from '@mui/material'
import Grid from "@mui/material/GridLegacy";
import { motion } from 'framer-motion'
import HomeIcon from '@mui/icons-material/Home'
import InventoryIcon from '@mui/icons-material/Inventory'
import MovingIcon from '@mui/icons-material/Moving'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'

const Services: React.FC = () => {
  const theme = useTheme()

  // const services = [
  //   {
  //     title: 'Separate & Sharing',
  //     description:
  //       'Expert team with proper equipment for safe loading and unloading of your belongings.',
  //     icon: <HomeIcon />,
  //     features: ['Room-wise packing', 'Shared space logistics', 'Partial move solutions'],
  //   },
  //   {
  //     title: 'Packing & Moving',
  //     description:
  //       'Expert team with proper equipment for safe loading and unloading of your belongings.',
  //     icon: <InventoryIcon />,
  //     features: ['Professional packing', 'Material provided', 'Item categorization'],
  //   },
  //   {
  //     title: 'Loading & Unloading',
  //     description:
  //       'Expert team with proper equipment for safe loading and unloading of your belongings.',
  //     icon: <MovingIcon />,
  //     features: ['Trained manpower', 'Safety equipment', 'Damage protection'],
  //   },
  //   {
  //     title: 'Car & Bike Transport',
  //     description:
  //       'Expert team with proper equipment for safe loading and unloading of your belongings.',
  //     icon: <DirectionsCarIcon />,
  //     features: ['Door-to-door service', 'Insurance covered', 'Real-time tracking'],
  //   },
  // ]
  const services = [
  {
    title: 'Separate & Sharing',
    description:
      'Flexible moving solutions for shared spaces or partial relocations, ensuring smooth coordination and cost-effective transport.',
      icon: <HomeIcon />,
      features: ['Room-wise packing', 'Shared space logistics', 'Partial move solutions'],
    },
  {
    title: 'Packing & Moving',
    description:
      'Complete end-to-end relocation services with professional packing, secure transportation, and careful delivery of your belongings.',
      icon: <InventoryIcon />,
      features: ['Professional packing', 'Material provided', 'Item categorization'],
    },
  {
    title: 'Loading & Unloading',
    description:
      'Skilled manpower equipped with modern tools to safely load and unload your items with maximum care and efficiency.',
      icon: <MovingIcon />,
      features: ['Trained manpower', 'Safety equipment', 'Damage protection'],
    },
  {
    title: 'Car & Bike Transport',
    description:
      'Reliable vehicle transportation services with secure handling, insurance coverage, and real-time tracking for peace of mind.',
      icon: <DirectionsCarIcon />,
      features: ['Door-to-door service', 'Insurance covered', 'Real-time tracking'],
    },
]


  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(
          theme.palette.background.default,
          1
        )} 0%, ${alpha(theme.palette.primary.light, 0.03)} 100%)`,
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}
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
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Our Services
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
              }}
            >
              Comprehensive moving and logistic solutions tailored to your needs
            </Typography>
          </motion.div>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${alpha(
                        theme.palette.primary.main,
                        0.15
                      )}`,
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Icon + Title */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          color: 'white',
                          mr: 2,
                          '& svg': { fontSize: 28 },
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography variant="h5" fontWeight={700}>
                        {service.title}
                      </Typography>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', mb: 3 }}
                    >
                      {service.description}
                    </Typography>

                    {/* Features */}
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: '50%',
                              background: alpha(
                                theme.palette.primary.main,
                                0.1
                              ),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 2,
                              fontSize: 12,
                              color: theme.palette.primary.main,
                              fontWeight: 700,
                            }}
                          >
                            ✓
                          </Box>
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Button */}
                    {/* <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        mt: 'auto',
                        borderWidth: 2,
                        fontWeight: 600,
                        '&:hover': {
                          borderWidth: 2,
                          background: alpha(
                            theme.palette.primary.main,
                            0.05
                          ),
                        },
                      }}
                    >
                      Learn More
                    </Button> */}
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

export default Services
