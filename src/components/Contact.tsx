import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SendIcon from "@mui/icons-material/Send";


// Yup schema
const schema = yup.object({
  name: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  movingFrom: yup.string().required("Moving From is required"),
  movingTo: yup.string().required("Moving To is required"),
 movingDate: yup
  .mixed<Dayjs>()
  .required("Moving Date is required")
  .test(
    "is-future",
    "Select tomorrow or later",
    (value) => value.isAfter(dayjs(), "day")
  ),
message: yup.string().notRequired(), // optional

});

interface FormData {
  name: string;
  email: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  movingDate: Dayjs;   // non-nullable
  message?: string;    // optional
}




const Contact: React.FC = () => {
  const[loading,setLoading]=useState(false)

  const { handleSubmit, control, reset, formState: { errors } } = useForm<FormData>({
  resolver: yupResolver(schema) as any,
  defaultValues: {
  name: "",
  email: "",
  phone: "",
  movingFrom: "",
  movingTo: "",
  movingDate: dayjs(),  // hamesha present
  message: "",
}
});


  const [toasts, setToasts] = React.useState<
    { id: number; message: string; severity: "success" | "error" }[]
  >([]);

  const addToast = (message: string, severity: "success" | "error") => {
    const id = new Date().getTime();
    setToasts((prev) => [...prev, { id, message, severity }]);
  };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true)
      const payload = {
        ...data,
        movingDate: data.movingDate?.format("YYYY-MM-DD"),
      };

      const response: any = await fetch(
        "https://whimsical-jelly-f75900.netlify.app/api/lead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const resData = await response.json();
        if (resData.errors) {
          resData.errors.forEach((err: any) => addToast(err.message, "error"));
        } else addToast("Failed to submit form", "error");
        return;
      }
      setLoading(false)
      addToast("Form submitted successfully!", "success");
      reset();
    } catch (error: any) {
      addToast(error.message || "Something went wrong", "error");
      setLoading(false)
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box id="contact" sx={{ py: 6, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight={800} gutterBottom>
              Request a Quote
            </Typography>
            <Typography color="text.secondary">
              Fill in the details below and we'll get back to you shortly
            </Typography>
          </Box>

          <Grid container justifyContent="center">
            <Grid item xs={12} md={12}>
              <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }} elevation={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} md={4}>
                      <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Full Name *"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Controller
                        name="movingDate"
                        control={control}
                        render={({ field }) => (
                          <DatePicker
                            {...field}
                            label="Moving Date *"
                            disablePast
                            onChange={(v) => field.onChange(v)}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                error: !!errors.movingDate,
                                helperText: errors.movingDate?.message,
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Phone *"
                            fullWidth
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} md={4}>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Email *"
                            type="email"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Controller
                        name="movingFrom"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Moving From *"
                            fullWidth
                            error={!!errors.movingFrom}
                            helperText={errors.movingFrom?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Controller
                        name="movingTo"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Moving To *"
                            fullWidth
                            error={!!errors.movingTo}
                            helperText={errors.movingTo?.message}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="center" mb={3}>
                    <Grid item xs={12}>
                      <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            multiline
                            rows={3}
                            fullWidth
                            label="Additional Message"
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Button
                        type="submit"
                        variant="contained"
                        endIcon={loading ? null : <SendIcon />}
                        sx={{ py: 1.5, width: "200px", borderRadius: 2 }}
                      >
                        {loading ? "Submiting..." : "Submit Request"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>

          {toasts.map((toast) => (
            <Snackbar
              key={toast.id}
              open
              autoHideDuration={5000}
              onClose={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                severity={toast.severity}
                sx={{ width: "100%" }}
                onClose={() =>
                  setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                }
              >
                {toast.message}
              </Alert>
            </Snackbar>
          ))}
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default Contact;
