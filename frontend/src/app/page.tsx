'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Fetch data dari backend
        axios.get("http://localhost:8080/api/message")
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error("Error fetching message:", error);
            });
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Next.js + Golang + PostgreSQL</h1>
            <p>{message || "Loading..."}</p>
        </div>
    );
}
