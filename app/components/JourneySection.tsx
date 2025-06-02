"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JourneySection() {
  const [activeTab, setActiveTab] = useState<"journey" | "project" | "cert">(
    "journey"
  );
  const [selectedCert, setSelectedCert] = useState<"dqlab" | "dicoding" | null>(
    "dqlab"
  );

  return (
    <section id="journey">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "var(--card-new-title)",
            marginBottom: "1rem",
          }}
        >
          📚 My Progress
        </h2>

        {/* Tab Menu */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setActiveTab("journey")}
            style={tabButtonStyle(activeTab === "journey")}
          >
            My Journey
          </button>
          <button
            onClick={() => setActiveTab("project")}
            style={tabButtonStyle(activeTab === "project")}
          >
            Project
          </button>
          <button
            onClick={() => setActiveTab("cert")}
            style={tabButtonStyle(activeTab === "cert")}
          >
            Sertifikat
          </button>
        </div>
      </motion.div>

      {/* Content */}
 <motion.div
     initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "grid",
            gap: "1rem",
          }}
        >
          <AnimatePresence mode="wait">
            {activeTab === "journey" && (
              <motion.div
                key="journey"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ display: "grid", gap: "1.5rem" }} // ⬅️ Ini kuncinya!
              >
                <div style={cardStyle}>
                  <h3 style={cardTitle}>🌱 Januari 2025</h3>
                  <p style={cardText}>
                    Mulai belajar HTML, CSS, dan bikin halaman statis.
                  </p>
                </div>
                <div style={cardStyle}>
                  <h3 style={cardTitle}>⚛️ Maret 2025</h3>
                  <p style={cardText}>
                    Belajar Next.js dan migrasi website ke framework modern.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "project" && (
              <motion.div
                key="project"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={cardStyle}>
                  <h3 style={cardTitle}>🌐 Portfolio Website</h3>
                  <p style={cardText}>
                    Website ini adalah project pertama saya. Dibuat dengan
                    Next.js, TypeScript, dan AOS animation.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "cert" && (
              <motion.div
                key="cert"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={cardStyle}>
                  <h3 style={cardTitle}>📜 Sertifikat</h3>
                  <p style={cardText}>
                    Berikut adalah sertifikat yang saya miliki dari pembelajaran
                    online.
                  </p>

                  {/* Selector Sertifikat */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1rem",
                      margin: "1.5rem 0",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      onClick={() => setSelectedCert("dqlab")}
                      style={tabButtonStyle(selectedCert === "dqlab")}
                    >
                      Sertifikat DQLab
                    </button>
                    <button
                      onClick={() => setSelectedCert("dicoding")}
                      style={tabButtonStyle(selectedCert === "dicoding")}
                    >
                      Sertifikat Dicoding
                    </button>
                  </div>

                  {/* Preview Sertifikat */}
                  <AnimatePresence mode="wait">
                    {selectedCert === "dqlab" && (
                      <motion.div
                        key="dqlab"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src="/images/SertifikatDQLAB_page-0001.jpg"
                          alt="Sertifikat DQLab"
                          style={imgStyle}
                        />
                      </motion.div>
                    )}
                    {selectedCert === "dicoding" && (
                      <motion.div
                        key="dicoding"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src="/images/SertifikatDicoding.jpg"
                          alt="Sertifikat Dicoding"
                          style={imgStyle}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

// Style Helpers
const tabButtonStyle = (active: boolean): React.CSSProperties => ({
  padding: "0.6rem 1.2rem",
  borderRadius: "0.5rem",
  border: "none",
  background: active ? "var(--card-new-btn-bg)" : "var(--card-new-bg)",
  color: active ? "var(--card-new-btn-text)" : "var(--card-new-title)",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s ease, color 0.3s ease",
});

const cardStyle: React.CSSProperties = {
  background: "var(--card-new-bg)",
  padding: "1rem",
  borderRadius: "1rem",
  boxSizing: "border-box",
  border: "1px solid var(--card-new-border)",
};

const cardTitle: React.CSSProperties = {
  marginBottom: "0.5rem",
  color: "var(--card-new-title)",
};

const cardText: React.CSSProperties = {
  color: "var(--card-new-text)",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "400px",
  borderRadius: "0.5rem",
  border: "1px solid var(--card-new-border)",
  marginTop: "1rem",
};
