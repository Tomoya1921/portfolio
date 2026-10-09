import Link from "next/link";

const navigationItems = [
  { href: "#about", label: "自己紹介" },
  { href: "#projects", label: "制作物" },
  { href: "#skills", label: "スキル" },
  { href: "#video", label: "映像" },
  { href: "#background", label: "経歴" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function SiteHeader({ isHome = false }: { isHome?: boolean }) {
  const homePath = isHome ? "" : "/";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={`${homePath}#top`} aria-label="トップページ上部へ戻る">
          TN<span>.</span>
        </Link>
        <nav aria-label="メインナビゲーション">
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={`${homePath}${item.href}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
