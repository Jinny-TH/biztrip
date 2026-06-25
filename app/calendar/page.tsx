import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import StatusBadge from '@/components/StatusBadge';
import { schedules } from '@/lib/data';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const dows = ['월','화','수','목','금','토','일'];

export default function CalendarPage() {
  return <Shell title="캘린더">
    <PageHeader title="2026년 7월 출장 캘린더" desc="날짜별 출장 일정, 행사, 항공 일정을 색상으로 확인합니다." action="+ 일정 추가" />
    <div className="card"><div className="calendar">{dows.map(d => <div className="dow" key={d}>{d}</div>)}{days.map(day => { const items = schedules.filter(s => Number(s.date.slice(-2)) === day); return <div className={items.length ? 'day active' : 'day'} key={day}><b>{day}</b>{items.slice(0,4).map(i => <small key={i.id}>{i.start} <StatusBadge>{i.type}</StatusBadge> {i.title}</small>)}</div>; })}</div></div>
  </Shell>;
}
