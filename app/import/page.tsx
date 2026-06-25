import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';

export default function ImportPage() {
  return (
    <Shell active="/import" title="일정 Import">
      <PageHeader title="엑셀 일정 Import" desc="간단한 일정표 업로드 화면입니다. 현재는 미리보기 UI이며, 실제 엑셀 자동 등록은 다음 단계에서 연결합니다." />
      <div className="grid two-one">
        <div className="card">
          <h2>업로드 흐름</h2>
          <div className="kanban">
            <div className="lane"><h3>1. 파일 선택</h3><p>출장 일정 엑셀 파일을 선택합니다.</p></div>
            <div className="lane"><h3>2. 미리보기</h3><p>날짜, 시간, 일정명을 확인합니다.</p></div>
            <div className="lane"><h3>3. 등록</h3><p>확인 후 일정으로 저장합니다.</p></div>
          </div>
        </div>
        <div className="card">
          <h2>현재 상태</h2>
          <p className="muted">UI 준비 완료</p>
        </div>
      </div>
    </Shell>
  );
}
