'use server'

import { client } from "@/sanity/lib/client";
import { Skill } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
  *[ _type == "skill"]
`;

type Data = {
  skills: Skill[];
};
type MessageType = {
  message: string
}

export default async function getSkills(req: NextApiRequest, res: NextApiResponse<Data | MessageType>) {
  if (req.method === "GET") {
    const skills: Skill[] = await client.fetch(query);
    return res.status(200).json({ skills });
  } else {
    // Handle other HTTP methods (optional)
    res.status(405).json({ message: "Method not allowed" });
  }
}
