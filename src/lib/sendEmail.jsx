"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ from, subject, html }) => {
  try {
    const response = await resend.emails.send({
      from: "My Portfolio Contact <onboarding@resend.dev>", // ✅ Use verified sender
      to: "fahdelattar13@gmail.com",
      reply_to: from,
      subject,
      html,
    });

    return response;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email");
  }
};
