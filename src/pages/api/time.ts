import type { NextApiHandler, NextApiResponse } from "next";

export default function handler(
  req: NextApiHandler,
  res: NextApiResponse
) {
  const date = new Date();
  res.json({ time: date.toLocaleString() });
}
//
