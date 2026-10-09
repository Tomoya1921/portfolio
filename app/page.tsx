import Link from "next/link";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";

const projects = [
  {
    number: "01",
    title: "AI問い合わせ対応自動化",
    englishTitle: "AI Email Automation",
    href: "/projects/ai-email-automation",
    description:
      "問い合わせメールの取得から返信案の生成、下書き保存までを自動化した問い合わせ対応支援システムです。",
    technologies: ["Gmail API", "OpenAI API", "TypeScript"],
  },
  {
    number: "02",
    title: "ReplyPilot AI",
    englishTitle: "Web Marketing Case Study",
    href: "/projects/replypilot-ai#top",
    description:
      "中小企業向けAI問い合わせ対応サービスを想定した、Webマーケティングの自主制作ケーススタディです。",
    technologies: ["Web Marketing", "LP", "Analytics"],
  },
  {
    number: "03",
    title: "ポートフォリオサイト",
    englishTitle: "Portfolio Website",
    description:
      "生成AIを開発補助として活用しながら制作している、現在ご覧のポートフォリオサイトです。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const videoWorks = [
  {
    id: "bros",
    title: "BROS EFFECT",
    description: "制作した映像作品「BROS EFFECT」です。",
    src: "/video_motion/bros.mp4",
    width: 1920,
    height: 1080,
  },
  {
    id: "willbe",
    title: "Willbe",
    description: "制作した映像作品「Willbe」です。",
    src: "/video_motion/willbe.mp4",
    width: 960,
    height: 540,
  },
];

const skillGroups = [
  {
    title: "Web / Development",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI / Automation",
    skills: ["OpenAI API", "Gmail API", "AI / Codex"],
  },
  {
    title: "Tools / Platform",
    skills: ["Git", "GitHub", "Supabase", "Vercel"],
  },
  {
    title: "Creative",
    skills: ["Premiere Pro", "After Effects", "DTM"],
  },
];

const backgrounds = [
  { title: "海外生活", detail: "3年間" },
  { title: "接客", detail: "カフェ・バリスタ経験" },
  { title: "一次産業", detail: "農業経験" },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M7 5H5v10h10v-2M10 5h5v5M9 11l6-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SectionHeading({
  id,
  label,
  title,
  lead,
}: {
  id: string;
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>

      <SiteHeader isHome />

      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Portfolio / 2026</p>
              <h1 id="hero-title">
                TOMOYA
                <br />
                NAKAMURA<span className="accent">.</span>
              </h1>
              <p className="hero-role">Web × AI × Creative</p>
              <p className="hero-description">
                WebとAIを掛け合わせて、業務やコミュニケーションをより良くする仕組みを学び、業務改善やデジタル制作につながる自主制作に取り組んでいます。
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  制作物を見る <ArrowIcon />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ExternalIcon />
                </a>
              </div>
            </div>

            <aside className="hero-note" aria-label="現在の関心領域">
              <p className="hero-note-label">Current focus</p>
              <ul>
                <li>Web Marketing × AI</li>
                <li>Business Automation</li>
                <li>Web Planning &amp; Operation</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="section-grid">
            <SectionHeading id="about-title" label="01 / About" title="自己紹介" />
            <div className="about-copy">
              <p className="about-statement">
                AI × Webの可能性
                <br />
                変化の先でも、使えるスキルを。
              </p>
              <div className="about-description">
                <p>
                  これまで接客、農業、工場勤務、海外生活など、さまざまな環境で働いてきました。
                </p>
                <p>
                  これからは、新たな経験とともにスキルを積み重ねられる仕事に挑戦したいと考え、WebやAIの学習を始めました。
                </p>
                <p>
                  AIの進化によって仕事の形が大きく変わっていく中で、AIをただ使うだけではなく、Webや業務の中に組み込み、実際の業務改善や制作につなげられる力を身につけたいと考えています。
                </p>
              </div>
              <dl className="about-facts">
                <div>
                  <dt>Focus</dt>
                  <dd>Web / AI / Automation</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>自主制作を通した実践学習</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-tinted" aria-labelledby="projects-title">
          <div className="section-container">
            <SectionHeading
              id="projects-title"
              label="02 / Projects"
              title="制作物"
              lead="AI活用・業務自動化・Webマーケティングを軸にした自主制作です。"
            />
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number" aria-hidden="true">
                    {project.number}
                  </div>
                  <div className="project-content">
                    <p className="project-english">{project.englishTitle}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tag-list" aria-label="使用技術と領域">
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                  {project.href ? (
                    <Link className="project-link" href={project.href} aria-label={`${project.title}の詳細を見る`}>
                      View Project <ArrowIcon />
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="section-container">
            <SectionHeading
              id="skills-title"
              label="03 / Skills"
              title="スキル"
              lead="現在学習・制作で使用している技術とツールです。"
            />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="video" className="section section-dark" aria-labelledby="video-title">
          <div className="section-container">
            <SectionHeading
              id="video-title"
              label="04 / Video & Motion"
              title="映像・モーション"
              lead="Premiere ProやAfter Effectsで制作した映像作品です。"
            />
            <div className="motion-grid">
              {videoWorks.map((work) => (
                <article className="motion-card" key={work.id} aria-labelledby={`motion-${work.id}-title`}>
                  <video
                    className="motion-video"
                    width={work.width}
                    height={work.height}
                    controls
                    playsInline
                    preload="metadata"
                    aria-labelledby={`motion-${work.id}-title`}
                  >
                    <source src={work.src} type="video/mp4" />
                    お使いのブラウザは動画再生に対応していません。
                    <a href={work.src}>動画ファイルを開く</a>
                  </video>
                  <h3 id={`motion-${work.id}-title`}>{work.title}</h3>
                  <p>{work.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="background" className="section" aria-labelledby="background-title">
          <div className="section-grid">
            <SectionHeading
              id="background-title"
              label="05 / Background"
              title="これまでの経験"
              lead="異なる環境で得た経験を、柔軟な視点と行動力につなげています。"
            />
            <div>
              <ol className="background-list">
                {backgrounds.map((item, index) => (
                  <li key={item.title}>
                    <span className="background-index">0{index + 1}</span>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-inner">
            <p className="eyebrow">06 / Contact</p>
            <h2 id="contact-title">
              <span>WebとAIで、</span>
              <span>何ができるか話しませんか。</span>
            </h2>
            <p>
              Web・AI活用に関わる仕事を探しています。連絡先は今後こちらに掲載予定です。
            </p>
            <a
              className="text-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHubを見る <ExternalIcon />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
