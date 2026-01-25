import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  alpha,
  useTheme,
} from '@mui/material'
import { motion } from 'framer-motion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface FAQItem {
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const theme = useTheme()
  const [expanded, setExpanded] = useState<string | false>(false)

  const faqItems: FAQItem[] = [
    {
      question: 'How far in advance should I book my move?',
      answer: 'We recommend booking at least 2-3 weeks in advance, especially during peak moving seasons (summer months and weekends). For last-minute moves, contact us directly and we\'ll do our best to accommodate your request.',
    },
    {
      question: 'What items are not allowed to be transported?',
      answer: 'We cannot transport hazardous materials, flammable items, perishable food, plants, pets, or valuable items like jewelry and important documents. Please make separate arrangements for these items.',
    },
    {
      question: 'Do you provide packing materials?',
      answer: 'Yes, we provide high-quality packing materials including boxes, bubble wrap, packing paper, tape, and mattress covers. These can be included in your moving package.',
    },
    {
      question: 'How is the cost calculated?',
      answer: 'Cost is calculated based on distance, volume of items, services required (packing, loading, etc.), and any special requirements. We provide transparent quotes with no hidden charges.',
    },
    {
      question: 'Is my belongings insured during transit?',
      answer: 'Yes, all our moves come with basic insurance coverage. Additional insurance options are available for valuable items. We provide full documentation of insurance coverage.',
    },
    {
      question: 'Can you help with vehicle transportation?',
      answer: 'Yes, we specialize in car and bike transportation across India. We use enclosed carriers and provide real-time tracking for your vehicle.',
    },
    {
      question: 'What if I need storage for some items?',
      answer: 'We offer secure, climate-controlled storage facilities for short-term and long-term needs. Our storage facilities have 24/7 security and CCTV surveillance.',
    },
    {
      question: 'Do you provide packing and unpacking services?',
      answer: 'Yes, we offer complete packing and unpacking services. Our team will carefully pack your items, transport them, and unpack them at your new location.',
    },
  ]

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(
          theme.palette.background.default,
          1
        )} 100%)`,
      }}
    >
      <Container maxWidth="lg">
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
              Frequently Asked Questions
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
              Find answers to common questions about our moving services
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  borderRadius: '12px !important',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  overflow: 'hidden',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.1)}`,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: expanded === `panel${index}` ? alpha(theme.palette.primary.main, 0.05) : 'transparent',
                    '& .MuiAccordionSummary-content': {
                      my: 1.5,
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: alpha(theme.palette.background.default, 0.5),
                    borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  }}
                >
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default FAQ