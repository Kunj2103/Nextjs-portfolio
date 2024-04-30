'use server'
import { client } from "@/sanity/lib/client";
import { Social } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
=[_type =="social"]`

type Data = {
  socials: Social[]
}

type MessageType = {
  message: string
}

export default async function getSocials(req: NextApiRequest, res: NextApiResponse<Data | MessageType>) {
  if (req.method === "GET") {
    const socials: Social[] = await client.fetch(query);
    return res.status(200).json({ socials });
  } else {
    // Handle other HTTP methods (optional)
    res.status(405).json({ message: "Method not allowed" });
  }
}
