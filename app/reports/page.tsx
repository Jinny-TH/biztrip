import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import KpiCard from '@/components/KpiCard';

export default function ReportsPage(){return <Shell title="보고서"><PageHeader title="보고서" desc="출장 일정표, 요약 보고서, PDF 출력 기능을 준비하는 화면입니다." action="PDF 생성"/><section className="kpis"><KpiCard icon="📄" label="출장 일정표" value="1" hint="태국 출장"/><KpiCard icon="🧾" label="비용 보고서" value="준비" hint="3차 개발"/><KpiCard icon="📌" label="미팅 요약" value="6" hint="등록된 주요 미팅"/><KpiCard icon="🗂" label="첨부자료" value="0" hint="Storage 연결 예정"/></section><div className="card"><h2>출력 옵션</h2><div className="form-grid"><div className="field"><label>보고서 유형</label><select><option>출장 일정표</option><option>출장 결과 보고서</option><option>비용 정산 보고서</option></select></div><div className="field"><label>언어</label><select><option>한국어</option><option>English</option><option>ไทย</option><option>中文</option></select></div></div></div></Shell>}
