import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); 
export const sendEmail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.HOTMAIL_USERNAME,
        pass: process.env.HOTMAIL_PASSWORD,
      },
    });
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    let info = await transporter.sendMail({
      from: `${req.body.name} 👻 <${req.body.userEmail}>`,
      to: "ziadshimy7@gmail.com",
      subject: "Hello ✔",
      text: "Hello world",
      html: `<b>${req.body.message}</b>`,
    });
    if (info) res.status(200).json({ message: "success" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error sending email, Please try again later" });
  }
};
