import { BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage(){
  return <div className="loginWrap"><div className="card loginCard">
    <div className="brand"><span className="brandIcon"><BriefcaseBusiness/></span><span>BizTrip</span></div>
    <h1 className="pageTitle">로그인</h1><p className="pageSub">Sprint 1에서는 UI와 Supabase 연결 준비를 완료합니다.</p>
    <div className="form" style={{marginTop:22}}><div className="field span2"><label>이메일</label><input placeholder="admin@company.com"/></div><div className="field span2"><label>비밀번호</label><input type="password" placeholder="••••••••"/></div></div>
    <Link className="btn" href="/dashboard" style={{display:'block',textAlign:'center',marginTop:18}}>대시보드로 이동</Link>
  </div></div>
}
