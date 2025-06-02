"use client";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./ContactCard.module.css";

export default function ContactCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "6281381118256"; // Ganti dengan nomor WA kamu

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, my name is ${name}%0AEmail: ${email}%0A${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <h2 className={styles.titleSection}>Let's Connect!</h2>

      <div className={styles.container}>
        {/* Kiri */}
        <div className={styles.leftSide}>
          <h3 className={styles.leftTitle}>Contact Infos</h3>
          <p className={styles.infoItem}>
            <FaMapMarkerAlt /> Sukahati, Cibinong, Bogor, Indonesia
          </p>
          <p className={styles.infoItem}>
            <FaEnvelope /> trioade29@gmail.com
          </p>
          <a
            href="https://wa.me/6281381118256"
            className={styles.infoItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> +6281381118256
          </a>

          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/triioade/">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/TriioAde/?locale=id_ID">
              <FaFacebook className={styles.icon} />
            </a>{" "}
            <FaLinkedin className={styles.icon} />
          </div>
        </div>

        {/* Kanan */}
        <div className={styles.rightSide}>
          <h3 className={styles.rightTitle}>Get in Touch</h3>
          <p className={styles.rightDesc}>Feel free to drop us a line below!</p>
          <form onSubmit={handleSend} className={styles.form}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <textarea
              placeholder="Type your message here..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
