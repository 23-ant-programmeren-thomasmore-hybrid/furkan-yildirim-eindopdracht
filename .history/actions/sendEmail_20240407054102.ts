"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    resend.emails.send({
        from:'onboarding@resend.dev' ,
        to: 'gurkanyildirim693@gmail.com' , 
        subject: 'Message from contact form'
    })
};
