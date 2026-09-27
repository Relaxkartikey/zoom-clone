export const profile = {
  name: "Arish Qadri",
  firstName: "ARISH",
  lastName: "QADRI",
  roles: ["Social Media Manager", "Video Editor", "Cinematographer"],
  location: "Jhalawar, Rajasthan",
  country: "India",
  email: "Arish.qadri@outlook.com",
  phone: "+91 9587795068",
  tagline: "I turn ideas into content people stop scrolling for.",
  summary:
    "Arish Qadri is a Social Media Manager, Video Editor and Cinematographer with 1 year of hands-on experience creating digital content for brands, businesses and personal brands. His work focuses on social media management, short-form video editing, content planning and visual storytelling — with an emphasis on creating content that fits the brand identity and connects with its audience.",
  approach:
    "Arish combines creative thinking, visual storytelling and an understanding of social media to develop content that is relevant to the audience and aligned with the brand's identity.",
};

export const heroStickers = [
  "1 YEAR EXPERIENCE",
  "VIDEO + SOCIAL",
  "JHALAWAR, RAJASTHAN",
  "OPEN TO CREATIVE WORK",
];

export const coreSkills = [
  "Social Media Management",
  "Instagram Management",
  "Reels & Shorts Editing",
  "YouTube Video Editing",
  "Cinematography",
  "Content Planning",
  "Visual Storytelling",
];

export type WorkCategory = "REELS" | "SHORTS" | "YOUTUBE" | "CINEMATIC" | "SOCIAL";

export type WorkItem = {
  id: string;
  title: string;
  platform: "YouTube" | "Instagram";
  type: string;
  category: WorkCategory;
  url: string;
};

export const workItems: WorkItem[] = [
  {
    id: "yt-short-1",
    title: "YouTube Short 01",
    platform: "YouTube",
    type: "Short-form video",
    category: "SHORTS",
    url: "https://youtube.com/shorts/tgKDCwKHq_4",
  },
  {
    id: "yt-short-2",
    title: "YouTube Short 02",
    platform: "YouTube",
    type: "Short-form video",
    category: "SHORTS",
    url: "https://youtube.com/shorts/rXYncnpmjk0",
  },
  {
    id: "yt-short-3",
    title: "YouTube Short 03",
    platform: "YouTube",
    type: "Short-form video",
    category: "SHORTS",
    url: "https://youtube.com/shorts/YFUsfzKuB1M",
  },
  {
    id: "yt-short-4",
    title: "YouTube Short 04",
    platform: "YouTube",
    type: "Short-form video",
    category: "SHORTS",
    url: "https://youtube.com/shorts/TPQkRGci4AU",
  },
  {
    id: "yt-short-5",
    title: "YouTube Short 05",
    platform: "YouTube",
    type: "Short-form video",
    category: "SHORTS",
    url: "https://youtube.com/shorts/HibYBXheXfk",
  },
  {
    id: "yt-short-6",
    title: "YouTube Short 06",
    platform: "YouTube",
    type: "Short-form video",
    category: "SHORTS",
    url: "https://youtube.com/shorts/6n9gcnhBcvg",
  },
  {
    id: "yt-short-7",
    title: "YouTube Short 07",
    platform: "YouTube",
    type: "Short-form video",
    category: "SHORTS",
    url: "https://youtube.com/shorts/rFWkMMeNn84",
  },
  {
    id: "yt-video-1",
    title: "YouTube Video",
    platform: "YouTube",
    type: "Long-form / cinematic edit",
    category: "YOUTUBE",
    url: "https://youtu.be/IviTeB1nfek",
  },
  {
    id: "ig-reel-1",
    title: "Instagram Reel 01",
    platform: "Instagram",
    type: "Reel",
    category: "REELS",
    url: "https://www.instagram.com/reel/DdYWZQWNm8q/",
  },
  {
    id: "ig-reel-2",
    title: "Instagram Reel 02",
    platform: "Instagram",
    type: "Reel",
    category: "REELS",
    url: "https://www.instagram.com/reel/DdolYwnNHqQ/",
  },
];

export const workFilters: ("ALL" | WorkCategory)[] = [
  "ALL",
  "REELS",
  "SHORTS",
  "YOUTUBE",
  "CINEMATIC",
  "SOCIAL",
];

export const socialManagement = {
  platforms: ["Instagram", "LinkedIn"],
  capabilities: [
    "Instagram Management",
    "LinkedIn Management",
    "Posting & Scheduling",
    "Content Planning",
    "Content Calendar",
    "Audience-focused Content",
    "Brand-focused Visual Content",
    "Caption & Hashtag Strategy",
  ],
  workflow: ["IDEA", "CONTENT PLAN", "SHOOT", "EDIT", "PUBLISH", "ANALYZE"],
};

export const services = [
  {
    number: "01",
    title: "Social Media",
    items: [
      "Instagram Management",
      "LinkedIn Management",
      "Posting & Scheduling",
      "Content Planning",
      "Caption & Hashtag Strategy",
    ],
    color: "accent-yellow",
  },
  {
    number: "02",
    title: "Video Editing",
    items: [
      "Reels Editing",
      "Shorts Editing",
      "YouTube Editing",
      "Cinematic Editing",
      "Promotional Videos",
      "Social Media Ads",
      "Motion Graphics",
    ],
    color: "accent-pink",
  },
  {
    number: "03",
    title: "Content Strategy",
    items: [
      "Content Strategy",
      "Content Calendar",
      "Reels Concepts",
      "Trend Research",
      "Competitor Research",
      "Visual Content Planning",
    ],
    color: "accent-green",
  },
  {
    number: "04",
    title: "Video Production",
    items: ["Cinematography", "Video Shooting", "Visual Storytelling"],
    color: "accent-blue",
  },
];

export const industries = ["Finance", "Real Estate", "Personal Brands", "Startups"];

export const tools = {
  creative: ["Adobe Premiere Pro", "CapCut", "Adobe After Effects — Beginner", "Canva"],
  productivity: ["Google Drive", "Google Sheets", "LinkedIn Analytics"],
};

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  institute: "Poornima Institute of Engineering & Technology",
  university: "Rajasthan Technical University",
};

export const workStyle = [
  "Creative",
  "Visual-focused",
  "Trend-aware",
  "Consistent",
  "Storytelling-focused",
  "Audience-focused",
  "Detail-oriented",
];

export const socialLinks: { label: string; href: string }[] = [];
