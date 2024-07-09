import nodemailer from "nodemailer";

export async function POST(request) {
  const recepient = {
    username: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    password: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  };

  const formData = await request.formData();
  const sender = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: recepient.username,
      pass: recepient.password,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: recepient.username,
    to: recepient.username,
    subject: sender.subject,
    replyTo: sender.email,
    html: `
        <p style="margin-bottom: 20px;">Hello Rommel, </p>
        <p>${sender.message}</p>
        <p style="margin-top: 50px;">Thank you,</p>
        <p style="margin-bottom: 0px;">
          ${sender.firstname} ${sender.lastname}
        </p>
        <p style="margin-bottom: 0px; margin-top: 0px;">${sender.email}</p>
        <p style="margin-top: 0px;">${sender.phone}</p>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return Response.json({ message: "Email sent successfully" });
}
