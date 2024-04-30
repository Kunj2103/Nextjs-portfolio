import { client } from "@/sanity/lib/client";
import { Project } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
=[_type =="project"]{
  ...,
  technologies[]->
}`

type Data = {
  projects: Project[]
}

type MessageType = {
  message: string
}

export default async function getProjects(req: NextApiRequest, res: NextApiResponse<Data | MessageType>) {
  if (req.method === "GET") {
    const projects: Project[] = await client.fetch(query);
    return res.status(200).json({ projects });
  } else {
    // Handle other HTTP methods (optional)
    res.status(405).json({ message: "Method not allowed" });
  }
}
