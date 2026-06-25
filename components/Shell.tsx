import Link from 'next/link';
import { BarChart3, CalendarDays, ClipboardCheck, FileText, Hotel, Plane, Settings, UserRound, UsersRound, LayoutDashboard, BriefcaseBusiness } from 'lucide-react';

const nav = [
  ['대시보드','/dashboard',LayoutDashboard], ['출장 목록','/trips',BriefcaseBusiness], ['캘린더','/calendar',CalendarDays], ['항공 관리','/flights',Plane], ['호텔 관리','/hotels',Hotel], ['출장자 관리','/travelers',UsersRound], ['승인 관리','/approvals',ClipboardCheck], ['보고서','/reports',FileText], ['설정','/settings',Settings]
] as const;

export default function Shell({ children, active = '/dashboard' }: { children: React.ReactNode; active?: string }) {
  return <div className="layout">
    <aside className="sidebar">
      <Link href="/dashboard" className="brand"><span className="brandIcon"><BriefcaseBusiness size={22}/></span><span>BizTrip<br/><span className="muted" style={{fontSize:12,fontWeight:700}}>Executive Manager</span></span></Link>
      <nav className="nav">{nav.map(([label, href, Icon]) => <Link key={href} href={href} className={active===href?'active':''}><Icon size={19}/>{label}</Link>)}</nav>
    </aside>
    <main className="main">
      <header className="topbar"><input className="search" placeholder="출장명, 국가, 참석자 검색"/><div className="user"><UserRound size={20}/><div className="avatar">J</div><div><b>Jinny</b><div className="muted" style={{fontSize:12}}>관리자</div></div></div></header>
      <section className="content">{children}</section>
    </main>
  </div>;
}
