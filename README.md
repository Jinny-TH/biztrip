# BizTrip Sprint 1

경영진 출장 일정 관리 시스템의 Sprint 1 버전입니다.

## 포함 기능

- Next.js 15 + TypeScript 프로젝트 구조
- 관리자 대시보드 UI
- 좌측 메뉴 / 상단 헤더
- 출장 목록
- 캘린더
- 항공 / 호텔 / 출장자 / 승인 / 보고서 / 설정 기본 화면
- Supabase 연결 준비
- Supabase schema.sql 포함

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## Supabase 환경변수

Vercel 또는 로컬 `.env.local`에 아래 값을 입력합니다.

```bash
NEXT_PUBLIC_SUPABASE_URL=Supabase Project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=Supabase anon public key
```

## GitHub 업로드

1. ZIP 압축 해제
2. 압축 해제된 폴더 내부 파일 전체 선택
3. GitHub 저장소 `biztrip`의 `uploading an existing file` 클릭
4. 전체 파일 드래그 업로드
5. Commit changes 클릭

## Vercel 배포

1. Vercel → Add New Project
2. GitHub `Jinny-TH/biztrip` 선택
3. Framework Preset: Next.js
4. Environment Variables에 Supabase URL/Key 입력
5. Deploy 클릭

## 다음 Sprint

Sprint 2에서는 Supabase 실제 데이터 연동과 출장 등록/수정/삭제 기능을 연결합니다.
