"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ['Works', 'Resume', 'Certificates'];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Works');

  return (
    <div className="mt-6">
      {/* Tab buttons */}
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

      {/* Tab content with slide animation */}
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
            {activeTab === 'Works' && (
              <div className="space-y-5 grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <img
                  src="/desktopUI.PNG"
                  alt="Project Screenshot"
                  className="rounded-lg shadow-md w-full max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 cursor-pointer"
                />
                <img
                  src="/desktopUI2.PNG"
                  alt="Project Screenshot"
                  className="rounded-lg shadow-md w-full max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 cursor-pointer"
                />
                <img
                  src="/desktopUI3.PNG"
                  alt="Project Screenshot"
                  className="rounded-lg shadow-md w-full max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 cursor-pointer"
                />
                <img
                  src="/desktopUI4.PNG"
                  alt="Project Screenshot"
                  className="rounded-lg shadow-md w-full max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 cursor-pointer"
                />
                <img
                  src="/UI1.PNG"
                  alt="Project Screenshot"
                  className="rounded-lg shadow-md w-full max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 cursor-pointer"
                />
                <img
                  src="/UI 2.PNG"
                  alt="Project Screenshot"
                  className="rounded-lg shadow-md w-full max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 cursor-pointer"
                />
                <img
                  src="/UI03.PNG"
                  alt="Project Screenshot"
                  className="rounded-lg shadow-md w-full max-w-md mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95 cursor-pointer"
                />

              </div>
              
            )}

            {activeTab === 'Designs' && (
              <>
                <p className="text-white"></p>
                <div className="space-y-5 grid grid-cols-1 md:grid-cols-2 md:gap-6">
                  <img
                    src="/UI1.PNG"
                    alt="Project Screenshot"
                    className="rounded-lg shadow-md w-full max-w-md mx-auto"
                  />
                  <img
                    src="/UI 2.PNG"
                    alt="Project Screenshot"
                    className="rounded-lg shadow-md w-full max-w-md mx-auto"
                  />
                  <img
                    src="/UI3.PNG"
                    alt="Project Screenshot"
                    className="rounded-lg shadow-md w-full max-w-md mx-auto"
                  />
                </div>
              </>
            )}

            {activeTab === 'Resume' && (
              <div className="text-white space-y-2">
                <p>You can view or download my resume below:</p>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-600"
                >
                  Open Resume
                </a>
              </div>
            )}

            {activeTab === 'Certificates' && (
              <div className="text-white space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a
                      href="https://certificates.cs50.io/525b738d-9541-408e-99d0-ef0b0d317f26.pdf?size=letter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      CS50 Introduction To Computer Science
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-2adb7a7e-32a4-4bd1-babf-06efa3cbd1dd.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Udemy Figma UI/UX Design
                    </a>
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
