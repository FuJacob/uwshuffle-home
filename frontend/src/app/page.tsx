import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaLinkedin,
  FaChrome,
} from "react-icons/fa";
import ThemeSwitcher from "./components/ThemeSwitcher";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Smart Schedule Upload",
    description:
      "Intelligently parse your Quest schedule with automatic course detection.\n\nSupports all UW course codes (CS, MATH, PHYS, etc.) and extracts course details instantly.\n\nReal-time validation with immediate feedback and persistent storage.",
    image: "/image.png",
  },
  {
    id: 2,
    title: "Quest Integration",
    description:
      "Automatically scrape available course alternatives directly from Quest pages.\n\nSmart element recognition identifies sections, times, locations, and instructors.\n\nDynamic button injection adds 'Preview' buttons for instant swap evaluation.",
    image: "/image.png",
  },
  {
    id: 3,
    title: "Interactive Calendar",
    description:
      "Visual schedule display with instant conflict detection in red and compatible courses in green.\n\nPreview overlays show potential swaps overlaid on your existing schedule.\n\nDrag & drop reordering with responsive design for all screen sizes.",
    image: "/image.png",
  },
  {
    id: 4,
    title: "UW Flow Integration",
    description:
      "Real-time professor data with ratings and reviews from UW Flow's GraphQL API.\n\nComprehensive ratings showing 'Liked', 'Engaging', and 'Clarity' percentages.\n\nDirect UW Flow links and Google Maps integration for course locations.",
    image: "/image.png",
  },
  {
    id: 5,
    title: "Export & Sharing",
    description:
      "Generate .ics files for Google Calendar, Outlook, or any calendar app.\n\nCreate permanent, shareable quick links to your schedule.\n\nAdd friends' schedules to overlay and coordinate class selections.",
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
      <article className="flex flex-row items-center justify-center w-full mb-16 px-8">
        <Image
          src={feature.image}
          alt={feature.title}
          width={800}
          height={600}
          className="w-3/5 h-auto rounded-3xl"
        />
        <div className="flex flex-col w-2/5 px-8">
          <h3 className="text-3xl font-bold mb-4 text-text-primary">
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
      <article className="flex flex-row items-center justify-center w-full mb-16 px-8">
        <div className="flex flex-col w-2/5 px-8">
          <h3 className="text-3xl font-bold mb-4 text-text-primary">
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
          className="w-3/5 h-auto rounded-3xl"
        />
      </article>
    );
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <ThemeSwitcher />
      <header className="flex items-center justify-center gap-2 py-8 px-6 animate-fade-in">
        <div className="hover:scale-110 transition-transform duration-300 ease-spring">
          <Image
            src="/logo.svg"
            alt="UW Shuffle"
            width={40}
            height={40}
            className="w-10 h-10 rounded-3xl"
          />
        </div>
        <h1 className="text-4xl font-bold text-text-primary animate-fade-in-delayed">
          UW Shuffle
        </h1>
      </header>

      <main className="flex flex-col items-center px-6">
        <section className="flex flex-col items-center justify-center max-w-7xl mx-auto text-center py-16 animate-slide-up">
          <h2 className="text-8xl font-bold mb-6 text-text-primary animate-fade-in-delayed">
            The Chrome extension that revolutionizes class swapping on Quest
          </h2>
          <p className="text-3xl mb-8 text-text-secondary animate-fade-in-delayed-2">
            Transform the frustrating Quest experience into a smooth, visual,
            and collaborative class planning process. Make informed decisions
            about your course selections with instant conflict detection and
            professor insights.
          </p>

          <button
            type="button"
            className="px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-primary text-white hover:bg-primary-hover hover:scale-105 active:scale-95 flex items-center gap-2 animate-fade-in-delayed-3"
            aria-label="Install UW Shuffle Chrome extension"
          >
            <FaChrome className="text-xl" />
            Install Extension
          </button>
        </section>

        <video
          src="/2hours.mp4"
          autoPlay
          loop
          muted
          className="w-full rounded-3xl shadow-lg max-h-[60vh] py-16"
          aria-label="Demo video showing UW Shuffle in action"
        />

        <section className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full py-16 animate-fade-in">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`animate-slide-up hover:-translate-y-2 transition-transform duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </section>

        <section className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center bg-no-repeat bg-[url('/bg.png')] animate-fade-in">
          <h3 className="text-7xl font-bold mb-6 text-text-primary animate-slide-up-delayed">
            &ldquo;UWShuffle saved me hours of course planning!&rdquo;
          </h3>
          <p className="text-2xl mb-6 text-text-secondary animate-slide-up-delayed-2">
            Join thousands of UW students who have transformed their Quest
            experience with instant conflict detection and professor insights.
          </p>
          <Image
            src="/sidebar.png"
            alt="UW Shuffle sidebar interface"
            width={200}
            height={600}
            className="w-1/6 rounded-3xl"
          />
        </section>

        <section className="flex flex-col items-center justify-center w-full py-16 animate-slide-up">
          <p className="text-2xl mb-4 text-text-secondary animate-fade-in-delayed">
            Tired of Quest's frustrating class swapping experience?
          </p>
          <button
            type="button"
            className="px-8 py-4 rounded-full text-2xl font-semibold transition-all duration-300 bg-primary text-white hover:bg-primary-hover hover:scale-105 active:scale-95 flex items-center gap-3 animate-fade-in-delayed-2"
            aria-label="Install UW Shuffle Chrome extension"
          >
            <FaChrome className="text-2xl" />
            Install Extension
          </button>
        </section>
      </main>

      <footer className="py-12 animate-slide-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-start">
            <div className="flex flex-col animate-slide-in-left">
              <h4 className="text-2xl font-bold mb-4 text-text-primary">
                UW Shuffle
              </h4>
              <p className="text-lg text-text-secondary">
                The Chrome extension that revolutionizes class swapping on
                Quest.
              </p>
            </div>

            <div className="flex flex-col items-end animate-slide-in-right">
              <div className="flex space-x-6 mb-4">
                {[
                  {
                    icon: FaGithub,
                    label: "Visit UW Shuffle GitHub repository",
                  },
                  {
                    icon: FaDiscord,
                    label: "Join UW Shuffle Discord community",
                  },
                  { icon: FaTwitter, label: "Follow UW Shuffle on Twitter" },
                  {
                    icon: FaLinkedin,
                    label: "Connect with UW Shuffle on LinkedIn",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-3xl text-text-secondary hover:text-text-primary hover:scale-125 hover:-translate-y-1 active:scale-90 transition-all duration-300"
                    aria-label={social.label}
                    style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
              <p className="text-lg text-text-secondary animate-fade-in-delayed-3">
                &copy; 2024 UW Shuffle. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
