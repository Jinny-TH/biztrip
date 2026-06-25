import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import StatusBadge from '@/components/StatusBadge';
import { Table } from '@/components/Table';
import { trips, schedules, locations } from '@/lib/data';

export default function TripsPage() {
  return <Shell title="출장 목록">
    <PageHeader title="출장 목록" desc="출장 기본 정보, 진행률, 담당자, 목적을 한 화면에서 관리합니다." action="+ 출장 등록" />
    <div className="grid two-one">
      <div className="card"><h2>출장 현황</h2><div className="table-wrap"><table><thead><tr><th>출장명</th><th>국가/도시</th><th>기간</th><th>담당자</th><th>상태</th><th>진행률</th></tr></thead><tbody>{trips.map(t => <tr key={t.id}><td><b>{t.title}</b><p className="muted">{t.purpose}</p></td><td>{t.country}<br />{t.city}</td><td>{t.period}</td><td>{t.manager}</td><td><StatusBadge>{t.status}</StatusBadge></td><td><div className="progress"><span style={{width:`${t.progress}%`}} /></div>{t.progress}%</td></tr>)}</tbody></table></div></div>
      <div className="card"><h2>출장 등록 Preview</h2><div className="form-grid"><div className="field"><label>출장명</label><input placeholder="예: 이사님 태국 출장" /></div><div className="field"><label>상태</label><select><option>초안</option><option>승인대기</option><option>승인완료</option><option>진행중</option></select></div><div className="field"><label>국가</label><input placeholder="Thailand" /></div><div className="field"><label>도시</label><input placeholder="Bangkok" /></div><div className="field"><label>시작일</label><input type="date" /></div><div className="field"><label>종료일</label><input type="date" /></div></div><br /><div className="field"><label>목적</label><textarea placeholder="출장 목적과 주요 미팅을 입력" /></div><br /><button>저장 화면 연결 예정</button></div>
    </div>
    <div className="card"><h2>전체 일정표</h2><Table headers={['일자','시간','구분','일정','장소','담당']} rows={schedules.map(s => [s.date, s.start, <StatusBadge key={s.id}>{s.type}</StatusBadge>, <b key={s.id}>{s.title}</b>, s.location || '-', s.owner || '-'])} /></div>
    <div className="card"><h2>주요 장소</h2>{locations.map(l => <p className="row" key={l.name}><b>{l.date}</b><a href={l.map} target="_blank">{l.name}</a></p>)}</div>
  </Shell>;
}
