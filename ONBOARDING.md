# Roh 포트폴리오 — 작업 인수인계

이 저장소를 어디서 열든 **바로 이어서 작업**하기 위한 가이드입니다.

## 무엇
- **Roh(3D 제너럴리스트) 포트폴리오** — Next.js 16, 다국어(ko/en/ja/zh)
- 🌐 라이브: https://kh-portfolio-2026.vercel.app
- 📦 레포: https://github.com/Bokgu-maker/RKH_Portfolio (`main`)
- 🚀 배포: `main`에 push → **Vercel 자동 재배포** (수동 배포 불필요)

## 시작
```bash
npm install
npm run dev      # localhost:3000
npm run build    # 배포 전 확인 (push 전 항상 통과 확인 권장)
```

## 콘텐츠는 전부 여기 → `lib/dictionaries.ts`
- 화면의 모든 텍스트/카드가 언어별 객체(`ko`,`en`,`ja`,`zh`)에 있음. **4개 언어를 함께 수정**할 것.
- 섹션: `hero`(이름·직함·태그라인), `about`(소개·통계), `skills`, `work.projects`(카드), `contact`.

## 프로젝트 카드 규칙 (`work.projects`)
- `youtubeId` 지정 → 유튜브 썸네일+재생 카드. 썸네일은 `public/work/<ID>.jpg` 에 저장
  (`curl -o public/work/<ID>.jpg https://img.youtube.com/vi/<ID>/maxresdefault.jpg`)
- `image: "/work/파일.jpg"` → 정적 이미지 카드(재생버튼 없음, 예: 앨범 커버)
- 둘 다 없으면 → 그라데이션+제목 첫 글자 카드
- **태그 규칙**: 파이프라인 순서로. 도구·용어(`Unreal`,`Motive`,`MotionBuilder`,`Rendering`,`LookDev`,`Lighting`,`OFFER`)는 4개 언어 공통, 한글 태그는 언어별 현지화(`촬영`→Filming/撮影/拍摄, `편집`→Editing/編集/剪辑, `수정`→Revision/修正/修改).

## 이미지/로고
- 사이트 이미지: `public/` (프로젝트 썸네일·앨범은 `public/work/`)
- 흰색 로고(소개 통계 카드): `public/OWIS_Logo_White.png`
- 원본 소스 보관: `Portfolio/`

## 기타
- 테마 색상: `app/globals.css` 의 `:root` 색 토큰
- 배포 URL/메타: `app/[locale]/layout.tsx` 의 `metadataBase`
- ⚠️ `AGENTS.md` 주의: 이 Next.js는 일부 API가 다름 → Next 기능 코드 작성 전 `node_modules/next/dist/docs/` 참고
- 로케일 리다이렉트는 `proxy.ts`(구 middleware), 언어 목록은 `lib/i18n.ts`

## 현재 상태 (참고)
- 프로젝트 카드 11개: OWIS 1집 앨범(이미지) 맨 위 + OWIS 'MUSEUM' 관련 유튜브 영상들 + OWIS Live(그라데이션).
- OWIS Live 카드는 아직 URL 미지정(그라데이션). role/description 일부는 임시값 — 실제 담당으로 교체 예정.
