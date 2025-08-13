export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Smart Schedule Upload",
    description:
      "Intelligently parse your Quest schedule with automatic course detection and real-time validation.",
    image: "/features/uploadSchedule.png",
  },
  {
    id: 2,
    title: "Quest Integration",
    description:
      "Automatically scrape available course alternatives directly from Quest pages with smart element recognition.",
    image: "/features/quest.png",
  },
  {
    id: 3,
    title: "Interactive Calendar",
    description:
      "Visual schedule display with instant conflict detection and drag & drop reordering.",
    image: "/features/schedule.png",
  },
  {
    id: 4,
    title: "UW Flow Integration",
    description:
      "Real-time professor data with ratings and reviews from UW Flow's GraphQL API.",
    image: "/features/uwflow.png",
  },
  {
    id: 5,
    title: "Export & Sharing",
    description:
      "Generate .ics files for Google Calendar, Outlook, or any calendar app with shareable links.",
    image: "/features/googlecalendar.png",
  },
];
