"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./cv.module.css";
import TrueFocus from "../components/TrueFocus/TrueFocus";
import Letter from "../components/LetterGlitch/LetterGlitch";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  LogOut,
  Brain,
  House,
  UserRoundSearch,
  ChartNoAxesCombined,
  MailPlus,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const detailRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: detailRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <>
      {/* Wrapper utama */}
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>
            <TrueFocus
              sentence="Selamat Datang"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={1}
              pauseBetweenAnimations={1}
            />
          </h1>

          <div className={styles.Dropdowncard}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className={styles.dropdownTrigger}>
                  Klik di sini untuk melihat Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={styles.dropdownContent}>
                <DropdownMenuLabel className={styles.dropdownLabel}>
                  Portofolio
                </DropdownMenuLabel>
                <DropdownMenuSeparator className={styles.dropdownSeparator} />
                <DropdownMenuGroup>
                  <DropdownMenuItem className={styles.dropdownItem}>
                    <House />
                    <Link href="/" className={styles.dropdownLink}>
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className={styles.dropdownItem}>
                    <UserRoundSearch />
                    <Link href="/#about" className={styles.dropdownLink}>
                      About
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className={styles.dropdownItem}>
                    <Brain />
                    <Link href="/#skills" className={styles.dropdownLink}>
                      Skills
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className={styles.dropdownItem}>
                    <ChartNoAxesCombined />
                    <Link href="/#portfolio" className={styles.dropdownLink}>
                      Progress
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className={styles.dropdownItem}>
                    <MailPlus />
                    <Link href="/#contact" className={styles.dropdownLink}>
                      Contact
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className={styles.dropdownSeparator} />
                <DropdownMenuItem className={styles.dropdownItem}>
                  <LogOut />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className={styles.background}>
          <Letter
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
      </div>
      {/* Section identitas */}

      <section ref={sectionRef} className={styles.identitySection}>
        <div className={styles.identityCard}>
          <div className={styles.leftContent}>
            <img src="/images/1.png" alt="Trio Ade Pamungkas" />
            <h2 className={styles.name}>Trio Ade Pamungkas</h2>
          </div>
          <div ref={detailRef} className={styles.rightContent}>
            <h3 className={styles.title}>Detail Identitas</h3>
            <ul className={styles.details}>
              <li>
                <strong>Nama:</strong> Trio Ade Pamungkas
              </li>
              <li>
                <strong>Usia:</strong> 25 Tahun
              </li>
              <li>
                <strong>Alamat:</strong> Cibinong, Jawa Barat
              </li>
              <li>
                <strong>Email:</strong> trio@example.com
              </li>
              <li>
                <strong>No HP:</strong> +62 812-3456-7890
              </li>
              <li>
                <strong>Status:</strong> Software Engineer
              </li>
              <li>
                <strong>Jenis Kelamin:</strong> Laki-laki
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section Pendidikan */}
      <section className={styles.educationSection}>
        <div className={styles.educationSD}></div>
        <div className={styles.educationSMP}></div>
        <div className={styles.educationSMK}></div>
        <div className={styles.educationKLH}>
          <div className={styles.educationContent}>
                          <li>
                <strong>Nama:</strong> Trio Ade Pamungkas
              </li>
              <li>
                <strong>Usia:</strong> 25 Tahun
              </li>
              <li>
                <strong>Alamat:</strong> Cibinong, Jawa Barat
              </li>
              <li>
                <strong>Email:</strong> trio@example.com
              </li>
              <li>
                <strong>No HP:</strong> +62 812-3456-7890
              </li>
              <li>
                <strong>Status:</strong> Software Engineer
              </li>
              <li>
                <strong>Jenis Kelamin:</strong> Laki-laki
              </li>
          </div>
        </div>
      </section>
      {/* Section Pengalaman Kerja */}
      <section className={styles.experienceSection}>
        <div className={styles.experienceContent}>
          <h2 className={styles.experienceTitle}>Pengalaman Kerja</h2>
          <p className={styles.experienceText}>
            Perusahaan: PT. Teknologi Canggih
            <br />
            Posisi: Software Engineer
          </p>
        </div>
      </section>
    </>
  );
}
