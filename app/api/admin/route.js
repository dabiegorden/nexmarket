import bcrypt from "bcrypt";
import adminModel from "@/app/db/models/adminModel";
import db from "@/app/db/db";

export default async function handler(req, res) {
  await db();

  if (req.body === "POST") {
    const { unsername, email, password } = req.body;

    try {
      const hashpassword = await bcrypt.hash(password, 10);
      const admin = new adminModel({
        unsername,
        email,
        password: hashpassword,
      });
      await admin.save();
      res.status(201).send("Admin created successfully");
    } catch (error) {
      res.status(500).send("Error creating admin");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
