import { client } from "@/sanity/lib/client";
import { PageInfo } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
=[_type =="pageInfo"][0]`

type Data = {
  pageInfo: PageInfo[]
}

type MessageType = {
  message: string
}

export default async function getPageInfo(req: NextApiRequest, res: NextApiResponse<Data | MessageType>) {
  if (req.method === "GET") {
    const pageInfo: PageInfo[] = await client.fetch(query);
    return res.status(200).json({ pageInfo });
  } else {
    // Handle other HTTP methods (optional)
    res.status(405).json({ message: "Method not allowed" });
  }
}
