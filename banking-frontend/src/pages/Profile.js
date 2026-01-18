import React, { useEffect, useState } from "react";
import { Container, Paper, Typography, Divider, Button, Box } from "@mui/material";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("mobile");
        navigate("/");
    };

    const loadProfile = async () => {
        try {
            setLoading(true);
            setErrMsg("");

            const mobile = localStorage.getItem("mobile");
            if (!mobile) {
                setErrMsg("Mobile not found. Please login again.");
                setLoading(false);
                return;
            }

            // ✅ backend api call
            const res = await API.get(`/api/candidate/profile?mobile=${mobile}`);
            setProfile(res.data);
        } catch (e) {
            console.log("PROFILE API ERROR:", e);
            setErrMsg(
                e?.response?.data?.message ||
                `Profile load failed (Status: ${e?.response?.status || "No Status"})`
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProfile();
    }, []);

    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    Profile
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* ✅ Loading state */}
                {loading && (
                    <Typography sx={{ color: "gray" }}>Loading profile...</Typography>
                )}

                {/* ✅ Error message */}
                {!loading && errMsg && (
                    <Box>
                        <Typography sx={{ color: "red", fontWeight: 700 }}>
                            {errMsg}
                        </Typography>

                        <Button sx={{ mt: 2 }} variant="contained" onClick={loadProfile}>
                            Retry
                        </Button>

                        <Button sx={{ mt: 2, ml: 2 }} variant="outlined" color="error" onClick={logout}>
                            Logout
                        </Button>
                    </Box>
                )}

                {/* ✅ Success profile display */}
                {!loading && profile && (
                    <Box>
                        <Typography><b>Name:</b> {profile.name}</Typography>
                        <Typography><b>Mobile:</b> {profile.mobile}</Typography>
                        <Typography><b>Email:</b> {profile.email || "-"}</Typography>
                        <Typography><b>Address:</b> {profile.address || "-"}</Typography>
                        <Typography><b>Banking ID:</b> {profile.bankingId || "Not Assigned Yet"}</Typography>
                        <Typography><b>Status:</b> {profile.status}</Typography>

                        <Button sx={{ mt: 3 }} variant="contained" onClick={() => navigate("/dashboard")}>
                            Go to Dashboard
                        </Button>

                        <Button sx={{ mt: 3, ml: 2 }} variant="outlined" color="error" onClick={logout}>
                            Logout
                        </Button>
                    </Box>
                )}
            </Paper>
        </Container>
    );
}
