import Link from 'next/link';

const nav = [
  ['대시보드', '/', '⌂'],
  ['출장 목록', '/trips', '▤'],
  ['캘린더', '/calendar', '▦'],
  ['일정 Import', '/import', '⇧'],
  ['승인 관리', '/approvals', '✓'],
  ['출장자 관리', '/travelers', '◉'],
  ['항공 관리', '/flights', '✈'],
  ['호텔 관리', '/hotels', '▣'],
  ['보고서', '/reports', '◷'],
  ['설정', '/settings', '⚙'],
];

export default function Shell({ children, title = '경영진 출장 일정 관리' }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <Link className="brand" href="/">
          <span className="brand-icon">✈</span>
          <b>BizTrip<br /><small>Executive Manager</small></b>
        </Link>
        <nav>{nav.map(([label, href, icon]) => <Link key={href} href={href}><span>{icon}</span>{label}</Link>)}</nav>
        <div className="side-bottom"><span>🌐 한국어</span><small>v0.2 Phase 1 UI</small></div>
      </aside>
      <main className="main">
        <header className="topbar">
          <div><p className="eyebrow">Executive Business Trip Manager</p><h1>{title}</h1></div>
          <div className="top-actions"><button className="ghost">+ 출장 등록</button><div className="user"><span className="alarm">3</span><b>김담당</b><small>관리자</small></div></div>
        </header>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
