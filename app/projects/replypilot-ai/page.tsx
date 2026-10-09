import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import advertisementImage from "../../../public/ReplyPilot_AI/ReplyPilotAI_CMpic.png";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ReplyPilot AI | TOMOYA NAKAMURA",
  description:
    "AIメール返信支援サービスを想定した、LP・広告企画制作の自主制作プロジェクト。課題とターゲット、広告戦略、制作内容、効果測定・改善の方針を紹介します。",
};

const sections = [
  {
    id: "challenge",
    number: "01",
    title: "課題とターゲット",
    content: <p>個人事業主や小規模企業では、メール返信に時間を取られ、本来の業務に集中しにくいという課題を想定。</p>,
  },
  {
    id: "strategy",
    number: "02",
    title: "広告戦略",
    content: <p>AIの機能そのものではなく、顧客が求める「返信作業の負担軽減」を中心に訴求する方針を設定。</p>,
  },
  {
    id: "advertisements",
    number: "03",
    title: "制作したWeb広告",
    content: (
      <div className={styles.advertisements}>
        <div className={styles.advertisementCard}>
          <h3 className={styles.mediaTitle}>静止画広告（採用A案）</h3>
          <Image
            className={styles.advertisementMedia}
            src={advertisementImage}
            alt="ReplyPilot AI：メールの返信に、時間を取られていませんか？ AIが返信文の下書きを作成。あとは内容を確認して送るだけ。"
            sizes="(max-width: 820px) 100vw, 640px"
          />
        </div>
        <div className={styles.advertisementCard}>
          <h3 className={styles.mediaTitle}>動画広告</h3>
          <video
            className={styles.advertisementMedia}
            width={1920}
            height={1080}
            controls
            playsInline
            preload="metadata"
            aria-label="ReplyPilot AIの動画広告"
          >
            <source src="/ReplyPilot_AI/ReplyPilot%20AI.mp4" type="video/mp4" />
            お使いのブラウザは動画再生に対応していません。
            <a href="/ReplyPilot_AI/ReplyPilot%20AI.mp4">動画ファイルを開く</a>
          </video>
        </div>
      </div>
    ),
  },
  {
    id: "landing-page",
    number: "04",
    title: "ランディングページ（LP）",
    content: (
      <>
        <p>サービスの特徴や利用の流れを紹介するLPを制作。広告から訪問したユーザーに、サービスのメリットが伝わる構成を意識しました。</p>
        <p>
          <a
            className="button button-primary"
            href="https://replypilot-ai-henna.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Landing Page <span aria-hidden="true">↗</span>
          </a>
        </p>
      </>
    ),
  },
  {
    id: "measurement",
    number: "05",
    title: "広告の効果測定・改善について",
    content: (
      <>
        <p>実際に広告を配信する場合は、Google Analytics 4（GA4）やUTMパラメータを活用して効果測定を行います。</p>
        <p>静止画広告と動画広告それぞれからのLP訪問数や、問い合わせなどのコンバージョン数を確認し、どちらの広告がより効果的なのかを分析します。</p>
        <p>また、クリック率（CTR）やコンバージョン率（CVR）などの指標をもとに、広告のデザインやキャッチコピー、LPの構成を見直し、改善につなげます。</p>
        <p className={styles.note}>※本プロジェクトは自主制作のため、広告の実配信および効果測定は行っていません。</p>
      </>
    ),
  },
];

export default function ReplyPilotAIPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">本文へ移動</a>
      <SiteHeader />
      <main id="main-content" className="project-detail">
        <section id="top" className="section project-detail-hero" aria-labelledby="project-title">
          <div className="section-container">
            <Link className="text-link project-back-link" href="/#projects">
              <span aria-hidden="true">←</span> 制作物一覧へ戻る
            </Link>
            <p className="eyebrow">PORTFOLIO / PROJECT CASE STUDY</p>
            <h1 id="project-title">ReplyPilot AI<span className="accent">.</span></h1>
            <p className="project-detail-intro">AIメール返信支援サービスのLP・広告企画制作</p>
            <p className={styles.projectType}>自主制作プロジェクト</p>
            <nav className="project-contents" aria-label="この作品の掲載内容">
              <p className="eyebrow">Contents</p>
              <ol>
                {sections.map((section) => (
                  <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
                ))}
              </ol>
            </nav>
          </div>
        </section>
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`section project-detail-section${index % 2 === 0 ? " section-tinted" : ""}`}
            aria-labelledby={`${section.id}-title`}
          >
            <div className="section-grid">
              <div className="section-heading">
                <p className="eyebrow">{section.number}</p>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
              </div>
              <div className={`project-detail-body ${styles.body}`}>{section.content}</div>
            </div>
          </section>
        ))}
        <div className="section-container project-detail-return">
          <Link className="text-link" href="/#projects"><span aria-hidden="true">←</span> 制作物一覧へ戻る</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
