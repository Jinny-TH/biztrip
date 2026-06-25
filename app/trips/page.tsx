import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import StatusBadge from '@/components/StatusBadge';
import { trips } from '@/lib/mock';

export default function TripsPage(){
 return <Shell active="/trips"><PageHeader title="출장 목록" sub="출장 신청, 승인 상태, 일정 기간을 관리합니다." action={<button className="btn">+ 출장 등록</button>}/>
  <div className="card"><table className="table"><thead><tr><th>출장명</th><th>국가/도시</th><th>기간</th><th>목적</th><th>담당자</th><th>상태</th></tr></thead><tbody>{trips.map(t=><tr key={t.id}><td><b>{t.title}</b></td><td>{t.country} / {t.city}</td><td>{t.start_date} ~ {t.end_date}</td><td>{t.purpose}</td><td>{t.manager_name}</td><td><StatusBadge status={t.status}/></td></tr>)}</tbody></table></div>
  <div className="card cardPad" style={{marginTop:18}}><h2>출장 등록</h2><div className="form"><div className="field"><label>출장명</label><input placeholder="예: 일본 파트너 미팅"/></div><div className="field"><label>상태</label><select><option>작성중</option><option>승인대기</option><option>승인완료</option></select></div><div className="field"><label>국가</label><input placeholder="Thailand"/></div><div className="field"><label>도시</label><input placeholder="Bangkok"/></div><div className="field"><label>시작일</label><input type="date"/></div><div className="field"><label>종료일</label><input type="date"/></div><div className="field span2"><label>목적</label><textarea rows={4} placeholder="출장 목적과 주요 미팅 내용을 입력"/></div></div></div>
 </Shell>
}
