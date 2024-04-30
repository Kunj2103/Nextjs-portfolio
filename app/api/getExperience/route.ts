import { client } from "@/sanity/lib/client";
import { Experience } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
=[_type =="experience"]{
  ...,
  technologies[]->
}`

type Data = {
  experiences: Experience[]
}

type MessageType = {
  message: string
}

export default async function getExperience(req: NextApiRequest, res: NextApiResponse<Data | MessageType>) {
  if (req.method === "GET") {
    const experiences: Experience[] = await client.fetch(query);
    return res.status(200).json({ experiences });
  } else {
    // Handle other HTTP methods (optional)
    res.status(405).json({ message: "Method not allowed" });
  }
}
