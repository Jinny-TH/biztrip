import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import StatusBadge from '@/components/StatusBadge';
import { Table } from '@/components/Table';
import { travelers } from '@/lib/data';

export default function TravelersPage(){return <Shell title="출장자 관리"><PageHeader title="출장자 관리" desc="출장자별 현재 위치, 기간, 역할을 확인합니다." action="+ 출장자 추가"/><div className="card"><Table headers={['이름','역할','부서','위치','기간','상태']} rows={travelers.map(t=>[<b key={t.id}>{t.name}</b>,t.role,t.dept,`${t.country} ${t.city}`,t.period,<StatusBadge key={t.id}>{t.status}</StatusBadge>])}/></div></Shell>}
