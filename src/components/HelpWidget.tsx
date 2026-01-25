import React, { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  Avatar,
  Badge,
  alpha,
  useTheme,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import ChatIcon from '@mui/icons-material/Chat'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

interface ChatMessage {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const HelpWidget: React.FC = () => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! I'm your moving assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [unreadCount, setUnreadCount] = useState(0)

  const quickReplies = [
    'Get a moving quote',
    'What are your service charges?',
    'Do you provide packing materials?',
    'How long does packing take?',
  ]

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    const userMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date(),
    }
    setChatMessages([...chatMessages, userMessage])
    setMessage('')

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I can help you with that. Our team will contact you shortly with a detailed quote.",
        "Thanks for your query. Would you like a free moving quote? You can also call us directly at +91 98765 43210",
        "For immediate assistance, please call our helpline: +91 98765 43210. We're available 24/7!",
        "We offer complete packing, moving, loading, and storage services across all major cities in India.",
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      const botMessage: ChatMessage = {
        id: chatMessages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      }
      setChatMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    setMessage(reply)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleWidgetClick = () => {
    setIsOpen(!isOpen)
    if (!isOpen && unreadCount > 0) {
      setUnreadCount(0)
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                elevation={8}
                sx={{
                  width: 350,
                  maxWidth: '90vw',
                  height: 500,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  mb: 2,
                }}
              >
                {/* Chat Header */}
                <Box
                  sx={{
                    p: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        bgcolor: 'white',
                        color: theme.palette.primary.main,
                        mr: 2,
                      }}
                    >
                      <ChatIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Moving Assistant
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.9 }}>
                        Typically replies instantly
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() => setIsOpen(false)}
                    sx={{ color: 'white' }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                {/* Chat Messages */}
                <Box
                  sx={{
                    flex: 1,
                    p: 2,
                    overflowY: 'auto',
                    backgroundColor: alpha(theme.palette.background.default, 0.5),
                  }}
                >
                  {chatMessages.map((msg) => (
                    <Box
                      key={msg.id}
                      sx={{
                        display: 'flex',
                        justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                        mb: 2,
                      }}
                    >
                      <Paper
                        sx={{
                          p: 2,
                          maxWidth: '80%',
                          borderRadius: 4,
                          backgroundColor: msg.sender === 'user' 
                            ? alpha(theme.palette.primary.main, 0.1)
                            : 'white',
                          border: `1px solid ${alpha(
                            msg.sender === 'user' ? theme.palette.primary.main : theme.palette.divider,
                            0.2
                          )}`,
                          ...(msg.sender === 'user' && {
                            borderTopRightRadius: 4,
                          }),
                          ...(msg.sender === 'bot' && {
                            borderTopLeftRadius: 4,
                          }),
                        }}
                      >
                        <Typography variant="body2">{msg.text}</Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            textAlign: 'right',
                            mt: 0.5,
                            color: 'text.secondary',
                            fontSize: '0.7rem',
                          }}
                        >
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </Typography>
                      </Paper>
                    </Box>
                  ))}
                </Box>

                {/* Quick Replies */}
                <Box sx={{ p: 2, borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}` }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
                    Quick replies:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    {quickReplies.map((reply, index) => (
                      <Paper
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        sx={{
                          px: 2,
                          py: 0.5,
                          borderRadius: 6,
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        {reply}
                      </Paper>
                    ))}
                  </Box>
                </Box>

                {/* Message Input */}
                <Box sx={{ p: 2, borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}` }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      multiline
                      maxRows={3}
                    />
                    <IconButton
                      color="primary"
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                        },
                        '&:disabled': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.3),
                        },
                      }}
                    >
                      <SendIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Toggle Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Badge
            badgeContent={unreadCount}
            color="error"
            invisible={unreadCount === 0}
            overlap="circular"
          >
            <IconButton
              onClick={handleWidgetClick}
              sx={{
                width: 60,
                height: 60,
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
                boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
              }}
            >
              {isOpen ? <CloseIcon /> : <ChatIcon />}
            </IconButton>
          </Badge>
        </motion.div>
      </Box>
    </>
  )
}

export default HelpWidget