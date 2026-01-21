export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { name, phone, message } = req.body;

  console.log("Received data:", name, phone, message);

  res.status(200).json({
    success: true,
    received: {
      name,
      phone,
      message,
    },
  });
}
