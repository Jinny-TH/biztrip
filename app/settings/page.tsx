import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';

export default function SettingsPage(){return <Shell title="설정"><PageHeader title="설정" desc="권한, 언어, 알림, Supabase 연결 정보를 관리합니다."/><div className="grid two-one"><div className="card"><h2>권한 그룹</h2><p className="row"><b>관리자</b><span>전체 등록/수정/삭제</span></p><p className="row"><b>담당자</b><span>출장/일정 등록 및 수정</span></p><p className="row"><b>임원</b><span>본인 일정 조회</span></p><p className="row"><b>조회 전용</b><span>읽기 권한</span></p></div><div className="card"><h2>환경변수</h2><div className="field"><label>NEXT_PUBLIC_SUPABASE_URL</label><input placeholder="2차 단계에서 입력" /></div><br/><div className="field"><label>NEXT_PUBLIC_SUPABASE_ANON_KEY</label><input placeholder="2차 단계에서 입력" /></div></div></div></Shell>}
