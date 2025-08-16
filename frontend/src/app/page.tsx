"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaChrome,
  FaUsers,
  FaEye,
  FaShieldAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { features } from "@/constants/features";
import { headlines } from "@/constants/headlines";
import { FeatureCard } from "@/components/FeatureCard";

export default function Home() {
  const [randomHeadline, setRandomHeadline] = useState(headlines[0]);

  useEffect(() => {
    setRandomHeadline(headlines[Math.floor(Math.random() * headlines.length)]);
  }, []);

  return (
    <div className="min-h-screen w-full relative bg-white pt-8">
      {/* Cool Blue Glow Top */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 70%, #fff 40%, var(--color-primary) 100%)",
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
          <a
            href="https://chromewebstore.google.com/detail/uw-shuffle-%E2%80%94-making-quest/ljigippjjlenfiofmbipieclkfcjfcop"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface flex items-center gap-1  text-text-primary  rounded-full text-base sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2"
            aria-label="Add UW Shuffle to Chrome - it's free"
          >
            <FaChrome className="text-base sm:text-lg" />
            Add to Chrome
          </a>
        </div>
      </nav>

      <main className="flex flex-col items-center px-4 sm:px-6 pt-32 sm:pt-40 lg:pt-56">
        <section className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center animate-slide-up px-4">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in-delayed text-center w-full">
            <p className="text-text-secondary text-lg sm:text-xl lg:text-2xl xl:text-3xl tracking-tight leading-tight px-2 sm:px-4 max-w-4xl">
              {randomHeadline.subtext}
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-text-primary leading-none tracking-tighter sm:px-4">
              {randomHeadline.headline}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-6 lg:gap-10 px-4">
            <div className="flex justify-center flex-1 order-2 lg:order-1">
              <span className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary hover:bg-surface-hover/50 transition-colors shadow-lg animate-slide-in-left transform rotate-3 lg:rotate-6 whitespace-nowrap flex items-center gap-2">
                <FaUsers className="text-lg sm:text-xl lg:text-2xl" />
                Plan with friends
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 sm:gap-6 order-1 lg:order-2">
              <div className="uwshuffle-button-gradient-bg animate-fade-in-delayed">
                <a
                  href="https://chromewebstore.google.com/detail/uw-shuffle-%E2%80%94-making-quest/ljigippjjlenfiofmbipieclkfcjfcop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uwshuffle-button-primary text-2xl sm:text-3xl lg:text-4xl px-6 sm:px-8 py-4 sm:py-6"
                  aria-label="Add UW Shuffle to Chrome - it's free"
                >
                  <FaChrome className="text-xl sm:text-2xl" />
                  Add to Chrome - it&apos;s free
                </a>
              </div>
              <span className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary hover:bg-surface-hover/50 transition-colors shadow-lg animate-fade-in-delayed-2 whitespace-nowrap flex items-center gap-2">
                <FaEye className="text-lg sm:text-xl lg:text-2xl" />
                Preview every swap
              </span>
            </div>

            <div className="flex justify-center flex-1 order-3">
              <span className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-surface/50 backdrop-blur-md border border-border/50 rounded-full text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary hover:bg-surface-hover/50 transition-colors shadow-lg animate-slide-in-right transform -rotate-3 lg:-rotate-6 flex items-center gap-2">
                <FaShieldAlt className="text-lg sm:text-xl lg:text-2xl" />
                Dodge bad profs
              </span>
            </div>
          </div>
        </section>

        <div className="w-screen px-0 sm:px-0 lg:p-24 sm:py-24 h-auto lg:h-screen relative z-10">
          <div className="w-full aspect-video lg:aspect-auto lg:h-full rounded-3xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/TtSnpr8bm3E?si=Q-2JFKtsPLgIgKaG&start=66&autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&disablekb=1&fs=0&loop=1&playlist=TtSnpr8bm3E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <section className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full py-8 sm:py-16 animate-fade-in">
          <h2 className="text-center text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-text-primary leading-none tracking-tighter">
            Umm... How do I use it?
          </h2>
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
              &ldquo;UW Shuffle made using Quest so much faster!&rdquo;
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-text-secondary animate-slide-up-delayed-2 text-center px-4">
              Join thousands of University of Waterloo students who hate Quest.
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
              <a
                href="https://chromewebstore.google.com/detail/uw-shuffle-%E2%80%94-making-quest/ljigippjjlenfiofmbipieclkfcjfcop"
                target="_blank"
                rel="noopener noreferrer"
                className="uwshuffle-button-primary text-xl sm:text-2xl px-6 sm:px-8 py-3 sm:py-4"
                aria-label="Add UW Shuffle to Chrome - it's free"
              >
                <FaChrome className="text-xl sm:text-2xl" />
                Add to Chrome - it&apos;s free
              </a>
            </div>
          </section>
          <footer className="py-6 sm:py-8 animate-slide-up max-w-7xl mx-auto px-4 sm:px-6 w-full">
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

              <div className="flex items-center gap-4">
                <p className="text-xs sm:text-sm text-text-secondary">
                  &copy; {new Date().getFullYear()} UW Shuffle. All rights
                  reserved.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/fujacob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-text-primary hover:bg-gray-100 transition-colors shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-sm" />
                  </a>
                  <a
                    href="https://x.com/fujacobb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-text-primary hover:bg-gray-100 transition-colors shadow-sm"
                    aria-label="X (Twitter)"
                  >
                    <strong>𝕏</strong>
                  </a>
                  <a
                    href="https://github.com/fujacob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-text-primary hover:bg-gray-100 transition-colors shadow-sm"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
