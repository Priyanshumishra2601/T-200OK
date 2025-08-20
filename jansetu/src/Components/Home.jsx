"use client";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 w-full">
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 w-full flex justify-between items-center 
        px-8 py-4 z-50 bg-white shadow-lg"
      >
        {/* LOGO */}
        <div className="text-3xl font-bold tracking-wide text-green-700 flex items-center">
          🇮🇳 JanSetu
        </div>

        {/* NAVIGATION */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static 
          top-16 right-4 bg-white md:bg-transparent 
          shadow-lg md:shadow-none rounded-lg md:rounded-none 
          px-6 py-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}
        >
          <a
            href="#about"
            className="hover:text-green-500 font-semibold transition"
          >
            About
          </a>
          <a
            href="#features"
            className="hover:text-green-500 font-semibold transition"
          >
            Features
          </a>
          <a
            href="#complaints"
            className="hover:text-green-500 font-semibold transition"
          >
            Complaints
          </a>
          <a
            href="#contact"
            className="hover:text-green-500 font-semibold transition"
          >
            Contact
          </a>
        </nav>

        {/* MOBILE TOGGLE */}
        <div
          className="md:hidden text-3xl cursor-pointer text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 w-full bg-gradient-to-r from-green-200 to-green-100">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-snug"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          “A Strong Nation Begins with <br />
          <span className="text-green-600">Active Citizens</span>”
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-700"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Join hands with{" "}
          <span className="font-bold text-green-600">JanSetu</span> – Empowering
          citizens, strengthening governance.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#register"
            className="px-8 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition"
          >
            🚨 Report an Issue
          </a>
          <a
            href="#complaints"
            className="px-8 py-3 border-2 border-green-600 text-green-600 bg-white font-bold rounded-full hover:bg-green-600 hover:text-white hover:scale-105 transition"
          >
            📜 View Complaints
          </a>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-8 py-20 bg-gray-50 w-full" id="features">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-green-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🌟 Platform Highlights
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { num: "✔️ 230+", text: "Issues Resolved" },
            { num: "👤 800+", text: "Active Citizens" },
            { num: "⚠️ 120", text: "Pending Issues" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              <span className="block text-3xl mb-3">{item.num}</span>
              <p className="font-semibold text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="px-8 py-20 bg-gray-100 w-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-green-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          📌 How JanSetu Works
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            "Citizen reports an issue with proof",
            "Authorities get notified instantly",
            "Live tracking ensures transparency",
            "Resolution updates sent to the citizen",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-medium text-lg text-gray-700">👉 {step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-8 py-20 bg-white text-center w-full">
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-green-600"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Be the Change You Wish to See 🚀
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8 text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Every complaint matters. Together, we can make our society stronger,
          cleaner, and safer for the next generation.
        </motion.p>
        <motion.a
          href="#register"
          className="px-10 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:scale-110 hover:bg-green-700 transition inline-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          ✍️ Start Reporting Today
        </motion.a>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-green-700 text-white px-8 py-12 w-full"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">JanSetu</h3>
            <p className="text-sm">
              A civic-tech initiative to empower citizens and build transparent
              governance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#complaints" className="hover:underline">
                  Complaints
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-sm">📍 New Delhi, India</p>
            <p className="text-sm">✉️ support@jansetu.org</p>
          </div>
        </div>
        <p className="text-center text-xs mt-8 text-green-200">
          © {new Date().getFullYear()} JanSetu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
