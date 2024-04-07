"use server";

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");
};

