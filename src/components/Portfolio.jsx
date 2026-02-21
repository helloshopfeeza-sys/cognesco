import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Jeseey Manpower",
    tag: "Corporate Portal",
    location: "Sri Lanka",
    year: "2025",
    desc: "A high-performance corporate platform engineered for a premier foreign employment agency in Sri Lanka. We designed a deeply trust-building interface that simplifies complex international candidate processing. The architecture ensures airtight security and lightning-fast load times across global networks, facilitating seamless cross-border recruitment.",
    bg: "#0f1115",
    link: "https://www.jeseeymanpower.com/",
  },
  {
    title: "BeMuslim",
    tag: "Islamic App",
    location: "Global",
    year: "2026",
    desc: "A comprehensive daily companion application. We faced the rigorous UI/UX challenge of presenting dense liturgical data—prayer times, dynamic Qibla tracking, and Quranic text—within a serene, distraction-free native interface. The app is engineered for offline reliability and hyper-fast interactions, serving users globally.",
    bg: "#141414",
    link: "https://play.google.com/store/apps/details?id=com.firstapp.qadr",
  },
  {
    title: "WeStudy Academy",
    tag: "English Academy",
    location: "Sri Lanka",
    year: "2026",
    desc: "A comprehensive digital presence for a leading English language academy in Sri Lanka. We designed an engaging, conversion-optimized platform that streamlines student enrollment and course discovery. The site balances professional authority with an approachable, student-centric design system.",
    bg: "#1a1816",
  },
  {
    title: "Biggest Gym",
    tag: "Fitness Center",
    location: "Sri Lanka",
    year: "2026",
    desc: "A high-energy, brutalist web platform for Sri Lanka’s premier fitness facility. The design relies on high-contrast typography and dynamic layouts to convey strength and momentum. It features integrated class schedules, membership portals, and immersive facility showcases.",
    bg: "#0a0a0b",
  },
];

export default function Portfolio() {
  const containerRef = useRef(null);

  useEffect(() => {
    // We keep intersection observer to fade the whole section in initially
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    requestAnimationFrame(() => {
      document.querySelectorAll(".sr-port").forEach((el) => {
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio" id="work" ref={containerRef}>
      <div className="wrap">
        <div className="services-header sr-port">
          <div>
            <div className="section-tag">Selected Work</div>
            <h2 className="section-heading">Projects we stand behind.</h2>
          </div>
          <p className="section-desc">
            A few recent builds that represent how we think and what we deliver.
          </p>
        </div>
      </div>

      <div className="wrap padding-remove-mobile">
        <div className="sticky-cards-container">
          {projects.map((p, i) => {
            // Calculate dynamic top offset so cards stack visibly
            const topOffset = `calc(12vh + ${i * 40}px)`;

            return (
              <div
                key={i}
                className="sticky-card"
                style={{
                  top: topOffset,
                  zIndex: i,
                  backgroundColor: p.bg,
                }}
              >
                <div className="card-inner text-only">
                  <div className="card-content">
                    <div className="card-meta">
                      <span className="card-tag">{p.tag}</span>
                      <span className="card-meta-dot">•</span>
                      <span className="card-location">{p.location}</span>
                      <span className="card-meta-dot">•</span>
                      <span className="card-year">{p.year}</span>
                    </div>
                    <h3 className="card-title text-only-title">{p.title}</h3>
                    <p className="card-desc text-only-desc">{p.desc}</p>
                    <div className="card-actions">
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-btn"
                          style={{
                            textDecoration: "none",
                            display: "inline-block",
                          }}
                        >
                          View Live Project
                        </a>
                      ) : (
                        <button className="card-btn">View Case Study</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
