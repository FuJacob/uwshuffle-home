import React from "react";
import Image from "next/image";
import { FaGithub, FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Google Calendar",
    description:
      "See your Google Calendar schedule in any browser tab with one click.\n\nGet soft notifications about upcoming events.\n\nJoin meetings with one click. Manganum is fully integrated with Zoom, Google Meet, Microsoft Teams, etc.",
    image: "/image.png",
  },
  {
    id: 2,
    title: "Google Keep",
    description:
      "You no longer have to switch browser tabs to keep a fresh thought.\n\nUnlike the Gmail or Google Calendar sidebar, our Google Keep app supports all features—for example, set notes background and dark theme.",
    image: "/image.png",
  },
  {
    id: 3,
    title: "Google Tasks",
    description:
      'With Manganum, Google Tasks is available on every browser tab.\n\nThere is no need to switch tabs and lose context to mark something as "done" or add a new task.\n\nLet\'s suggest the first thing for your to-do list: try Manganum.',
    image: "/image.png",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  if (index % 2 !== 0) {
    return (
      <article className="flex flex-row items-center justify-center w-full mb-16">
        <Image
          src={feature.image}
          alt={feature.title}
          width={800}
          height={600}
          className="w-4/5 h-auto rounded-3xl"
        />
        <div className="flex flex-col w-1/5 px-4">
          <h3 className="text-3xl font-bold mb-2 text-text-primary">
            {feature.title}
          </h3>
          <p className="text-lg text-text-secondary whitespace-pre-line">
            {feature.description}
          </p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="flex flex-row items-center justify-center w-full mb-16">
        <div className="flex flex-col w-1/5 px-4">
          <h3 className="text-3xl font-bold mb-2 text-text-primary">
            {feature.title}
          </h3>
          <p className="text-lg text-text-secondary whitespace-pre-line">
            {feature.description}
          </p>
        </div>
        <Image
          src={feature.image}
          alt={feature.title}
          width={800}
          height={600}
          className="w-4/5 h-auto rounded-3xl"
        />
      </article>
    );
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-center gap-2 mb-8">
        <Image
          src="/logo.svg"
          alt="UW Shuffle"
          width={40}
          height={40}
          className="w-10 h-10 rounded-3xl"
        />
        <h1 className="text-4xl font-bold text-text-primary">UW Shuffle</h1>
      </header>

      <main className="flex flex-col items-center">
        <section className="flex flex-col items-center justify-center max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-8xl font-bold mb-6 text-text-primary">
            Sidebar with your productivity apps in one click on any Chrome tab
          </h2>
          <p className="text-3xl mb-8 text-text-secondary">
            Organize your browsing to get more done with a sidebar featuring
            Gmail, Calendar, Drive, Notes, Tasks, ChatGPT, and more apps.
          </p>

          <button
            type="button"
            className="px-6 py-3 rounded-full text-lg font-semibold transition-colors bg-primary text-white hover:bg-primary-hover"
            aria-label="Add UW Shuffle to Chrome browser"
          >
            Add to Chrome
          </button>
        </section>

        <video
          src="/2hours.mp4"
          autoPlay
          loop
          muted
          className="w-full px-12 rounded-3xl shadow-lg max-h-[60vh] mb-16"
          aria-label="Demo video showing UW Shuffle in action"
        />

        <section className="flex flex-col items-center justify-center max-w-6xl mx-auto w-full">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </section>

        <section className="flex flex-col items-center justify-center w-full bg-cover bg-center bg-no-repeat h-screen bg-[url('/bg.png')]">
          <h3 className="text-7xl font-bold mb-6 text-text-primary">
            &ldquo;Manganum is a game changer!&rdquo;
          </h3>
          <p className="text-2xl mb-6 text-text-secondary">
            Check out what leading productivity YouTuber Scott Friesen says
            about Manganum ❤️
          </p>
          <Image
            src="/sidebar.png"
            alt="UW Shuffle sidebar interface"
            width={200}
            height={600}
            className="w-1/6 rounded-3xl"
          />
        </section>

        <section className="flex flex-col items-center justify-center w-full h-32 bg-surface-hover">
          <p className="text-2xl mb-4 text-text-secondary">
            Do you work in Chrome? You need Manganum.
          </p>
          <button
            type="button"
            className="px-8 py-4 rounded-full text-2xl font-semibold transition-colors bg-primary text-white hover:bg-primary-hover"
            aria-label="Add UW Shuffle to Chrome browser"
          >
            Add to Chrome
          </button>
        </section>
      </main>

      <footer className="py-12 bg-text-primary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-2xl font-bold mb-4">UW Shuffle</h4>
            <p className="text-lg text-text-tertiary mb-8">
              Do you work in Chrome? You need Manganum.
            </p>

            <div className="flex space-x-6 mb-8">
              <a
                href="#"
                className="text-3xl text-text-tertiary hover:text-white transition-colors"
                aria-label="Visit UW Shuffle GitHub repository"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-3xl text-text-tertiary hover:text-white transition-colors"
                aria-label="Join UW Shuffle Discord community"
              >
                <FaDiscord />
              </a>
              <a
                href="#"
                className="text-3xl text-text-tertiary hover:text-white transition-colors"
                aria-label="Follow UW Shuffle on Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-3xl text-text-tertiary hover:text-white transition-colors"
                aria-label="Connect with UW Shuffle on LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-lg border-text-secondary text-text-tertiary">
            <p>&copy; 2024 UW Shuffle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
