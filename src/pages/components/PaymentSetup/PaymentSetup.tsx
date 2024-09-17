import React, { useState } from 'react';
import { Button, TextField, Typography } from "@mui/material"

const PaymentSetup = ({ onSubmit }) => {
  const [form, setForm] = useState({
    recipient: '',
    amount: '',
    frequency: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ recipient: '', amount: '', frequency: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Setup Standing Order</Typography>
      <TextField
        label="Recipient"
        name="recipient"
        value={form.recipient}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Amount"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Frequency"
        name="frequency"
        value={form.frequency}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default PaymentSetup;