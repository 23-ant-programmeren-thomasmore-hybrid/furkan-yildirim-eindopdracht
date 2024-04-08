"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = ( value: unknown) => {
    if (!value || typeof value !== "string") {
        return false;
    }
    return true;
}

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("email");
    const message = formData.get("message");

    if(!validateString(senderEmail)){
        return
    }

    if (!message || typeof message !== "string") {
        return {
          error: "Invalid message",
        };
      }

    resend.emails.send({
        from:'onboarding@resend.dev' ,
        to: 'gurkanyildirim693@gmail.com' , 
        subject: 'Message from contact form' , 
        reply_to: senderEmail,
        text: message,

    })
};

