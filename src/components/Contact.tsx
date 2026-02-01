import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  // Grid,
  TextField,
  Button,
  Alert,
  Snackbar,
  alpha,
  useTheme,
  Paper,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface ContactFormData {
  name: string;
  movingDate: Dayjs | null;
  email: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  message: string;
  agreeTerms: boolean;
}

const Contact: React.FC = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    movingDate: dayjs(),
    email: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    message: "",
    agreeTerms: false,
  });

  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (field: keyof ContactFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userCaptcha !== captcha) {
      setSnackbar({
        open: true,
        message: "Captcha verification failed",
        severity: "error",
      });
      generateCaptcha();
      return;
    }

    if (!formData.agreeTerms) {
      setSnackbar({
        open: true,
        message: "Please accept terms & conditions",
        severity: "error",
      });
      return;
    }

    setSnackbar({
      open: true,
      message: "Form submitted successfully!",
      severity: "success",
    });

    setFormData({
      name: "",
      movingDate: dayjs(),
      email: "",
      phone: "",
      movingFrom: "",
      movingTo: "",
      message: "",
      agreeTerms: false,
    });
    setUserCaptcha("");
    generateCaptcha();
  };

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 12345 67890"],
      color: theme.palette.primary.main,
      bgColor: alpha(theme.palette.primary.main, 0.1),
    },
    {
      icon: <EmailIcon />,
      title: "Email Us",
      details: ["info@welllogistic.com", "support@welllogistic.com"],
      color: theme.palette.secondary.main,
      bgColor: alpha(theme.palette.secondary.main, 0.1),
    },
    {
      icon: <LocationOnIcon />,
      title: "Head Office",
      details: ["123 Business Street", "Mumbai - 400001"],
      color: theme.palette.success.main,
      bgColor: alpha(theme.palette.success.main, 0.1),
    },
    {
      icon: <AccessTimeIcon />,
      title: "Working Hours",
      details: ["Mon–Sat: 8 AM – 10 PM", "Sun: 10 AM – 6 PM"],
      color: theme.palette.info.main,
      bgColor: alpha(theme.palette.info.main, 0.1),
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ py: 6, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="lg">
          {/* HEADING */}
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight={800} gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="h6" color="text.secondary" fontWeight={400}>
              Ready to move? We are here to help you.
            </Typography>
          </Box>

          {/* ENHANCED CONTACT CARDS */}
          <Grid container spacing={3} sx={{  width: "100%" }} mb={6}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 3,
                    backgroundColor: "white",
                    border: `1px solid ${alpha(info.color, 0.2)}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 24px ${alpha(info.color, 0.15)}`,
                      borderColor: info.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        backgroundColor: info.bgColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: info.color,
                        mb: 2,
                        fontSize: 28,
                      }}
                    >
                      {info.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{ color: info.color }}
                    >
                      {info.title}
                    </Typography>

                    <Stack spacing={0.5} alignItems="center">
                      {info.details.map((detail, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.4,
                          }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* FORM WITH 3 FIELDS PER ROW - FIXED WIDTH */}
          <Grid container justifyContent="center">
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  backgroundColor: "white",
                  width: "100%",
                }}
              >
                <Box textAlign="center" mb={4}>
                  <Typography variant="h4" fontWeight={800} gutterBottom>
                    Request a Quote
                  </Typography>
                  <Typography color="text.secondary">
                    Fill in the details below and we'll get back to you shortly
                  </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                  {/* First Row - 3 Fields */}
                  <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Full Name *"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        InputProps={{
                          sx: { borderRadius: 2 },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <DatePicker
                        label="Moving Date *"
                        value={formData.movingDate}
                        onChange={(v) => handleChange("movingDate", v)}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            required: true,
                            InputProps: { sx: { borderRadius: 2 } },
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Phone *"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        InputProps={{
                          sx: { borderRadius: 2 },
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* Second Row - 3 Fields */}
                  <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Email *"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        InputProps={{
                          sx: { borderRadius: 2 },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Moving From *"
                        required
                        value={formData.movingFrom}
                        onChange={(e) =>
                          handleChange("movingFrom", e.target.value)
                        }
                        InputProps={{
                          sx: { borderRadius: 2 },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Moving To *"
                        required
                        value={formData.movingTo}
                        onChange={(e) =>
                          handleChange("movingTo", e.target.value)
                        }
                        InputProps={{
                          sx: { borderRadius: 2 },
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* Third Row - Message Field */}
                  <Grid container justifyContent="center">
                    <Grid item xs={12} sx={{ width: "100%", mb: 3 }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Additional Message"
                        placeholder="Tell us about your moving requirements..."
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        InputProps={{
                          sx: { borderRadius: 2 },
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* Terms & Submit Button */}
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                      <Button
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                        endIcon={<SendIcon />}
                        sx={{
                          py: 1.5,
                          width:"200px",
                          borderRadius: 2,
                          fontSize: "1rem",
                          fontWeight: 600,
                          textTransform: "none",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          "&:hover": {
                            boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Submit Request
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>

          <Snackbar
            open={snackbar.open}
            autoHideDuration={5000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default Contact;
