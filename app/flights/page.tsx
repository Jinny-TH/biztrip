import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import StatusBadge from '@/components/StatusBadge';
import { Table } from '@/components/Table';
import { flights } from '@/lib/data';

export default function FlightsPage(){return <Shell title="항공 관리"><PageHeader title="항공 관리" desc="출도착 항공편, 터미널, 지연 여부를 관리합니다." action="+ 항공편 등록"/><div className="card"><Table headers={['항공편','노선','일자','시간','공항/터미널','상태']} rows={flights.map(f=>[<b key={f.id}>{f.code}</b>,f.route,f.date,f.time,f.terminal,<StatusBadge key={f.id}>{f.status}</StatusBadge>])}/></div></Shell>}
