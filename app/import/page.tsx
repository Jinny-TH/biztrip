import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';

export default function ImportPage() {
  return <Shell title="일정 Import">
    <PageHeader title="엑셀 일정 Import" desc="현재 단계에서는 업로드 UI 미리보기입니다. 2차 단계에서 Supabase Storage와 파서가 연결됩니다." action="엑셀 업로드" />
    <div className="grid two-one">
      <div className="card"><h2>업로드 흐름</h2><div className="kanban"><div className="lane"><h3>1. 파일 선택</h3><p className="muted">출장 일정 엑셀 파일을 업로드합니다.</p></div><div className="lane"><h3>2. 미리보기</h3><p className="muted">날짜, 시간, 일정, 장소를 자동 인식합니다.</p></div><div className="lane"><h3>3. 등록</h3><p className="muted">확인 후 일정 DB에 저장합니다.</p></div></div><br /><div className="field"><label>엑셀 파일</label><input type="file" /></div><br /><button>미리보기 생성</button></div>
      <div className="card"><h2>인식 대상 컬럼</h2><p className="row"><b>날짜</b><span>2026-07-02</span></p><p className="row"><b>시간</b><span>08:30 / 13:00</span></p><p className="row"><b>일정명</b><span>미팅, 이동, 행사</span></p><p className="row"><b>장소</b><span>호텔, 공항, 행사장</span></p><p className="row"><b>메모</b><span>준비사항, 담당자</span></p></div>
    </div>
    <div className="card"><h2>미리보기 테이블</h2><div className="table-wrap"><table><thead><tr><th>일자</th><th>시간</th><th>구분</th><th>일정</th><th>장소</th><th>상태</th></tr></thead><tbody><tr><td>2026-07-10</td><td>08:30</td><td>미팅</td><td>개감사</td><td>G Tower 회의실</td><td>등록 가능</td></tr><tr><td>2026-07-12</td><td>18:00</td><td>행사</td><td>Dragonica Landverse 행사</td><td>River Star Princess</td><td>확인 필요</td></tr></tbody></table></div></div>
  </Shell>;
}
