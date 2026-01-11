// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Only POST allowed" });
//   }

//   const { crop, city } = req.body || {};

//   if (!crop || !city) {
//     return res.status(400).json({
//       error: "crop and city are required"
//     });
//   }

//   return res.status(200).json({
//     success: true,
//     crop,
//     city,
//     recommendedTraders: [
//       "Trader A",
//       "Trader B",
//       "Trader C"
//     ]
//   });
// }
export default function handler(req, res) {
  return res.status(200).json({
    message: "Backend alive"
  });
}
