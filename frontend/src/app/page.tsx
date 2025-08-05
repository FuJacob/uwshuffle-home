import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaLinkedin,
  FaChrome,
  FaEnvelope,
} from "react-icons/fa";

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
      "Intelligently parse your Quest schedule with automatic course detection and real-time validation.",
    image: "/image.png",
  },
  {
    id: 2,
    title: "Quest Integration",
    description:
      "Automatically scrape available course alternatives directly from Quest pages with smart element recognition.",
    image: "/image.png",
  },
  {
    id: 3,
    title: "Interactive Calendar",
    description:
      "Visual schedule display with instant conflict detection and drag & drop reordering.",
    image: "/image.png",
  },
  {
    id: 4,
    title: "UW Flow Integration",
    description:
      "Real-time professor data with ratings and reviews from UW Flow's GraphQL API.",
    image: "/image.png",
  },
  {
    id: 5,
    title: "Export & Sharing",
    description:
      "Generate .ics files for Google Calendar, Outlook, or any calendar app with shareable links.",
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
      <article className="flex flex-row items-center justify-center w-full ">
        <Image
          src={feature.image}
          alt={feature.title}
          width={800}
          height={600}
          className="w-3/5 h-auto rounded-xl"
          style={{ borderRadius: "var(--radius-lg)" }}
        />
        <div className="flex flex-col w-2/5 px-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-5xl font-bold mb-4 text-text-primary">
            {feature.title}
          </h3>
          <p className="text-2xl text-text-secondary whitespace-pre-line">
            {feature.description}
          </p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="flex flex-row items-center justify-center w-full mb-16 p-8">
        <div className="flex flex-col w-2/5 px-8 hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-5xl font-bold mb-4 text-text-primary">
            {feature.title}
          </h3>
          <p className="text-2xl text-text-secondary whitespace-pre-line">
            {feature.description}
          </p>
        </div>
        <Image
          src={feature.image}
          alt={feature.title}
          width={800}
          height={600}
          className="w-3/5 h-auto rounded-xl"
          style={{ borderRadius: "var(--radius-lg)" }}
        />
      </article>
    );
  }
};

