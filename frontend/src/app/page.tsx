import React from "react";
import Image from "next/image";
import { FaTwitter, FaChrome, FaEnvelope } from "react-icons/fa";

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
      <article className="flex flex-col lg:flex-row items-center justify-center w-full mb-8 sm:mb-16 p-4 sm:p-8 gap-6 lg:gap-0">
        <Image
          src={feature.image}
          alt={feature.title}
          width={800}
          height={600}
          className="w-full lg:w-3/5 h-auto rounded-xl order-1 lg:order-none"
          style={{ borderRadius: "var(--radius-lg)" }}
        />
        <div className="flex flex-col w-full lg:w-2/5 px-4 lg:px-8 text-center lg:text-left hover:-translate-y-2 transition-transform duration-300 order-2 lg:order-none">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
            {feature.title}
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary whitespace-pre-line">
            {feature.description}
          </p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="flex flex-col lg:flex-row items-center justify-center w-full mb-8 sm:mb-16 p-4 sm:p-8 gap-6 lg:gap-0">
        <div className="flex flex-col w-full lg:w-2/5 px-4 lg:px-8 text-center lg:text-left hover:-translate-y-2 transition-transform duration-300 order-2 lg:order-1">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
            {feature.title}
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary whitespace-pre-line">
            {feature.description}
          </p>
        </div>
        <Image
          src={feature.image}
          alt={feature.title}
          width={800}
          height={600}
          className="w-full lg:w-3/5 h-auto rounded-xl order-1 lg:order-2"
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

      <nav className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 animate-fade-in max-w-7xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hover:scale-110 transition-transform duration-300 ease-spring">
            <Image
              src="/logo.svg"
              alt="UW Shuffle"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-3xl"
            />
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary animate-fade-in-delayed">
            UW Shuffle
          </h1>
        </div>
        <div className="uwshuffle-button-gradient-bg animate-fade-in-delayed">
          <button
            type="button"
            className="bg-surface flex items-center gap-1  text-text-primary  rounded-full text-base sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2"
            aria-label="Add UW Shuffle to Chrome - it's free"
          >
            <FaChrome className="text-base sm:text-lg" />
            Add to Chrome
          </button>
        </div>
      </nav>

      <main className="flex flex-col items-center px-4 sm:px-6 pt-32 sm:pt-40 lg:pt-56">
        <section className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center animate-slide-up px-4">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in-delayed text-center w-full">
            <p className="text-text-secondary text-lg sm:text-xl lg:text-2xl xl:text-3xl tracking-tight leading-tight px-2 sm:px-4 max-w-4xl">
              Using{" "}
              <span className="font-display font-black tracking-wide">
                Quest
              </span>{" "}
              is like waiting in line for Tim&apos;s coffee at SLC.
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-text-primary leading-none tracking-tighter px-2 sm:px-4">
              UW <span>Shuffle</span> is you <br /> skipping the line.
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-6 lg:gap-10 px-4">
            <div className="flex justify-center flex-1 order-2 lg:order-1">
              <span className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary hover:bg-surface-hover/50 transition-colors shadow-lg animate-slide-in-left transform rotate-3 lg:rotate-6 whitespace-nowrap">
                Plan with friends
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 sm:gap-6 order-1 lg:order-2">
              <div className="uwshuffle-button-gradient-bg animate-fade-in-delayed">
                <button
                  type="button"
                  className="uwshuffle-button-primary text-2xl sm:text-3xl lg:text-4xl px-6 sm:px-8 py-4 sm:py-6"
                  aria-label="Add UW Shuffle to Chrome - it's free"
                >
                  <FaChrome className="text-xl sm:text-2xl" />
                  Add to Chrome - it&apos;s free
                </button>
              </div>
              <span className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary hover:bg-surface-hover/50 transition-colors shadow-lg animate-fade-in-delayed-2 whitespace-nowrap">
                Preview every swap
              </span>
            </div>

            <div className="flex justify-center flex-1 order-3">
              <span className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary hover:bg-surface-hover/50 transition-colors shadow-lg animate-slide-in-right transform -rotate-3 lg:-rotate-6">
                Dodge bad profs
              </span>
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-8 lg:px-36 relative z-10">
          <div className="w-full mx-auto my-8 sm:my-12 overflow-hidden shadow-lg rounded-2xl lg:rounded-3xl">
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
        <section className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full py-8 sm:py-16 animate-fade-in px-4">
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
        <div className="min-h-screen relative flex flex-col items-center justify-center w-screen animate-fade-in">
          {/* Radial Gradient Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #fff 40%, var(--color-primary) 100%)",
            }}
          />

          <div className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 mx-4 sm:mx-8">
            <h3 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-text-primary animate-slide-up-delayed text-center px-4">
              &ldquo;UWShuffle saved me hours of course planning!&rdquo;
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-text-secondary animate-slide-up-delayed-2 text-center px-4">
              Join thousands of UW students who have transformed their Quest
              experience with instant conflict detection and professor insights.
            </p>
            <div className="uwshuffle-card p-2 sm:p-4 relative z-10">
              <Image
                src="/sidebar.png"
                alt="UW Shuffle sidebar interface"
                width={1000}
                height={1000}
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
                style={{ borderRadius: "var(--radius-md)" }}
              />
            </div>
          </div>
          <section className="flex flex-col items-center justify-center w-full py-8 sm:py-12 lg:py-16 animate-slide-up px-4">
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in-delayed text-center">
              <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-black leading-none tracking-tighter px-4">
                It&apos;s time to stop getting <br />
                trauma from Quest.
              </h2>
            </div>
            <div className="uwshuffle-button-gradient-bg animate-fade-in-delayed-2">
              <button
                type="button"
                className="uwshuffle-button-primary text-xl sm:text-2xl px-6 sm:px-8 py-3 sm:py-4"
                aria-label="Add UW Shuffle to Chrome - it's free"
              >
                <FaChrome className="text-xl sm:text-2xl" />
                Add to Chrome - it&apos;s free
              </button>
            </div>
          </section>
          <footer className="py-6 sm:py-8 animate-slide-up max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src="/logo.svg"
                  alt="UW Shuffle"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-2xl"
                />
                <h4 className="text-lg sm:text-xl font-bold text-text-primary">
                  UW Shuffle
                </h4>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="#"
                  className="uwshuffle-button-secondary text-lg sm:text-xl p-2"
                  aria-label="Follow UW Shuffle on X (Twitter)"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="uwshuffle-button-secondary text-lg sm:text-xl p-2"
                  aria-label="Contact UW Shuffle via Email"
                >
                  <FaEnvelope />
                </a>
                <p className="text-xs sm:text-sm text-text-secondary">
                  &copy; {new Date().getFullYear()} UW Shuffle. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
