import React from "react";

export const metadata = {
  title: "Privacy Policy - UW Shuffle",
  description:
    "UW Shuffle Privacy Policy: we do not collect, store, or share any personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full relative bg-white pt-8">
      <main className="flex flex-col items-center px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32">
        <section className="w-full max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
            Privacy Policy
          </h1>
          <div className="uwshuffle-card p-6 sm:p-8">
            <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
              UW Shuffle does not collect, store, or share any personal data.
              The extension runs locally in your browser and no information is
              sent to our servers. We do not use analytics, trackers, or
              third‑party data collection services.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-text-secondary mt-4">
              If you have any questions, contact us at{" "}
              <a href="mailto:support@uwshuffle.com" className="underline">
                support@uwshuffle.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
