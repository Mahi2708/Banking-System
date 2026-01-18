import React, { useState } from "react";
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import API from "../services/api";

export default function History() {
    const [bankingId, setBankingId] = useState("");
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState("");

    const loadHistory = async () => {
        try {
            const res = await API.get(`/api/txn/history/${bankingId}`);
            setData(res.data);
            setMsg("");
        } catch (e) {
            setMsg(e?.response?.data?.message || "History failed (403 possible)");
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    Transaction History
                </Typography>

                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    label="Banking ID"
                    onChange={(e) => setBankingId(e.target.value)}
                />

                <Button sx={{ mt: 2 }} variant="contained" onClick={loadHistory}>
                    Load History
                </Button>

                {msg && (
                    <Typography sx={{ mt: 2, color: "red", fontWeight: 600 }}>
                        {msg}
                    </Typography>
                )}

                {data.length > 0 && (
                    <Table sx={{ mt: 3 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Txn ID</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>From</TableCell>
                                <TableCell>To</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Time</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data.map((t) => (
                                <TableRow key={t.txnId}>
                                    <TableCell>{t.txnId}</TableCell>
                                    <TableCell>{t.txnType}</TableCell>
                                    <TableCell>{t.fromBankingId || "-"}</TableCell>
                                    <TableCell>{t.toBankingId || "-"}</TableCell>
                                    <TableCell>{t.amount}</TableCell>
                                    <TableCell>{t.txnTime}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </Paper>
        </Container>
    );
}
