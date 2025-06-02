"use client";

import { useEffect, useRef, useState } from "react";
import "./Timelines.css";

interface TimelineEvent {
  date: string;
  label: string;
  contentDate: string;
  content: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "10/04/2021",
    label: "2021",
    contentDate: "June 10th, 2021",
    content:
      "In 2021, I graduated from SMK Mandiri Bojonggede with a major in Office Administration, where there was no exposure to technology or programming at all. However, my curiosity and passion led me into the world of technology. Despite having no formal education in programming, I explored, learned independently, and honed my skills from scratch.",
  },
  {
    date: "01/01/2025",
    label: "2025",
    contentDate: "January 1st, 2025",
    content:
      "Finally, I decided to join Universitas Pamulang with a major in Informatics Engineering to continue developing my skills and knowledge in technology.Joining Universitas Pamulang for an Informatics Engineering program was a step toward mastering programming, software development, and problem-solving at a higher level.",
  },
];

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [fillingLineWidth, setFillingLineWidth] = useState(0);

  useEffect(() => {
  if (dotRefs.current.length === 0 || !timelineRef.current) return;

  const startEl = dotRefs.current[0];
  const selectedEl = dotRefs.current[selectedIndex];

  if (startEl && selectedEl) {
    const startLeft = startEl.offsetLeft + selectedEl.offsetWidth / -1;
    const endLeft =
      selectedEl.offsetLeft + selectedEl.offsetWidth / 100; // tweak offset di sini
    const width = endLeft - startLeft;
    setFillingLineWidth(width > 0 ? width : 0);
  }
}, [selectedIndex]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="body">
              <div className="cd-horizontal-timeline loaded">
                <div className="timeline" ref={timelineRef}>
                  <div
                    className="events-wrapper"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="events"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly", // Meratakan tanggal
                        width: "100%",
                      }}
                    >
                      <ol
                        style={{
                          position: "relative",
                          display: "flex",
                          width: "100%",
                        }}
                      >
                        {timelineEvents.map((event, index) => (
                          <li
                            key={event.date}
                            style={{
                              flex: 1,
                              textAlign: "center",
                              margin: "0 10px", // Memberikan jarak antar tanggal
                            }}
                          >
                            <a
                              href="#0"
                              ref={(el) => {
                                dotRefs.current[index] = el;
                              }}
                              data-date={event.date}
                              className={
                                index === selectedIndex
                                  ? "selected"
                                  : "older-event"
                              }
                              onClick={() => setSelectedIndex(index)}
                              style={{
                                display: "block",
                                paddingTop: "10px", // Menambahkan padding atas
                              }}
                            >
                              {event.label}
                            </a>
                          </li>
                        ))}
                      </ol>
                      <span
                        className="filling-line"
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          height: "2px",
                          background: "var(--txh1-color)",
                          top: "50%",
                          left: 0,
                          width: `${fillingLineWidth}px`,
                          transform: "translateY(-50%)",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="events-content" style={{ height: "210px" }}>
                  <ol>
                    {timelineEvents.map((event, index) => (
                      <li
                        key={event.date}
                        data-date={event.date}
                        className={index === selectedIndex ? "selected" : ""}
                      >
                        <h4>
                          <span className="font-bold">{event.label}</span> -{" "}
                          {event.contentDate}
                        </h4>
                        <hr />
                        <p>{event.content}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