export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-white pt-8">
      {/* Cool Blue Glow Top */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, var(--color-primary) 100%)",
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />

      <nav className="uwshuffle-glass-card flex items-center justify-center px-6 py-4 animate-fade-in rounded-full w-fit mx-auto">
        <div className="flex items-center gap-3">
          <div className="hover:scale-110 transition-transform duration-300 ease-spring">
            <Image
              src="/logo.svg"
              alt="UW Shuffle"
              width={40}
              height={40}
              className="w-10 h-10 rounded-3xl"
            />
          </div>
          <h1 className="text-3xl font-bold text-text-primary animate-fade-in-delayed">
            UW Shuffle
          </h1>
        </div>
      </nav>

      <main className="flex flex-col items-center px-6 pt-56  ">
        <section className="flex flex-col items-center justify-center max-w-7xl mx-auto text-center animate-slide-up">
          <div className="flex flex-col items-center justify-center gap-6 mb-12 animate-fade-in-delayed">
            <p className="text-text-secondary text-4xl tracking-tight leading-none">
              Using{" "}
              <span className="font-display font-black tracking-wide">
                Quest
              </span>{" "}
              is like waiting in line for Tim&apos;s coffee at SLC.
            </p>
            <h2 className="text-9xl font-bold text-text-primary leading-none tracking-tight">
              UW <span>Shuffle</span> is you <br /> skipping the line.
            </h2>
          </div>
          <div className="flex flex-row items-center justify-between max-w-7xl w-full gap-10">
            <div className="flex justify-center flex-1">
              <span className="px-8 py-4 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full text-2xl font-semibold text-text-primary hover:bg-surface-hover/50 transition-colors shadow-lg animate-slide-in-left transform rotate-6 whitespace-nowrap">
                Plan with friends
              </span>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="uwshuffle-button-gradient-bg animate-fade-in-delayed">
                <button
                  type="button"
                  className="uwshuffle-button-primary text-4xl px-8 py-6"
                  aria-label="Add UW Shuffle to Chrome - it's free"
                >
                  <FaChrome className="text-2xl" />
                  Add to Chrome - it&apos;s free
                </button>
              </div>
              <span className="px-8 py-4 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full text-2xl font-semibold text-text-primary hover:bg-surface-hover/50 transition-colors shadow-lg animate-fade-in-delayed-2 whitespace-nowrap">
                Preview every swap
              </span>
            </div>

            <div className="flex justify-center flex-1">
              <span className="px-8 py-4 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full text-2xl font-semibold text-text-primary hover:bg-surface-hover/50 transition-colors shadow-lg animate-slide-in-right transform -rotate-6 whitespace-nowrap">
                Dodge bad profs
              </span>
            </div>
          </div>
        </section>

        <div className="px-36 relative z-10">
          <div className="w-full mx-auto my-12 overflow-hidden shadow-lg rounded-3xl">
            <video
              src="/uwshuffle-demo.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto block"
              aria-label="Demo video showing UW Shuffle in action"
            />
          </div>
        </div>
        <section className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full py-16 animate-fade-in">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </section>
        <div className="min-h-screen relative flex flex-col items-center justify-center w-screen  animate-fade-in">
          {/* Radial Gradient Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #fff 40%, var(--color-primary) 100%)",
            }}
          />

          <div className=" flex flex-col items-center justify-center p-12 mx-8 ">
            <h3 className="text-7xl font-bold mb-6 text-text-primary animate-slide-up-delayed">
              &ldquo;UWShuffle saved me hours of course planning!&rdquo;
            </h3>
            <p className="text-2xl mb-6 text-text-secondary animate-slide-up-delayed-2">
              Join thousands of UW students who have transformed their Quest
              experience with instant conflict detection and professor insights.
            </p>
            <div className="uwshuffle-card p-4 relative z-10">
              <Image
                src="/sidebar.png"
                alt="UW Shuffle sidebar interface"
                width={1000}
                height={1000}
                className="w-full max-w-lg"
                style={{ borderRadius: "var(--radius-md)" }}
              />
            </div>
          </div>
          <section className="flex flex-col items-center justify-center w-full py-16 animate-slide-up">
            <div className="flex flex-col items-center justify-center gap-6 mb-12 animate-fade-in-delayed text-center">
              <p className="text-text-secondary text-5xl tracking-tight leading-none">
                <span className="font-display font-black tracking-wide">
                  Quest
                </span>{" "}
                is the girl who left you
              </p>
              <h2 className="text-9xl font-bold text-black leading-none tracking-tighter">
                UW Shuffle is the <br />
                Bugatti that brings her back.
              </h2>
            </div>
            <div className="uwshuffle-button-gradient-bg animate-fade-in-delayed-2">
              <button
                type="button"
                className="uwshuffle-button-primary text-2xl px-8 py-4"
                aria-label="Add UW Shuffle to Chrome - it's free"
              >
                <FaChrome className="text-2xl" />
                Add to Chrome - it&apos;s free
              </button>
            </div>
          </section>
          <footer className="py-8 animate-slide-up max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center gap-6">
              <div className="uwshuffle-glass-card flex items-center gap-3 px-6 py-4 rounded-full">
                <Image
                  src="/logo.svg"
                  alt="UW Shuffle"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-2xl"
                />
                <h4 className="text-xl font-bold text-text-primary">
                  UW Shuffle
                </h4>
              </div>

              <div className="uwshuffle-glass-card flex items-center gap-4 px-6 py-4 rounded-full">
                <a
                  href="#"
                  className="uwshuffle-button-secondary text-xl p-2"
                  aria-label="Follow UW Shuffle on X (Twitter)"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="uwshuffle-button-secondary text-xl p-2"
                  aria-label="Contact UW Shuffle via Email"
                >
                  <FaEnvelope />
                </a>
                <p className="text-sm text-text-secondary">
                  &copy; 2024 UW Shuffle. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
