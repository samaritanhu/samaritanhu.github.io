import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { routes, site } from "../data/site";

export async function GET(context) {
  const entries = await getCollection("journal", ({ data }) => data.locale === "en" && !data.draft);
  const sorted = entries.sort((a, b) => (b.data.date ?? new Date(0)) - (a.data.date ?? new Date(0)));

  return rss({
    title: site.en.title,
    description: site.en.description,
    site: context.site,
    items: sorted.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.body?.slice(0, 500).replace(/^>\s*/gm, ""),
      link: `${routes.en[entry.data.room]}${entry.id.split("/").pop()}/`,
    })),
  });
}
