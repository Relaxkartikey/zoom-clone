import type { WorkItem } from "@/data/portfolio";

export function getEmbedUrl(item: WorkItem): string | null {
  const { url, platform } = item;

  if (platform === "YouTube") {
    const shortsMatch = url.match(/youtube\.com\/shorts\/([\w-]+)/);
    const youtuBeMatch = url.match(/youtu\.be\/([\w-]+)/);
    const watchMatch = url.match(/[?&]v=([\w-]+)/);
    const id = shortsMatch?.[1] ?? youtuBeMatch?.[1] ?? watchMatch?.[1];
    return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
  }

  if (platform === "Instagram") {
    const clean = url.split("?")[0].replace(/\/$/, "");
    return `${clean}/embed`;
  }

  return null;
}
