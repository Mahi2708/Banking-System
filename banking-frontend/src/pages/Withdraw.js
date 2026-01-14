import React, { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import API from "../services/api";

export default function Withdraw() {
    const [bankingId, setBankingId] = useState("");
    const [amount, setAmount] = useState("");
    const [msg, setMsg] = useState("");

    const submit = async () => {
        try {
            const res = await API.post("/api/txn/withdraw", {
                bankingId,
                amount: Number(amount),
            });
            setMsg(res.data.message);
        } catch (e) {
            setMsg(e?.response?.data?.message || "Withdraw failed (403 possible)");
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    Withdraw Money
                </Typography>

                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    label="Banking ID"
                    onChange={(e) => setBankingId(e.target.value)}
                />

                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    label="Amount"
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                />

                <Button sx={{ mt: 2 }} variant="contained" onClick={submit}>
                    Withdraw
                </Button>

                {msg && (
                    <Typography sx={{ mt: 2, color: "green", fontWeight: 600 }}>
                        {msg}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
}
