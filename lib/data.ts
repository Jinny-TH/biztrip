export type TripStatus = '초안' | '승인대기' | '승인완료' | '진행중' | '완료' | '취소';
export type ScheduleType = '미팅' | '식사' | '이동' | '행사' | '항공' | '호텔' | '개인' | '대기';

export type ScheduleItem = {
  id: string;
  tripId: string;
  date: string;
  day: string;
  start: string;
  end?: string;
  title: string;
  type: ScheduleType;
  location?: string;
  owner?: string;
  attendees?: string[];
  memo?: string;
  priority?: '높음' | '보통' | '낮음';
};

export const travelers = [
  { id: 't1', name: '대표이사', role: 'Executive', dept: '경영진', country: 'Thailand', city: 'Bangkok', status: '출장중', period: '7/2 ~ 7/13' },
  { id: 't2', name: 'GVC', role: 'Coordinator', dept: 'GVC', country: 'Thailand', city: 'Bangkok', status: '출장중', period: '7/2 ~ 7/13' },
  { id: 't3', name: 'GGT', role: 'Host', dept: 'GGT', country: 'Thailand', city: 'Bangkok', status: '출장중', period: '7/2 ~ 7/13' },
];

export const trips = [
  {
    id: 'trip-th-202607',
    title: '이사님 태국 출장',
    country: 'Thailand',
    city: 'Bangkok',
    period: '2026.07.02 ~ 2026.07.13',
    startDate: '2026-07-02',
    endDate: '2026-07-13',
    status: '진행중' as TripStatus,
    progress: 70,
    manager: '김담당',
    purpose: '파트너 미팅, ROW 행사, Dragonica 행사 참석',
    travelers: ['대표이사', 'GVC', 'GGT'],
    budget: '항공·숙박·차량·식대 별도 관리',
  },
  {
    id: 'trip-cn-202607',
    title: 'ChinaJoy 출장 준비',
    country: 'China',
    city: 'Shanghai',
    period: '2026.07 말 예정',
    startDate: '2026-07-24',
    endDate: '2026-07-28',
    status: '승인대기' as TripStatus,
    progress: 20,
    manager: '김담당',
    purpose: '행사 참석 및 파트너 미팅',
    travelers: ['대표이사'],
    budget: '작성중',
  },
];

export const schedules: ScheduleItem[] = [
  { id: 's1', tripId: 'trip-th-202607', date: '2026-07-02', day: '목', start: '11:30', title: '공항 픽업 출발', type: '이동', location: '수완나품 공항', owner: 'GGT' },
  { id: 's2', tripId: 'trip-th-202607', date: '2026-07-02', day: '목', start: '12:10', title: 'CI831 수완나품 도착', type: '항공', location: 'BKK', owner: 'GVC', memo: '입국 후 차량 이동' },
  { id: 's3', tripId: 'trip-th-202607', date: '2026-07-02', day: '목', start: '13:30', title: '대장금 식사', type: '식사', location: 'Bangkok', owner: 'GGT' },
  { id: 's4', tripId: 'trip-th-202607', date: '2026-07-02', day: '목', start: '15:00', title: '호텔 체크인', type: '호텔', location: 'Millennium Hilton Bangkok' },
  { id: 's5', tripId: 'trip-th-202607', date: '2026-07-02', day: '목', start: '16:00', title: '원버스 미팅', type: '미팅', location: '호텔 회의실', priority: '높음' },
  { id: 's6', tripId: 'trip-th-202607', date: '2026-07-03', day: '금', start: '10:30', title: 'ROPC 연동 보고', type: '미팅', location: 'G Tower' },
  { id: 's7', tripId: 'trip-th-202607', date: '2026-07-03', day: '금', start: '15:00', title: '막시온 미팅', type: '미팅', location: 'Somerset Maison Asoke' },
  { id: 's8', tripId: 'trip-th-202607', date: '2026-07-05', day: '일', start: '12:00', end: '22:00', title: 'ROW 행사', type: '행사', location: 'ICONSIAM', memo: '부스 이벤트, 코스어 퍼레이드, BabyMonster 공연' },
  { id: 's9', tripId: 'trip-th-202607', date: '2026-07-06', day: '월', start: '10:40', title: 'Tee-Off', type: '행사', location: 'Muang Kaew Golf Course' },
  { id: 's10', tripId: 'trip-th-202607', date: '2026-07-09', day: '목', start: '13:00', title: 'GV 경영회의', type: '미팅', location: 'G Tower' },
  { id: 's11', tripId: 'trip-th-202607', date: '2026-07-10', day: '금', start: '08:30', title: '개감사', type: '미팅', location: 'G Tower 회의실', priority: '높음' },
  { id: 's12', tripId: 'trip-th-202607', date: '2026-07-10', day: '금', start: '12:00', title: '동대문 식사', type: '식사', location: '동대문' },
  { id: 's13', tripId: 'trip-th-202607', date: '2026-07-12', day: '일', start: '18:00', end: '21:30', title: 'Dragonica Landverse 행사', type: '행사', location: 'River Star Princess 크루즈', priority: '높음' },
  { id: 's14', tripId: 'trip-th-202607', date: '2026-07-13', day: '월', start: '07:30', title: '공항 출발', type: '이동', location: '호텔 → BKK' },
  { id: 's15', tripId: 'trip-th-202607', date: '2026-07-13', day: '월', start: '10:50', title: 'CI834 귀국', type: '항공', location: 'BKK → ICN' },
];

