# HwaJeong Kang — Developer Portfolio v2

White / #FF4719 / Moisture Blur / Spring Repulsion

## 실행

```powershell
cd D:\portfolio\hwajeong-developer-portfolio
npm install
npm run dev
```

## 배포

Cloudflare Pages: Framework `Vite`, build command `npm run build`, output directory `dist`. React Router를 위한 `public/_redirects` 포함.

## 디자인 및 인터랙션

- 밝은 흰 배경과 다홍색 `#FF4719` 포인트
- 메인 프로젝트 갤러리: 12개 카드(실제 프로젝트 6개 + 콘셉트 카드 6개)
- 호버 시 흐린 이미지가 선명해지고 카드 확대
- 인접 카드는 탄성/감쇠가 있는 스프링 기반 반발 애니메이션으로 밀려남
- 마우스가 떠나면 제자리 복귀
- 모바일에서는 터치 편의를 위해 블러 및 물리효과를 완화
- 접근성: 키보드 포커스, reduced motion 설정 지원

## 스크린샷 교체

`src/components/ProjectVisual.tsx`의 CSS 목업은 임시 이미지입니다. 나중에 프로젝트별 스크린샷/MP4를 넣을 수 있습니다. 실제 사용 화면이 아닌 임시 목업을 실적 이미지로 오해하지 않도록 상세 페이지도 확인하세요.

## 주의

기존 AutoHWPX 서버와 완전히 별개인 정적 웹사이트입니다. 기존 도메인이나 Render 백엔드를 변경하지 않습니다.
