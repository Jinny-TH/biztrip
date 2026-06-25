# BizTrip - Executive Trip Manager

경영진 출장 일정 관리 사이트 Phase 1 UI 버전입니다.
업로드하신 `이사님 태국 출장 7월(2026년) 일정.xlsx`의 내용을 바탕으로 태국 출장 일정 데이터를 초기 샘플로 반영했습니다.

## 현재 포함된 화면

- 대시보드
- 출장 목록 / 등록 미리보기
- 캘린더
- 엑셀 Import 미리보기
- 승인 관리
- 출장자 관리
- 항공 관리
- 호텔 관리
- 보고서
- 설정
- Supabase DB 스키마 초안

## 1. 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```bash
http://localhost:3000
```

## 2. GitHub 업로드 방법

### 쉬운 방법: GitHub 웹 업로드

1. ZIP 파일 압축 해제
2. GitHub 저장소 `biztrip` 화면에서 `uploading an existing file` 클릭
3. 압축 해제한 폴더 안의 파일/폴더 전체를 드래그해서 업로드
   - `app`
   - `components`
   - `lib`
   - `supabase`
   - `package.json`
   - `tsconfig.json`
   - `README.md`
4. 아래 `Commit changes` 클릭

### 명령어 방법

```bash
git init
git add .
git commit -m "Initial BizTrip phase 1 UI"
git branch -M main
git remote add origin https://github.com/Jinny-TH/biztrip.git
git push -u origin main
```

## 3. Vercel 배포 방법

1. https://vercel.com 접속
2. GitHub 계정으로 로그인
3. Add New → Project 클릭
4. `Jinny-TH/biztrip` 저장소 Import
5. Framework Preset이 `Next.js`인지 확인
6. Build Command는 기본값 유지: `next build`
7. Deploy 클릭

## 4. 단계별 개발 계획

### Phase 1: UI 완성

현재 ZIP 버전입니다.
정적 데이터 기반으로 실제 사이트 화면과 메뉴 구조를 완성했습니다.

### Phase 2: Supabase DB 연결

- Supabase 프로젝트 생성
- `supabase/schema.sql` 실행
- `.env.local`에 Supabase URL / Key 입력
- 출장, 일정, 항공, 호텔 데이터를 DB에서 읽도록 전환

### Phase 3: 로그인 및 권한

- Google 로그인
- 관리자 / 담당자 / 임원 / 조회 전용 권한 구분
- 메뉴별 접근 권한 적용

### Phase 4: 엑셀 업로드 자동 파싱

- 출장 일정 엑셀 업로드
- 날짜, 시간, 일정명, 장소 자동 추출
- 미리보기 후 DB 저장

### Phase 5: 보고서 및 공유

- PDF 출장 일정표 생성
- Google Calendar / Outlook Calendar 연동
- 모바일 최적화 및 다국어 지원

## 5. 다음 작업

GitHub에 업로드 후 Vercel 배포까지 완료되면, 다음 단계로 Supabase 연결 버전을 만들면 됩니다.
