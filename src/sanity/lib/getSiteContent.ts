import { client } from "./client";
import {
  resolveSiteContent,
  siteContentQuery,
  type SiteContent,
} from "./siteContent";

export async function getSiteContent(): Promise<SiteContent> {
  const content = await client.fetch<Partial<SiteContent> | null>(
    siteContentQuery
  );

  return resolveSiteContent(content);
}
