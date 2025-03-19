"use client";
import React, { useState } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import DateReserve from "@/components/DateReserve";

const BookingPage = () => {
  const [formData, setFormData] = useState({ name: "", contact: "", venue: "Bloom" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "auto" }}>
      <TextField label="Name-Lastname" name="name" variant="standard" onChange={handleChange} />
      <TextField label="Contact-Number" name="contact" variant="standard" onChange={handleChange} />
      <TextField select label="Venue" name="venue" variant="standard" onChange={handleChange}>
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </TextField>
      <DateReserve />
      <Button variant="contained" color="primary">Book Venue</Button>
    </Box>
  );
};

export default BookingPage;
