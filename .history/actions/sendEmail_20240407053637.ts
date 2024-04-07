"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.R)

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");
};