export const flights = [
  { id: 'f1', code: 'CI831', route: 'TPE → BKK', date: '2026-07-02', time: '12:10 도착', terminal: 'BKK', status: '확정' },
  { id: 'f2', code: 'CI834', route: 'BKK → TPE → ICN', date: '2026-07-13', time: '10:50 출발', terminal: 'BKK', status: '확정' },
];

export const hotels = [
  { id: 'h1', name: 'Millennium Hilton Bangkok', checkIn: '2026-07-02', checkOut: '2026-07-13', address: 'Bangkok Riverside', status: '예약확정' },
];

export const approvals = [
  { id: 'a1', title: '출장 일정 변경', desc: '7/12 Dragonica 행사 이동 시간 확정 필요', requester: 'GVC', status: '대기', due: '2026-07-08' },
  { id: 'a2', title: '항공편 등록', desc: 'CI834 귀국 항공편 정보 확인', requester: 'GGT', status: '대기', due: '2026-07-09' },
  { id: 'a3', title: '행사 참석자', desc: 'ROW 행사 VIP 참석자 업데이트', requester: 'GVC', status: '검토중', due: '2026-07-05' },
];

export const notices = [
  { title: '태국 현지 교통 안내', date: '2026.07.08', desc: '방콕 지역 교통 체증 가능성이 있어 이동 시간 여유 확보 필요' },
  { title: 'Dragonica 행사 안내', date: '2026.07.05', desc: '7/12 Dragonica 행사 관련 동선 및 참석자 확인 필요' },
  { title: '해외 출장 안전 유의사항', date: '2026.06.28', desc: '여권, 비상연락망, 현지 담당자 연락처 사전 확인' },
];

export const locations = [
  { date: '2026-07-02', name: 'Millennium Hilton Bangkok', map: 'https://maps.google.com/?q=Millennium+Hilton+Bangkok' },
  { date: '2026-07-03', name: 'Somerset Maison Asoke Bangkok', map: 'https://maps.google.com/?q=Somerset+Maison+Asoke+Bangkok' },
  { date: '2026-07-05', name: 'ICONSIAM', map: 'https://maps.google.com/?q=ICONSIAM' },
  { date: '2026-07-12', name: 'River City Bangkok', map: 'https://maps.google.com/?q=River+City+Bangkok' },
];

export const statusColor: Record<string, string> = {
  초안: 'gray', 승인대기: 'amber', 승인완료: 'green', 진행중: 'blue', 완료: 'slate', 취소: 'red',
  대기: 'amber', 검토중: 'purple', 확정: 'green', 예약확정: 'green', 출장중: 'blue',
  미팅: 'blue', 식사: 'orange', 이동: 'slate', 행사: 'green', 항공: 'purple', 호텔: 'cyan', 개인: 'gray'
};
