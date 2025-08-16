export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "1. Upload Your Current Class Schedule",
    description: "Quickly copy your full schedule from the Quest My Class Schedule box and drop it into the app. We handle the formatting and set everything up so you can start planning swaps immediately.",
    image: "/features/uploadSchedule.png",
  },
  {
    id: 2,
    title: "2. Select a Swap to Preview",
    description: "No more manual searching. We automatically scan Quest for all available swaps and place a Preview button right beside them. One click shows you exactly how the swap would look in your timetable.",
    image: "/features/quest.png",
  },
  {
    id: 3,
    title: "3. See Conflicts and Friends’ Classes",
    description: "Get a clean, visual schedule where conflicts are highlighted instantly. Easily drag and drop classes to test different setups, and see where your friends are registered to avoid overlaps.",
    image: "/features/schedule.png",
  },
  {
    id: 4,
    title: "4. Get Instant Professor Ratings",
    description: "As you browse and adjust classes, professor ratings and reviews from UW Flow appear in real time. You can check teaching quality and course feedback without ever leaving your schedule view.",
    image: "/features/uwflow.png",
  },
  {
    id: 5,
    title: "5. Export Your Calendar Anywhere",
    description: "Once you’ve finalized your schedule, export it with one click. Download an .ics file compatible with Google Calendar, Outlook, Apple Calendar, or any app, and keep your timetable synced everywhere.",
    image: "/features/googlecalendar.png",
  },
];
