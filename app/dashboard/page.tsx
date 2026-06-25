import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import KpiCard from '@/components/KpiCard';
import Timeline from '@/components/Timeline';
import StatusBadge from '@/components/StatusBadge';
import { CalendarCheck, ClipboardList, Hourglass, UsersRound } from 'lucide-react';
import { notices, schedules, trips } from '@/lib/mock';

export default function Dashboard(){
  const today = schedules.filter(s=>s.schedule_date==='2026-07-10');
  return <Shell active="/dashboard"><PageHeader title="대시보드" sub="경영진 출장 현황과 오늘 일정을 한눈에 확인합니다." action={<button className="btn">출장 등록</button>}/>
    <div className="grid4" style={{marginBottom:18}}>
      <KpiCard title="이번 달 출장" value={trips.length} sub="진행 1 · 예정 2" icon={<ClipboardList/>}/>
      <KpiCard title="승인 대기" value={1} sub="변경 요청 1건" icon={<Hourglass/>}/>
      <KpiCard title="오늘 일정" value={today.length} sub="08:30부터 시작" icon={<CalendarCheck/>}/>
      <KpiCard title="출장자" value={3} sub="태국 출장 중" icon={<UsersRound/>}/>
    </div>
    <div className="grid3">
      <div className="card"><div className="cardHead"><b>오늘 일정</b><span className="muted">7월 10일 금요일</span></div><div className="cardPad"><Timeline items={today}/></div></div>
      <div className="card"><div className="cardHead"><b>이번 출장</b><a className="muted">전체 보기</a></div><div className="cardPad"><h2>🇹🇭 Thailand 출장</h2><p className="muted">7/2 ~ 7/13 · Bangkok</p><p>경영진 출장 및 Dragonica 행사 참석</p><StatusBadge status="approved"/><div style={{height:8,background:'#e5e7eb',borderRadius:10,marginTop:22}}><div style={{width:'70%',height:8,background:'#2563eb',borderRadius:10}}/></div><p style={{textAlign:'right'}}>진행률 70%</p></div></div>
      <div className="card"><div className="cardHead"><b>공지사항</b><a className="muted">전체 보기</a></div><div className="cardPad noticeList">{notices.map(n=><div className="notice" key={n.title}><div><b>{n.title}</b><div className="muted">{n.content}</div></div><span className="muted">{n.date}</span></div>)}</div></div>
    </div>
  </Shell>
}
