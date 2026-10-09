import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import systemOverview from "../../../public/projects/system-overview.png";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";

export const metadata: Metadata = {
  title: "AI Email Automation | TOMOYA NAKAMURA",
  description:
    "問い合わせメールの取得から返信案の生成、下書き保存までを自動化した問い合わせ対応支援システムの制作紹介。",
};

const sections = [
  { id: "overview", label: "01 / Overview", title: "作品概要" },
  { id: "challenge", label: "02 / Challenge & Solution", title: "課題と解決方法" },
  { id: "demo", label: "03 / Demo", title: "デモ動画" },
  { id: "system", label: "04 / Before & After", title: "Before / After", subtitle: "システム構成図" },
  { id: "technology", label: "05 / Technology", title: "使用技術" },
  { id: "considerations", label: "06 / Design Considerations", title: "安全性への配慮、", subtitle: "工夫した点" },
  { id: "repository", label: "07 / Source Code", title: "GitHub Repository" },
  { id: "future", label: "08 / Next Steps", title: "Future Improvements" },
];

function SectionContent({ id }: { id: string }) {
  switch (id) {
    case "overview":
      return <p>問い合わせメールの取得から返信案の生成、下書き保存までを自動化した問い合わせ対応支援システムです。</p>;
    case "challenge":
      return (
        <>
          <p>「小規模ECショップの問い合わせ対応改善」という想定ケースでの課題と解決方法</p>
          <h3>課題</h3>
          <p>
            少人数で運営するECショップでは、<br />
            「発送はいつですか？」<br />
            「返品できますか？」<br />
            「在庫はありますか？」
          </p>
          <p>
            といった問い合わせメールに対して、店主やスタッフが、<br />
            メールを確認 → 返信内容を考える → 文章を書く → 送信<br />
            という作業を一件ずつ行う必要があり、時間と手間がかかる。
          </p>
          <h3>解決方法</h3>
          <p>
            そこで今回のAI Email Automationを使って、<br />
            問い合わせメールを取得 → AIが返信案を生成 → Gmailの下書きに自動保存<br />
            までを自動化する。
          </p>
          <p>
            人間はゼロから返信を書くのではなく、AIが作った返信案を確認・必要に応じて修正して送信する。
          </p>
          <p>
            この内容をもとに、さっき完成させたBefore / After画像でも、<br />
            「返信文をゼロから作る作業を減らし、人間は確認・判断に集中」<br />
            という形にしました。
          </p>
        </>
      );
    case "demo":
      return (
        <video
          className="project-media project-demo-video"
          controls
          playsInline
          preload="metadata"
          aria-label="AI Email Automationのデモ動画"
        >
          <source src="/projects/demo.mp4" type="video/mp4" />
          お使いのブラウザーは動画再生に対応していません。
          <a href="/projects/demo.mp4">デモ動画をダウンロード</a>
        </video>
      );
    case "system":
      return (
        <a
          href="/projects/system-overview.png"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Before / Afterとシステム構成図を原寸で開く（新しいタブ）"
        >
          <Image
            className="project-media"
            src={systemOverview}
            alt="手作業で返信文を作成する導入前と、AIが返信案をGmailの下書きに保存し人間が確認・修正・送信する導入後の比較。Gmail API、AI Email Automation、OpenAI APIの連携を示すシステム構成図。"
            sizes="(max-width: 820px) 100vw, 65vw"
          />
        </a>
      );
    case "technology":
      return (
        <ul className="tag-list" aria-label="使用技術">
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Gmail API</li>
          <li>OpenAI API</li>
          <li>OAuth 2.0</li>
        </ul>
      );
    case "considerations":
      return <p>自動送信は行わず、AIの返信案はGmailの下書きに保存し、人が確認してから送信する設計にしています。また、1回の処理を最大5件に制限し、処理済みラベルによる重複処理の防止を行っています。APIキーなどの秘密情報はGitの管理対象から除外しています。</p>;
    case "repository":
      return (
        <a
          className="button button-secondary"
          href="https://github.com/Tomoya1921/Gmail-ai-customer-support"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository（新しいタブで開く）"
        >
          GitHub Repository <span aria-hidden="true">↗</span>
        </a>
      );
    case "future":
      return (
        <>
          <h3>Cloud Deployment</h3>
          <p>
            現在はローカル環境での実行ですが、今後はクラウド化し、PCに依存しない定期実行への対応を予定しています。
          </p>
        </>
      );
    default:
      throw new Error(`Unknown project section: ${id}`);
  }
}

export default function AIEmailAutomationPage() {
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
            <p className="eyebrow">Project 01 / AI Email Automation</p>
            <h1 id="project-title">AI問い合わせ対応自動化<span className="accent">.</span></h1>
            <p className="project-detail-intro">問い合わせメールの取得から返信案の生成、下書き保存までを自動化した問い合わせ対応支援システムです。</p>
            <nav className="project-contents" aria-label="この作品の掲載内容">
              <p className="eyebrow">Contents</p>
              <ol>
                {sections.map((section) => (
                  <li key={section.id}><a href={`#${section.id}`}>{section.title}{section.subtitle && ` ${section.subtitle}`}</a></li>
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
                <p className="eyebrow">{section.label}</p>
                <h2 id={`${section.id}-title`}>
                  {section.title}
                  {section.subtitle && <><br />{section.subtitle}</>}
                </h2>
              </div>
              <div className="project-detail-body"><SectionContent id={section.id} /></div>
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
