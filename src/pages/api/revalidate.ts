import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //페이지 요청을 받았을때 페이지 재생성
  try {
    await res.revalidate("/");
    return res.json({ revalidate: true });
  } catch (err) {
    res.status(500).send("Revalidation Failed");
  }
}
//
