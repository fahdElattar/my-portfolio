"use client";

import { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import "./ContactForm.css";
import { sendEmail } from "@/lib/sendEmail";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState({ loading: false, success: null, error: null });
    const [showStatus, setShowStatus] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });
        setShowStatus(false);

        try {
            await sendEmail({
                from: email,
                subject: `New message from ${name}`,
                html: `
                <h2>New Message from ${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p>${message}</p>
                `,
            });

            setStatus({ loading: false, success: "Message sent successfully!", error: null });
            setShowStatus(true);

            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Failed to send email:", error);
            setStatus({ loading: false, success: null, error: "Failed to send message. Please try again." });
            setShowStatus(true);
        }
    }
    
    useEffect(() => {
        if (showStatus) {
            const timer = setTimeout(() => {
                setShowStatus(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showStatus]);

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
            />

            <textarea
                className="form-textarea"
                rows="7"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>

            <Button type="submit" disabled={status.loading}>
                {status.loading ? "Sending..." : "Send your Message"}
            </Button>

            {/* Success Card */}
            {status.success && (
                <div
                    className={`status-card success ${showStatus ? "show" : "hidden"}`}
                >
                    <svg className="w-7" viewBox="0 0 22 22">
                        <path d="M11 3a8 8 0 1 1 0 16 8 8 0 0 1 0-16" fill="#34A853"></path>
                        <path d="M9.2 12.28 7.12 10.2 6 11.32l3.2 3.2 6.4-6.4L14.48 7z" fill="#fff"></path>
                    </svg>
                    <p>{status.success}</p>
                </div>
            )}

            {/* Error Card */}
            {status.error && (
                <div
                    className={`status-card error ${showStatus ? "show" : "hidden"}`}
                >
                    <svg className="w-7" viewBox="0 0 22 22">
                        <path clipRule="evenodd" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16" fill="#EA4335" fillRule="evenodd"></path>
                        <path clipRule="evenodd" d="M13.263 14.394 11 12.131l-2.263 2.263-1.131-1.131L9.869 11 7.606 8.737l1.131-1.131L11 9.869l2.263-2.263 1.131 1.131L12.131 11l2.263 2.263z" fill="#fff" fillRule="evenodd"></path>
                    </svg>
                    <p>{status.error}</p>
                </div>
            )}
        </form>
    );
};
