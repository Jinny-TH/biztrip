import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import { schedules } from '@/lib/mock';

export default function CalendarPage(){
 const days = Array.from({length:31},(_,i)=>i+1);
 const has = (d:number)=>schedules.filter(s=>Number(s.schedule_date.slice(-2))===d);
 return <Shell active="/calendar"><PageHeader title="캘린더" sub="월간 출장 일정과 주요 이벤트를 확인합니다." />
  <div className="card"><div className="cardHead"><b>2026년 7월</b><div className="muted">Thailand 출장</div></div><div className="calendar">{['월','화','수','목','금','토','일'].map(x=><div className="day" style={{minHeight:44,fontWeight:800}} key={x}>{x}</div>)}{days.map(d=><div className={`day ${d===10?'on':''}`} key={d}><b>{d}</b>{has(d).map(e=><span className="pill" key={e.id}>{e.start_time} {e.title}</span>)}</div>)}</div></div>
 </Shell>
}
