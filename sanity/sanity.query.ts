import { groq } from "next-sanity";
import { client } from "./lib/client";


export async function getSocials(
){
  return client.fetch(groq`
  =[_type =="social"]`);
}

export async function getPageInfo(
){
  return client.fetch(groq`
  =[_type =="pageInfo"][0]`);
}
