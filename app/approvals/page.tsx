import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import StatusBadge from '@/components/StatusBadge';
import { approvals } from '@/lib/data';

export default function ApprovalsPage() {
  const lanes = ['대기', '검토중', '완료'];
  return <Shell title="승인 관리"><PageHeader title="승인 관리" desc="출장 신청, 일정 변경, 비용/항공/호텔 승인 요청을 관리합니다." />
    <div className="kanban">{lanes.map(lane => <div className="lane" key={lane}><h3>{lane}</h3>{approvals.filter(a => a.status === lane || (lane === '완료' && false)).map(a => <div className="mini-card" key={a.id}><b>{a.title}</b><p>{a.desc}</p><p>요청자: {a.requester} · 기한: {a.due}</p><StatusBadge>{a.status}</StatusBadge><br /><br /><button>승인</button> <button className="ghost">반려</button></div>)}</div>)}</div>
  </Shell>;
}
