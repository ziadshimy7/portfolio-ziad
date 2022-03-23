import nodemailer from "nodemailer";
export const sendEmail = async (req, res) => {
  console.log(req.body);
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ziadshimy77@gmail.com",
        pass: "istudentziadshimy123!",
      },
    });
    let info = await transporter.sendMail({
      from: `${req.body.name} 👻 <${req.body.userEmail}>`,
      to: "ziadshimy7@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: `<b>${req.body.message}</b>`,
    });
    if (info) res.status(200).json({ message: "success" });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error sending email, Please try again later" });
  }

  if (info) {
  }
};
