"use server";

export const sendEmail = async (formData: FormData) => {
    console.log
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");
};

