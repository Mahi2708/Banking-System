import React from "react";
import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

// ✅ Your local SVG illustration:
import heroImg from "../assets/illustrations/hero.svg";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Box sx={{ background: "#f4f7ff", minHeight: "100vh" }}>
            <Container sx={{ pt: 6, pb: 6, maxWidth: "1200px !important" }}>
                {/* HERO */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 900, color: "#0f172a", lineHeight: 1.1 }}
                        >
                            Banking <span style={{ color: "#1e5bd8" }}>System</span>
                        </Typography>

                        <Typography sx={{ mt: 2, color: "#334155", maxWidth: 520 }}>
                            Secure OTP login, unique Banking ID generation, and complete banking
                            transactions (deposit, withdraw, transfer and history). Admin portal
                            supports approvals and blocking customers.
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ borderRadius: 50, px: 4, fontWeight: 800 }}
                                onClick={() => navigate("/send-otp")}
                            >
                                Sign In (OTP)
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                sx={{ borderRadius: 50, px: 4, fontWeight: 800 }}
                                onClick={() => navigate("/register")}
                            >
                                Register
                            </Button>
                        </Box>

                        <Typography sx={{ mt: 1, fontSize: 13, color: "#64748b" }}>

                        </Typography>
                    </Grid>

                    {/* Hero Illustration */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: 5,
                                p: 3,
                                background: "white",
                                border: "1px solid #e6edff",
                            }}
                        >
                            <img
                                alt="Bank Illustration"
                                style={{ width: "100%", borderRadius: 16 }}
                                src={heroImg}
                            />
                        </Paper>
                    </Grid>
                </Grid>

                {/* ✅ FEATURES SECTION */}
                <Box id="features" sx={{ pt: 10 }} />

                <Typography
                    variant="h4"
                    sx={{ mt: 1, fontWeight: 900, textAlign: "center", color: "#0f172a" }}
                >
                    Key Features
                </Typography>

                <Typography
                    sx={{
                        mt: 1,
                        textAlign: "center",
                        color: "#64748b",
                        maxWidth: 650,
                        mx: "auto",
                    }}
                >
                    Everything required for a complete banking workflow with secure authentication,
                    auto Banking ID, transaction tracking, and admin approvals.
                </Typography>

                <Grid container spacing={3} sx={{ mt: 3 }}>
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={0}
                            sx={{ p: 3, borderRadius: 4, border: "1px solid #e6edff", background: "white" }}
                        >
                            <Box
                                sx={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "#eaf2ff",
                                    color: "#1e5bd8",
                                }}
                            >
                                <VerifiedUserOutlinedIcon />
                            </Box>

                            <Typography sx={{ mt: 2, fontWeight: 900, color: "#0f172a" }}>
                                OTP Authentication
                            </Typography>

                            <Typography sx={{ mt: 1, fontSize: 14, color: "#64748b" }}>
                                Secure login using mobile OTP verification. Simple, fast and user-friendly.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={0}
                            sx={{ p: 3, borderRadius: 4, border: "1px solid #e6edff", background: "white" }}
                        >
                            <Box
                                sx={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "#eaf2ff",
                                    color: "#1e5bd8",
                                }}
                            >
                                <CreditCardOutlinedIcon />
                            </Box>

                            <Typography sx={{ mt: 2, fontWeight: 900, color: "#0f172a" }}>
                                Unique Banking ID
                            </Typography>

                            <Typography sx={{ mt: 1, fontSize: 14, color: "#64748b" }}>
                                Automatically generate Banking ID after registration and create account instantly.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={0}
                            sx={{ p: 3, borderRadius: 4, border: "1px solid #e6edff", background: "white" }}
                        >
                            <Box
                                sx={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "#eaf2ff",
                                    color: "#1e5bd8",
                                }}
                            >
                                <SwapHorizOutlinedIcon />
                            </Box>

                            <Typography sx={{ mt: 2, fontWeight: 900, color: "#0f172a" }}>
                                Transactions
                            </Typography>

                            <Typography sx={{ mt: 1, fontSize: 14, color: "#64748b" }}>
                                Deposit, withdraw and transfer funds. Full transaction history included.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* ✅ SERVICES */}
                <Box id="services" sx={{ pt: 10 }} />
                <Typography variant="h4" sx={{ fontWeight: 900, textAlign: "center", color: "#0f172a" }}>
                    Services
                </Typography>
                <Typography sx={{ textAlign: "center", color: "#64748b", mt: 1 }}>
                    Registration • OTP Login • Banking ID • Deposit • Withdraw • Transfer • Admin Monitoring
                </Typography>

                {/* ✅ TRANSACTIONS */}
                <Box id="transactions" sx={{ pt: 10 }} />
                <Typography variant="h4" sx={{ fontWeight: 900, textAlign: "center", color: "#0f172a" }}>
                    Transactions
                </Typography>
                <Typography sx={{ textAlign: "center", color: "#64748b", mt: 1 }}>
                    Deposit, Withdraw, Transfer & Transaction History with secure access.
                </Typography>

                {/* ✅ CONTACT */}
                <Box id="contact" sx={{ pt: 10 }} />
                <Typography variant="h4" sx={{ fontWeight: 900, textAlign: "center", color: "#0f172a" }}>
                    Contact
                </Typography>
                <Typography sx={{ textAlign: "center", color: "#64748b", mt: 1 }}>
                    Email: support@bankingsystem.com | Phone: +91 98765 43210
                </Typography>

                {/* FOOTER */}
                <Box sx={{ mt: 8, py: 4, textAlign: "center", color: "#64748b" }}>
                    <Typography sx={{ fontWeight: 700, color: "#0f172a" }}>
                        Banking System
                    </Typography>

                    <Typography sx={{ mt: 1, fontSize: 13 }}>
                        Home • Register • OTP Login • Admin • Transactions
                    </Typography>

                    <Typography sx={{ mt: 1, fontSize: 13 }}>
                        © 2026 | React + Spring Boot + PostgreSQL
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
