import nodemailer from "nodemailer";

export async function POST(request) {
  const recepient = {
    username: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    password: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  };

  console.log(process.env.NEXT_PUBLIC_EMAIL_PASSWORD);
  console.log(process.env.NEXT_PUBLIC_EMAIL_USERNAME);

  const formData = await request.formData();
  const sender = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  return sendEmail(recepient, sender);
}

// send email
function sendEmail(recepient, sender) {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: recepient.username,
      pass: recepient.password,
    },
  });

  const message = ` <p>${sender.message}</p><br />
                    <p>Thank you,</p>
                    <p style="font-weight: bold; margin-bottom: 0px;">${sender.firstname} ${sender.lastname}</p>
                    <a href="mailto:${sender.email}">${sender.email}</a>
                    <p style="margin: 0px;">${sender.phone}</p>`;

  const email = {
    from: recepient.username,
    to: recepient.username,
    subject: sender.subject,
    html: message,
  };

  transporter.sendMail(email, (error) => {
    if (error) {
      return Response.json({
        message: "Email was not sent. Please try again.",
      });
    } else {
      return Response.json({ message: "Email was successfully sent" });
    }
  });
}
