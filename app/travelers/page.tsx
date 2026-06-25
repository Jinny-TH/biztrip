import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';

export default function Page(){
  const map:any = { travelers:['출장자 관리','임원, 동행자, 담당자 정보를 관리합니다.'], approvals:['승인 관리','출장 신청과 변경 요청을 승인합니다.'], reports:['보고서','출장 일정표와 PDF/Excel 보고서를 생성합니다.'], settings:['설정','권한, 알림, 다국어 설정을 관리합니다.'] };
  const [title, sub] = map['travelers'];
  return <Shell active="/travelers"><PageHeader title={title} sub={sub}/><div className="card cardPad"><h2>Sprint 1 기본 화면</h2><p className="muted">다음 Sprint에서 Supabase 데이터와 입력/수정 기능을 연결합니다.</p><button className="btn">기능 추가 예정</button></div></Shell>;
}
