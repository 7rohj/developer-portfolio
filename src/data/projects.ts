export type Category = 'web' | 'mobile' | 'game' | 'extension'
export type Project = {
  slug: string
  index: string
  title: string
  englishTitle: string
  subtitle: string
  summary: string
  period: string
  category: Category
  categoryLabel: string
  tags: string[]
  theme: string
  highlights: string[]
  problem: string
  approach: string
  contribution: string[]
  challenges: { title: string; description: string }[]
  architecture: string[]
  outcome: string
  note?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'autohwpx', index: '01', title: 'AutoHWPX', englishTitle: 'Document Automation Platform',
    subtitle: 'HWPX 문서 스타일 자동 변환 웹 서비스',
    summary: '원본문서와 템플릿을 분석해 문단·표 스타일을 적용하는 문서 자동화 서비스입니다.',
    period: '2026.02 — 진행 중', category: 'web', categoryLabel: 'WEB SERVICE',
    tags: ['Java', 'Spring Boot', 'React', 'SQLite', 'Cloudflare'], theme: 'violet',
    highlights: ['HWPX 구조 분석 및 스타일 변환', '원본·템플릿 기반 서식 매핑', '인증부터 클라우드 배포까지 구현'],
    problem: '반복적인 문서 서식 편집에 드는 시간과 오류를 줄이기 위해, 템플릿의 스타일을 다른 문서에 적용하는 작업 흐름을 설계했습니다.',
    approach: 'HWPX 내부 구조를 분석해 텍스트·표 스타일 처리 로직을 구현하고, 웹 UI에서 파일 업로드부터 결과 다운로드까지 연결했습니다.',
    contribution: ['서비스 기획 및 전체 UI/UX 설계', 'Spring Boot API 및 HWPX XML 변환 로직 개발', 'SQLite 데이터 관리 및 OAuth2 인증 연동', 'Cloudflare Pages · Render · R2 기반 배포'],
    challenges: [
      { title: '복잡한 문서 구조 처리', description: '문단·표·셀 등 서로 다른 HWPX 요소에 맞는 스타일 적용 로직을 구분하고 변환 결과를 검증했습니다.' },
      { title: '사용자 작업 흐름 설계', description: '템플릿 스타일 선택 → 원본 적용 영역 지정 → 실행 및 다운로드의 흐름을 시각적인 단계로 구성했습니다.' },
      { title: '프론트엔드와 서버 분리', description: 'Cloudflare Pages의 프론트엔드와 Render의 Java API를 분리해 배포하고 파일 저장을 연결했습니다.' }
    ],
    architecture: ['React + Vite', 'Spring Boot API', 'HWPX 변환 엔진', 'SQLite / Cloudflare R2'],
    outcome: '문서 업로드, 스타일 선택, 자동 변환, 결과 파일 다운로드까지 이어지는 웹 서비스를 구현하고 운영 중입니다.',
    liveUrl: 'https://autohwpx.com'
  },
  {
    slug: 'imomtaxi', index: '02', title: '아이맘택시 POC', englishTitle: 'Taxi Reservation Mobile Prototype',
    subtitle: '모바일 택시 예약·배차 시스템 프로토타입',
    summary: '예약, 지도 기반 위치 선택, 배차 시뮬레이션을 구현한 Android 앱 POC입니다.',
    period: '2026.10', category: 'mobile', categoryLabel: 'MOBILE POC',
    tags: ['React', 'TypeScript', 'Vite', 'Capacitor', 'Kakao Maps'], theme: 'mint',
    highlights: ['예약·배차 UX 설계', 'Kakao Maps 지도 연동', 'Capacitor Android 앱 빌드'],
    problem: '택시 예약 서비스의 핵심 사용 흐름을 실제 모바일 환경에서 빠르게 검증할 수 있는 시연용 앱이 필요했습니다.',
    approach: 'React와 TypeScript로 화면 및 상태 흐름을 구현하고, Capacitor로 Android 앱 형태의 프로토타입을 제작했습니다.',
    contribution: ['사용자 가입·예약·알림 UI 구현', '예약 가능 일시 및 운영시간 검증', '지도에서 출발지·도착지 선택 기능', '배차 시뮬레이션 및 Android 빌드'],
    challenges: [
      { title: '복잡한 예약 상태 관리', description: '예약 생성·취소·알림·탑승 이력을 일관된 상태 흐름으로 구성했습니다.' },
      { title: '입력값 검증', description: '과거 날짜, 운영시간 외 예약 등 예외 상황을 검증하고 사용자에게 명확한 피드백을 제공했습니다.' }
    ],
    architecture: ['React + TypeScript', 'Kakao Maps SDK', 'Capacitor', 'Android APK'],
    outcome: '모바일 환경에서 핵심 예약 흐름을 시연할 수 있는 POC를 구현했습니다.'
  },
  {
    slug: 'cozyroom', index: '03', title: 'CozyRoom', englishTitle: 'Cozy Room Decoration Game',
    subtitle: '캐릭터와 상호작용하는 모바일 방 꾸미기 게임',
    summary: '가구 배치, 캐릭터 커스터마이징, 상호작용, 미니게임을 결합한 Unity 프로젝트입니다.',
    period: '2026.06 — 진행 중', category: 'game', categoryLabel: 'GAME DEVELOPMENT',
    tags: ['Unity 6', 'C#', 'Firebase', 'Firestore', 'URP'], theme: 'peach',
    highlights: ['그리드 기반 가구 배치', '캐릭터 이동·상호작용', 'Firebase 데이터 저장'],
    problem: '사용자가 직접 공간을 꾸미고 캐릭터와 상호작용하는 캐주얼 모바일 게임을 만들고자 했습니다.',
    approach: 'Unity 6 기반으로 가구 배치와 회전, 캐릭터 동작, 커스터마이징 및 데이터 저장 기능을 모듈별로 구현했습니다.',
    contribution: ['Unity 씬 구성 및 C# 게임 로직 구현', '가구 그리드 스냅·이동·회전·삭제', '캐릭터 상호작용 및 튜토리얼 시퀀스', 'Firebase Auth/Firestore 연동 및 미니게임 구현'],
    challenges: [
      { title: '가구 배치와 입력 충돌', description: '롱프레스·멀티터치와 가구 회전·이동이 충돌하지 않도록 입력 상태를 구분했습니다.' },
      { title: '상호작용 상태 전이', description: 'NPC 이동, 가구 사용, 튜토리얼 진행 상태를 연결하는 흐름을 구성했습니다.' }
    ],
    architecture: ['Unity 6 / URP', 'C# Gameplay Systems', 'Firebase Auth', 'Cloud Firestore'],
    outcome: '방 꾸미기 및 캐릭터 상호작용의 핵심 시스템을 개발 중입니다.',
    note: '출시 전 개발 중인 개인 프로젝트입니다.'
  },
  {
    slug: 'clickshield', index: '04', title: 'ClickShield', englishTitle: 'Browser Protection Extension',
    subtitle: '광고·팝업·리디렉션 차단 브라우저 확장',
    summary: '투명 클릭 오버레이와 불필요한 팝업, 광고 리디렉션을 탐지·차단하는 Chrome 확장 프로그램입니다.',
    period: '2026.10 — 진행 중', category: 'extension', categoryLabel: 'BROWSER EXTENSION',
    tags: ['JavaScript', 'Manifest V3', 'Chrome APIs', 'HTML', 'CSS'], theme: 'blue',
    highlights: ['광고·오버레이 탐지', '리디렉션·팝업 방지', '다국어 설정 UI'],
    problem: '웹 탐색 중 투명한 클릭 유도 영역과 연속적인 광고 리디렉션으로 발생하는 불편을 줄이고자 했습니다.',
    approach: 'Chrome Manifest V3의 확장 기능과 콘텐츠 스크립트를 활용해 탐지 및 사용자 제어 인터페이스를 구현했습니다.',
    contribution: ['광고·팝업·오버레이 탐지 로직', '차단 내역 패널 및 UI 개발', '사이트별 오탐 감소를 위한 예외 처리', '언어 선택 및 다국어 표시 기능'],
    challenges: [
      { title: '정상 UI 오탐 최소화', description: '쿠키 동의 창이나 영상 컨트롤과 같은 정상 요소를 광고로 오인하지 않도록 예외 조건을 보완했습니다.' },
      { title: '확장 프로그램 권한 설계', description: '광범위한 호스트 권한을 최소화하는 방향으로 Manifest V3 권한 구성을 검토했습니다.' }
    ],
    architecture: ['Chrome Extension', 'Content Scripts', 'Background Service Worker', 'Popup UI'],
    outcome: '브라우저 내 광고 탐지·차단 및 사용자 설정 기능을 반복 개선 중입니다.',
    note: 'Chrome 웹 스토어에서 확인하실 수 있습니다.'
  },
  {
    slug: 'bigyogo', index: '05', title: '비교고', englishTitle: 'Seoul Housing Data Explorer',
    subtitle: '서울 주거 데이터를 비교하는 iOS 앱',
    summary: '서울 주거 데이터를 탐색하고 여러 지역·항목을 비교할 수 있도록 시각화한 iPhone 앱입니다.',
    period: '2025.05 출시', category: 'mobile', categoryLabel: 'IOS APPLICATION',
    tags: ['Swift', 'SwiftUI', 'iOS', 'CSV', 'Data Visualization'], theme: 'yellow',
    highlights: ['대규모 CSV 데이터 활용', '레이더 차트·비교표', 'App Store 출시 경험'],
    problem: '...',
    approach: '공공데이터를 전처리하고 SwiftUI에서 비교·정렬·시각화 인터페이스를 구현했습니다.',
    contribution: ['데이터 전처리 및 앱 구조 설계', 'SwiftUI 화면·비교표·정렬 기능 개발', '레이더 차트 및 상세 데이터 표현', 'iOS 앱 심사 및 출시'],
    challenges: [
      { title: '대규모 데이터 활용', description: '수십만 행 규모의 CSV 데이터를 앱에서 탐색 가능한 형태로 가공했습니다.' },
      { title: '비교 UX 구성', description: '복잡한 수치를 표와 시각화 요소로 나누어 사용자가 차이를 파악하도록 구성했습니다.' }
    ],
    architecture: ['Public CSV Data', 'Data Processing', 'SwiftUI', 'iOS App'],
    outcome: 'iPhone용 앱을 개발하고 App Store 심사를 거쳐 출시했습니다.'
  },
  {
    slug: 'compareshop', index: '06', title: 'CompareShop', englishTitle: 'OCR Price Comparison App',
    subtitle: 'OCR 기반 상품 가격 비교 모바일 앱',
    summary: '상품 텍스트를 인식하고 유사 상품을 매칭해 가격 비교를 돕는 앱 프로젝트입니다.',
    period: '개인 프로젝트', category: 'mobile', categoryLabel: 'MOBILE APPLICATION',
    tags: ['SwiftUI', 'JavaScript', 'OCR', 'Fuse.js', 'PostgreSQL'], theme: 'pink',
    highlights: ['OCR 텍스트 인식', '유사도 기반 상품 매칭', 'Cloudflare Workers·DB 연동'],
    problem: '상품명 표기가 다를 때도 같은 상품을 비교할 수 있는 사용자 흐름을 만들고자 했습니다.',
    approach: 'OCR 결과를 텍스트 매칭 로직과 연결하고 서버 측 데이터 조회 구조를 설계했습니다.',
    contribution: ['OCR 기반 텍스트 인식 UI', 'Fuse.js를 활용한 유사 상품명 매칭', 'Cloudflare Workers API 연동', 'PostgreSQL 데이터 조회 구조'],
    challenges: [
      { title: '상품명 불일치 문제', description: 'OCR 결과의 표기 차이를 보완하기 위해 유사도 기반 문자열 검색을 적용했습니다.' },
      { title: '모바일과 서버 연결', description: '클라이언트에서 검색 요청을 처리하고 Workers를 통해 데이터베이스에 접근하도록 구성했습니다.' }
    ],
    architecture: ['SwiftUI + OCR', 'Cloudflare Workers', 'Fuse.js Matching', 'PostgreSQL'],
    outcome: 'OCR 인식, 상품 매칭, 데이터 조회를 연결하는 앱 기능을 구현했습니다.'
  }
]

export const categories = [
  { id: 'all', label: '전체' },
  { id: 'web', label: '웹 서비스' },
  { id: 'mobile', label: '모바일' },
  { id: 'game', label: '게임' },
  { id: 'extension', label: '확장 프로그램' },
] as const
