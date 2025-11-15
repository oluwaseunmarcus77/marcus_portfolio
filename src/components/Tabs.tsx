"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Optional: better performance

const tabs = ['Works', 'Resume', 'Certificates'];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Works');

  return (
    <div className="mt-6">
      {/* Tab Buttons */}
      <div className="flex gap-6 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 font-semibold transition-all duration-200 hover:text-white ${
              activeTab === tab
                ? 'text-white border-b-2 border-white'
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content with Slide Animation */}
      <div className="mt-6 relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full"
          >
            {/* === WORKS TAB === */}
            {activeTab === 'Works' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { src: "/desktop-ui.png", alt: "Desktop UI 1" },
                  { src: "/desktop-ui-4.png", alt: "Desktop UI 4" },
                  { src: "/desktop-ui-3.png", alt: "Desktop UI 3" },
                  { src: "/desktop-ui-2.png", alt: "Desktop UI 2" },
                  { src: "/ui-1.png", alt: "Mobile UI 1" },
                  { src: "/ui-2.png", alt: "Mobile UI 2" },
                  { src: "/ui-03.png", alt: "Mobile UI 3" },
                ].map((img, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-lg shadow-md mx-auto max-w-md"
                  >
                    {/* Using next/image for optimization */}
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-white/20 group-active:scale-95 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* === RESUME TAB === */}
            {activeTab === 'Resume' && (
              <div className="text-white space-y-4">
                <p>You can view or download my resume below:</p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Download Resume (PDF)
                </a>
              </div>
            )}

            {/* === CERTIFICATES TAB === */}
            {activeTab === 'Certificates' && (
              <div className="text-white space-y-6">
                <h3 className="text-xl font-bold">My Certifications</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <a
                      href="https://certificates.cs50.io/525b738d-9541-408e-99d0-ef0b0d317f26.pdf?size=letter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline font-medium"
                    >
                      CS50: Introduction to Computer Science
                    </a>
                    <span className="text-sm text-gray-400">Harvard University</span>
                  </li>
                  <li className="flex flex-col">
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-2adb7a7e-32a4-4bd1-babf-06efa3cbd1dd.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline font-medium"
                    >
                      Figma UI/UX Design Essentials
                    </a>
                    <span className="text-sm text-gray-400">Udemy</span>
                  </li>
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}