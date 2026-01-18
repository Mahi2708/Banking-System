import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    const Card = ({ title, path }) => (
        <Paper
            onClick={() => navigate(path)}
            sx={{
                p: 3,
                borderRadius: 4,
                cursor: "pointer",
                "&:hover": { transform: "scale(1.02)" },
                transition: "0.2s",
            }}
        >
            <Typography sx={{ fontWeight: 800 }}>{title}</Typography>
            <Typography sx={{ fontSize: 13, color: "gray", mt: 1 }}>
                Open {title}
            </Typography>
        </Paper>
    );

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
                Candidate Dashboard
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={3}><Card title="Deposit" path="/deposit" /></Grid>
                <Grid item xs={12} md={3}><Card title="Withdraw" path="/withdraw" /></Grid>
                <Grid item xs={12} md={3}><Card title="Transfer" path="/transfer" /></Grid>
                <Grid item xs={12} md={3}><Card title="Transaction History" path="/history" /></Grid>
            </Grid>
        </Container>
    );
}
