import Shell from '@/components/Shell';
import KpiCard from '@/components/KpiCard';
import StatusBadge from '@/components/StatusBadge';
import Timeline from '@/components/Timeline';
import { approvals, notices, schedules, travelers, trips } from '@/lib/data';

const activeTrip = trips[0];
const today = schedules.filter((s) => s.date === '2026-07-10');
const upcoming = schedules.filter((s) => s.date >= '2026-07-12').slice(0, 4);

export default function Dashboard() {
  return <Shell title="대시보드">
    <section className="kpis">
      <KpiCard icon="🧳" label="이번 달 출장" value={trips.length} hint="진행중 1 · 승인대기 1" />
      <KpiCard icon="⏳" label="승인 대기" value={approvals.filter(a => a.status === '대기').length} hint="출장 1 · 변경 1" />
      <KpiCard icon="📅" label="오늘 일정" value={today.length} hint="08:30부터 시작" />
      <KpiCard icon="👥" label="현재 출장자" value={travelers.length} hint="태국 Bangkok" />
    </section>

    <section className="grid two-one">
      <div className="card"><h2>오늘 일정 <small>(7월 10일 금요일)</small></h2><Timeline items={today} /></div>
      <div className="card trip-card"><h2>이번 출장</h2><div className="flag">🇹🇭 <strong>{activeTrip.country} 출장</strong><StatusBadge>{activeTrip.status}</StatusBadge></div><p>{activeTrip.period}</p><p className="muted">{activeTrip.purpose}</p><p>출장자: {activeTrip.travelers.join(' · ')}</p><div className="progress"><span style={{ width: `${activeTrip.progress}%` }} /></div><p className="right">진행률 {activeTrip.progress}%</p></div>
    </section>

    <section className="grid three">
      <div className="card"><h2>다가오는 일정</h2>{upcoming.map((s) => <p className="row" key={s.id}><b>{s.date.slice(5)} {s.start}</b><span>{s.title}</span></p>)}</div>
      <div className="card"><h2>출장자 현황</h2>{travelers.map((t) => <p className="row" key={t.id}><b>{t.name}</b><span>{t.country} {t.city} · <StatusBadge>{t.status}</StatusBadge></span></p>)}</div>
      <div className="card notice"><h2>공지사항</h2>{notices.map((n) => <div className="row" key={n.title}><div><b>{n.title}</b><p>{n.desc}</p></div><small>{n.date}</small></div>)}</div>
    </section>
  </Shell>;
}
