import Image from "next/image";
import { FiHeart, FiDownload, FiExternalLink } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f4ff] font-lexend flex flex-col">
      {/* Navbar */}
      <nav className="px-6 py-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl flex items-center justify-center shadow-lg">
              <Image
                src="/uwshuffle-logo.svg"
                alt="UWShuffle Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0f172a]">UWShuffle</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-[#475569] hover:text-[#0f172a] transition-colors flex items-center gap-1"
            >
              Created by a goose
              <FiExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 md:px-8 lg:px-12 flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Big Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-4">
            Quest Class Schedule Helper
          </h1>
          <p className="text-lg text-[#475569] mb-6 max-w-2xl mx-auto">
            Preview class conflicts when swapping courses in the University of
            Waterloo Quest portal
          </p>

          {/* Video Instructions */}
          <div className="mb-6">
            <iframe
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl uwshuffle-instructions-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VkiwIn8Dcaw?si=40WtIsuVn1EgUHlA&amp;controls=0&autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Two Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-3 rounded-full font-semibold text-base transition-colors shadow-lg flex items-center gap-2">
              <FiHeart className="w-4 h-4" />
              Support Us
            </button>
            <button className="bg-white border-2 border-[#c7d2fe] hover:border-[#6366f1] text-[#0f172a] px-6 py-3 rounded-full font-semibold text-base transition-colors flex items-center gap-2">
              <FiDownload className="w-4 h-4" />
              Install Extension
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e1e8ff] mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-4 md:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-[#475569]">
              © 2024 UWShuffle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
