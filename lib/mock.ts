import type { Trip, Schedule } from '@/types';

export const trips: Trip[] = [
  { id: '1', title: '이사님 태국 출장 7월(2026년)', country: 'Thailand', city: 'Bangkok', start_date: '2026-07-02', end_date: '2026-07-13', purpose: '경영진 출장 및 행사 참석', status: 'approved', manager_name: 'Jinny' },
  { id: '2', title: '중국 파트너사 미팅', country: 'China', city: 'Shanghai', start_date: '2026-08-05', end_date: '2026-08-08', purpose: '파트너 협의', status: 'pending', manager_name: 'GVC' },
  { id: '3', title: '말레이시아 퍼블리싱 점검', country: 'Malaysia', city: 'Kuala Lumpur', start_date: '2026-08-20', end_date: '2026-08-22', purpose: '사업 점검', status: 'draft', manager_name: 'Jinny' }
];

export const schedules: Schedule[] = [
  { id: 's1', trip_id: '1', title: '태국 도착 및 호텔 이동', schedule_date: '2026-07-02', start_time: '12:10', location: 'BKK / Bangkok', category: 'flight' },
  { id: 's2', trip_id: '1', title: '개감사', schedule_date: '2026-07-10', start_time: '08:30', location: 'G Tower 회의실', category: 'meeting' },
  { id: 's3', trip_id: '1', title: '동대문 파트너 미팅', schedule_date: '2026-07-10', start_time: '12:00', location: '동대문 파트너사', category: 'meeting' },
  { id: 's4', trip_id: '1', title: 'Dragonica 행사', schedule_date: '2026-07-10', start_time: '18:00', location: 'ICONSIAM Convention Hall', category: 'event' },
  { id: 's5', trip_id: '1', title: 'CI834 귀국', schedule_date: '2026-07-13', start_time: '12:10', location: 'BKK → ICN', category: 'flight' }
];

export const notices = [
  { title: '태국 현지 교통 안내', date: '2026.07.08', content: '방콕 지역 교통 체증이 심하니 이동 시간을 여유 있게 잡아주세요.' },
  { title: 'Dragonica 행사 안내', date: '2026.07.05', content: '행사장 입장 및 의전 동선을 사전에 확인해 주세요.' },
  { title: '해외 출장 안전 유의사항', date: '2026.06.28', content: '여권과 항공권은 별도 사본을 준비해 주세요.' }
];
