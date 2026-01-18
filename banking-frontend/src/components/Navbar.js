import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const adminToken = localStorage.getItem("adminToken");

    const scrollToSection = (id) => {
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 200);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background: "white",
                borderBottom: "1px solid #e6edff",
            }}
        >
            <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto" }}>
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                        sx={{
                            width: 30,
                            height: 30,
                            borderRadius: 1.5,
                            border: "2px solid #1e5bd8",
                        }}
                    />
                    <Typography
                        sx={{
                            fontWeight: 800,
                            color: "#0f172a",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate("/")}
                    >
                        Banking System
                    </Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                {/* Landing Menu */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    <Button onClick={() => navigate("/")} sx={{ color: "#0f172a" }}>
                        Home
                    </Button>
                    <Button onClick={() => scrollToSection("features")} sx={{ color: "#0f172a" }}>
                        Features
                    </Button>
                    <Button onClick={() => scrollToSection("services")} sx={{ color: "#0f172a" }}>
                        Services
                    </Button>
                    <Button onClick={() => scrollToSection("transactions")} sx={{ color: "#0f172a" }}>
                        Transactions
                    </Button>
                    <Button onClick={() => scrollToSection("contact")} sx={{ color: "#0f172a" }}>
                        Contact
                    </Button>
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                {/* Right Side Buttons */}
                {!token && (
                    <Button
                        variant="contained"
                        sx={{ borderRadius: 50, px: 3, fontWeight: 800 }}
                        onClick={() => navigate("/send-otp")}
                    >
                        Sign In (OTP)
                    </Button>
                )}

                {!token && (
                    <Button
                        variant="outlined"
                        sx={{ borderRadius: 50, px: 3, fontWeight: 800, ml: 1 }}
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </Button>
                )}

                {token && (
                    <Button
                        variant="contained"
                        sx={{ borderRadius: 50, px: 3, fontWeight: 800 }}
                        onClick={() => navigate("/dashboard")}
                    >
                        Dashboard
                    </Button>
                )}
                {token && (
                    <Button onClick={() => navigate("/profile")} sx={{ color: "#0f172a" }}>
                        Profile
                    </Button>
                )}
                {token && (
                    <Button
                        variant="outlined"
                        sx={{ borderRadius: 50, px: 3, fontWeight: 800, ml: 1 }}
                        color="error"
                        onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("mobile");
                            navigate("/");
                        }}
                    >
                        Logout
                    </Button>
                )}



                {!adminToken && (
                    <Button
                        sx={{ ml: 1, color: "#1e5bd8", fontWeight: 900 }}
                        onClick={() => navigate("/admin-login")}
                    >
                        Admin
                    </Button>
                )}

                {adminToken && (
                    <Button
                        sx={{ ml: 1, color: "#1e5bd8", fontWeight: 900 }}
                        onClick={() => navigate("/admin-dashboard")}
                    >
                        Admin Panel
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}
