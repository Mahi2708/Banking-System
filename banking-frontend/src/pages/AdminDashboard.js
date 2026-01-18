import React, { useEffect, useState } from "react";
import {
    Container,
    Paper,
    Typography,
    Button,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import API from "../services/api";

export default function AdminDashboard() {
    const [candidates, setCandidates] = useState([]);
    const [msg, setMsg] = useState("");

    const load = async () => {
        try {
            const res = await API.get("/api/admin/candidates");
            setCandidates(res.data);
            setMsg("");
        } catch (e) {
            setMsg("Failed to load candidates (403 possible)");
        }
    };

    const approve = async (id) => {
        try {
            await API.post(`/api/admin/approve/${id}`);
            load();
        } catch {
            alert("Approve failed");
        }
    };

    const block = async (bankingId) => {
        try {
            await API.post(`/api/admin/block/${bankingId}`);
            load();
        } catch {
            alert("Block failed");
        }
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    Admin Dashboard
                </Typography>

                <Button sx={{ mt: 2 }} variant="contained" onClick={load}>
                    Refresh
                </Button>

                {msg && (
                    <Typography sx={{ mt: 2, color: "red", fontWeight: 600 }}>
                        {msg}
                    </Typography>
                )}

                <Table sx={{ mt: 3 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Mobile</TableCell>
                            <TableCell>Banking ID</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Approve</TableCell>
                            <TableCell>Block</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {candidates.map((c) => (
                            <TableRow key={c.candidateId}>
                                <TableCell>{c.candidateId}</TableCell>
                                <TableCell>{c.name}</TableCell>
                                <TableCell>{c.mobile}</TableCell>
                                <TableCell>{c.bankingId}</TableCell>
                                <TableCell>{c.status}</TableCell>

                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={() => approve(c.candidateId)}
                                    >
                                        Approve
                                    </Button>
                                </TableCell>

                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => block(c.bankingId)}
                                    >
                                        Block
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Container>
    );
}
