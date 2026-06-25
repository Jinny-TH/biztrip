import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
export default function FlightsPage(){ return <Shell active="/flights"><PageHeader title="항공 관리" sub="출발/도착 항공편과 공항 정보를 관리합니다." action={<button className="btn">+ 항공편 추가</button>}/><div className="card"><table className="table"><thead><tr><th>항공편</th><th>구간</th><th>출발</th><th>도착</th><th>메모</th></tr></thead><tbody><tr><td><b>CI834</b><br/><span className="muted">China Airlines</span></td><td>BKK → ICN</td><td>2026-07-13 12:10</td><td>2026-07-13 19:40</td><td>귀국편</td></tr></tbody></table></div></Shell> }
