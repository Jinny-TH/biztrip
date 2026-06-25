import Shell from '@/components/Shell';
import PageHeader from '@/components/PageHeader';
import StatusBadge from '@/components/StatusBadge';
import { hotels } from '@/lib/data';

export default function HotelsPage(){return <Shell title="호텔 관리"><PageHeader title="호텔 관리" desc="호텔 예약, 체크인/체크아웃, 주소와 지도 링크를 관리합니다." action="+ 호텔 등록"/><div className="grid two-one"><div className="card"><h2>호텔 예약</h2>{hotels.map(h=><div className="mini-card" key={h.id}><h3>{h.name}</h3><p>체크인: {h.checkIn}</p><p>체크아웃: {h.checkOut}</p><p>주소: {h.address}</p><StatusBadge>{h.status}</StatusBadge></div>)}</div><div className="card"><h2>지도 영역</h2><div className="mapbox">Google Maps 연동 예정</div></div></div></Shell>}
