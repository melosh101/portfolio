"use server"
import "server-only"
import axios from "axios";

export const githubClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});


export async function getRepos() {
  try {
    const response = await githubClient.get('/users/melosh101/repos');
    return response.data;
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
}

import { z } from "zod";

const MetadataSchema = z.object({
  name: z.string(),
  tools: z.array(z.string()),
  description: z.string(),
  prod_url: z.string().url(),
  version: z.string()
});

type Metadata = z.infer<typeof MetadataSchema>;

export async function getRepoMetadata({name, master_branch}: {name: string, master_branch: string}): Promise<Metadata | null> {
  try {
    const response = await axios.get(
      `/repos/melosh101/${name}/refs/heads/dev/metadata.json`
    );
    
    const content = Buffer.from(response.data.content, 'base64').toString();
    const jsonData = JSON.parse(content);
    
    return MetadataSchema.parse(jsonData);
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return null;
  }
}

