"use client";

import { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Lanyard from "./components/Lanyard/Lanyard";
import "@/app/globals.css";
import DecryptedText from "./components/DecryptText/DecryptText";
import TransitionOverlay from "./components/Overlay/Overlay";
import PixelTransition from "./components/PixelTransition/PixelTransition";
import Timeline from "./components/Timelines/Timelines";
import { motion } from "framer-motion";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import JourneySection from "./components/JourneySection";
import ContactMeCard from "./components/ContactSection/Contact";
import Toggle from "./components/toggle/toggle";
import Letter from "./components/LetterGlitch/LetterGlitch";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiAdobexd,
  SiFramer,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Home() {
  const typedOutputRef = useRef<HTMLSpanElement>(null);
  const scrollUpRef = useRef<HTMLButtonElement>(null);
  const scrollDownRef = useRef<HTMLButtonElement>(null);
  const modeImageRef = useRef<HTMLImageElement>(null);
  const hasStartedTyping = useRef(false);

  useEffect(() => {
    // AOS Polos
    AOS.init();

    // Scroll Up/Down
    scrollUpRef.current?.addEventListener("click", () => {
      window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
    });

    scrollDownRef.current?.addEventListener("click", () => {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });

    // Typing animation
    const textArray = ["Trio Ade Pamungkas ", "Teknik Informatika "];
    let arrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const el = typedOutputRef.current;
      if (!el) return;

      const currentText = textArray[arrayIndex];
      const minChars = currentText.startsWith("T") ? 1 : 0;

      el.textContent = isDeleting
        ? currentText.substring(0, Math.max(charIndex--, minChars))
        : currentText.substring(0, charIndex++);

      let delay = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        delay = 500;
        isDeleting = true;
      } else if (isDeleting && charIndex === minChars) {
        isDeleting = false;
        arrayIndex = (arrayIndex + 1) % textArray.length;
        delay = 200;
      }

      setTimeout(type, delay);
    };

    // Panggil langsung tanpa nunggu animationend
    if (!hasStartedTyping.current) {
      hasStartedTyping.current = true;
      setTimeout(type, 2000);
    }

    const heroContent = document.querySelector(".hero-content");
    if (heroContent && !hasStartedTyping.current) {
      heroContent.addEventListener("animationend", () => {
        if (!hasStartedTyping.current) {
          hasStartedTyping.current = true;
          setTimeout(type, 200);
        }
      });
    } else {
      setTimeout(() => {
        if (!hasStartedTyping.current) {
          hasStartedTyping.current = true;
          type();
        }
      }, 1000);
    }

    // Theme toggle
    const toggle = document.getElementById("mode-toggle");
    const profilePhoto = document.querySelector(".profile-photo img");

const handleToggle = () => {
  const isLight = document.body.classList.toggle("white-mode");

  if (modeImageRef.current) {
    modeImageRef.current.src = isLight ? "/1.png" : "/2.png";
  }

  if (profilePhoto) {
    (profilePhoto as HTMLImageElement).src = isLight 
      ? "/images/2.png"  
      : "/images/1.png"; 
  }
};


    toggle?.addEventListener("click", handleToggle);

    return () => toggle?.removeEventListener("click", handleToggle);
  }, []);

  return (
    <>
      <Head>
  <title>Portofolio</title>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="/style.css" />
<link rel="icon" href="/favicon.ico" type="image/x-icon" />

      </Head>

      <header>
        <div className="navbar">
          <div className="logo">
            <h2></h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#skills">Skills</Link>
              </li>
              <li>
                <Link href="/#portfolio">Progress</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
              <li>
                <a id="mode-toggle">
                  <Toggle />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="hero-content">
              <h3>Hello, It's Me</h3>
              <h1>
                <strong>
                  <span ref={typedOutputRef}>Trio Ade Pamungkas</span>_
                </strong>
              </h1>
              <h2 data-aos="fade-down" data-aos-duration="1500">
                And I am a Computer Science Student
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                " I am a web developer committed to creating engaging and
                functional online experiences. I believe that every website is a
                reflection of a brand, and I am passionate about helping brands
                grow through advanced web technologies"
              </p>
              <a href="/cv" className="btn">
                Look At My CV
              </a>
              <div className="social-icons">
                <a href="https://www.instagram.com/triioade/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/triioade">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="hero-lanyard">
              <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} fov={20} />
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-buttons">
        <button
          onClick={() =>
            window.scrollBy({ top: -window.innerHeight, behavior: "smooth" })
          }
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>

        <button
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>

      <section id="about" className="about-section py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Foto Profil */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="profile-photo">
                <motion.img
                  src="/images/2.png"
                  alt="Trio Ade Pamungkas"
                  initial={{ opacity: 0, x: -90 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: false }} // Mengatur agar animasi hanya terjadi sekali
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Card About Me + Timeline */}
            <div className="w-full md:w-2/3">
              <motion.div
                className="about-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                <h2 className="about-title">About Me</h2>
                <div className="about-text">
                  <DecryptedText
                    text="I am just an ordinary human who loves technology.."
                    speed={40}
                    sequential
                    revealDirection="start"
                    animateOn="view"
                    className="decrypted-text"
                    encryptedClassName="decrypted-text-encrypted"
                    parentClassName="decrypted-text-container"
                  />
                  <DecryptedText
                    text="私はテクノロジーが大好きな普通の人間です。私はテクノロジーが大好きな普通の人間です。"
                    speed={40}
                    sequential
                    revealDirection="start"
                    characters="私はテクノロジーが大好きな普通の人間です。私はテクノロジーが大好きな普通の人間です。"
                    animateOn="view"
                    className="decrypted-text2"
                    encryptedClassName="decrypted-text-encrypted2"
                    parentClassName="decrypted-text-container2"
                  />
                </div>

                {/* Timeline */}
                <div className="about-timeline">
                  <Timeline />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <ScrollVelocity
          texts={["Skills & Tools", "Keahlian & Peralatan"]}
          velocity={100}
          className="custom-scroll-text"
        />
        {/* coitainer skill */}
        <div className="containerSkills">
          {/* TT ui ux */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div>
              <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      background: "var(--card-bg)",
                      borderRadius: "1rem",
                      padding: "1rem",
                      boxSizing: "border-box",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        display: "grid",
                        color: "var(--card-title)",
                        marginBottom: "1rem",
                        textAlign: "center",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      UI/UX 🎨
                    </h2>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        alignContent: "center",
                        textAlign: "center",
                        display: "grid",
                        color: "var(--card-text)",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      "Designing user-friendly interfaces and intuitive
                      experiences."
                    </p>
                  </div>
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      padding: "1rem",
                      background: "var(--card-bg)",
                      borderRadius: "1rem",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        fontSize: "4rem",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        color: "var(--card-title)",
                      }}
                    >
                      <FaFigma />
                      <SiAdobexd />
                      <SiFramer />
                    </div>
                  </div>
                }
                gridSize={10}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </motion.div>

          {/* TT front end */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div>
              <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      background: "var(--card-bg)",

                      boxSizing: "border-box",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        display: "grid",
                        color: "var(--card-title)",
                        marginBottom: "1rem",
                        textAlign: "center",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Frontend 🧩
                    </h2>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        alignContent: "center",
                        textAlign: "center",
                        display: "grid",
                        color: "var(--card-text)",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      "Building interactive websites and responsive designs."
                    </p>
                  </div>
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      padding: "1rem",
                      background: "var(--card-bg)",
                      borderRadius: "1rem",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        fontSize: "4rem",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        color: "var(--card-title)",
                      }}
                    >
                      <FaHtml5 />
                      <FaCss3Alt />
                      <SiTypescript />
                      <FaReact />
                    </div>
                  </div>
                }
                gridSize={10}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </motion.div>

          {/* TT BAck end */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div>
              <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      background: "var(--card-bg)",
                      borderRadius: "1rem",
                      padding: "1rem",
                      boxSizing: "border-box",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        display: "grid",
                        color: "var(--card-title)",
                        marginBottom: "1rem",
                        textAlign: "center",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Backend 🛠️
                    </h2>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        alignContent: "center",
                        textAlign: "center",
                        display: "grid",
                        color: "var(--card-text)",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      "Creating APIs, server-side logic, and scalable systems."
                    </p>
                  </div>
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      padding: "1rem",
                      background: "var(--card-bg)",
                      borderRadius: "1rem",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        fontSize: "4rem",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        color: "var(--card-title)",
                      }}
                    >
                      <FaNodeJs />
                      <SiMongodb />
                      <FaPhp />
                      <FaLaravel />
                      <TbApi />
                    </div>
                  </div>
                }
                gridSize={10}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </motion.div>
          {/* TT DB */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div>
              <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      background: "var(--card-bg)",
                      fontFamily: "Roboto, sans-serif",
                      boxSizing: "border-box",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        display: "grid",
                        color: "var(--card-title)",
                        marginBottom: "1rem",
                        textAlign: "center",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Database 🗄️
                    </h2>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        alignContent: "center",
                        textAlign: "center",
                        display: "grid",
                        color: "var(--card-text)",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      "Managing and querying data efficiently and securely"
                    </p>
                  </div>
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      padding: "1rem",
                      background: "var(--card-bg)",
                      borderRadius: "1rem",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        fontSize: "4rem",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        color: "var(--card-title)",
                      }}
                    >
                      <SiMysql />
                      <SiPostgresql />
                      <SiMongodb />
                      <FaDatabase />
                    </div>
                  </div>
                }
                gridSize={10}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section porto */}

      <section id="portfolio">
        <JourneySection />
      </section>

      {/* Section contact */}
      <section id="contact">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <ContactMeCard />
        </motion.div>
      </section>
    </>
  );
}
