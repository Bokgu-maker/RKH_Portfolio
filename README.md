# Roh — 3D 제너럴리스트 포트폴리오

Next.js(16) 기반 다국어(한 · 영 · 일 · 중) 포트폴리오 사이트.

- 🌐 **라이브:** https://kh-portfolio-2026.vercel.app
- 📦 **저장소:** https://github.com/Bokgu-maker/RKH_Portfolio
- 🚀 **배포:** Vercel — `main`에 push하면 **자동 재배포**

---

## 어디서든 바로 시작하기

필요: **Node.js 20+**, **Git**

```bash
git clone https://github.com/Bokgu-maker/RKH_Portfolio.git
cd RKH_Portfolio
npm install        # 최초 1회
npm run dev        # http://localhost:3000 미리보기
```

수정 → 저장 → 브라우저 자동 새로고침. 다 됐으면:

```bash
git add .
git commit -m "수정 내용"
git push           # → Vercel 자동 재배포
```

> 브라우저만으로도 수정 가능: GitHub에서 파일 열고 ✏️ → Commit 하면 자동 배포됩니다.

---

## ✏️ 콘텐츠는 여기 한 파일만 고치면 됩니다

**`lib/dictionaries.ts`** — 화면의 모든 텍스트/카드 데이터가 언어별(`ko` / `en` / `ja` / `zh`)로 들어있습니다.

| 섹션 | 내용 |
|------|------|
| `hero` | 이름, 직함, 태그라인 |
| `about` | 소개 제목·본문, 통계 카드 |
| `skills` | 역량 그룹 (엔진 / 프로그램 / AI) |
| `work.projects` | 참여한 작업물 카드 |
| `contact` | 이메일, 연락 문구 |

**4개 언어를 모두 같이 수정**해야 각 언어 페이지에 반영됩니다.

### 프로젝트 카드 추가/수정

`work.projects` 배열에 객체를 추가합니다. 3가지 형태:

```ts
// 1) 유튜브 영상 카드 (썸네일 + 클릭 시 재생)
{ slug: "고유id", youtubeId: "유튜브ID", title: "...", role: "...",
  year: "2026", tags: ["Unreal", "촬영"], description: "...", accent: 0 }

// 2) 이미지 카드 (앨범 커버 등, 재생버튼 없음)
{ slug: "고유id", image: "/work/파일.jpg", title: "...", role: "...",
  year: "2026", tags: [...], description: "...", accent: 3 }

// 3) 그라데이션 카드 (URL/이미지 없을 때, 제목 첫 글자 표시)
{ slug: "고유id", title: "...", role: "...", year: "2026",
  tags: [...], description: "...", accent: 1 }
```

- **유튜브 썸네일**은 `public/work/<유튜브ID>.jpg` 로 저장하면 자동 사용
  (예: `curl -o public/work/<ID>.jpg https://img.youtube.com/vi/<ID>/maxresdefault.jpg`)

---

## 🖼 이미지

- 사이트에서 쓰는 이미지: **`public/`** 에 저장 → `/파일명` 으로 참조
  - 프로젝트 썸네일/앨범 커버: `public/work/`
  - 로고(흰색): `public/OWIS_Logo_White.png` (소개 통계 카드에 표시)
- 원본 소스 파일: **`Portfolio/`** (사이트에 직접 쓰이진 않는 보관용)

---

## 📁 폴더 구조

```
app/[locale]/      # 라우팅·레이아웃 (폰트, 메타데이터)
components/        # 섹션 컴포넌트 (Hero, About, Skills, Work, Contact ...)
lib/dictionaries.ts# ★ 모든 콘텐츠 데이터 (여기 수정)
lib/i18n.ts        # 지원 언어 목록
app/globals.css    # 스타일 (색상 토큰 등)
public/            # 정적 이미지 (사이트에서 /경로 로 서빙)
Portfolio/         # 원본 이미지 보관
```

---

## 🎨 자주 바꾸는 것

- **테마 색상**: `app/globals.css` 상단 `:root` 의 색 토큰 (`--purple`, `--violet`, `--magenta` …)
- **배포 주소/메타**: `app/[locale]/layout.tsx` 의 `metadataBase`
- **지원 언어**: `lib/i18n.ts`

---

## 명령어

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 (localhost:3000) |
| `npm run build` | 프로덕션 빌드 (배포 전 확인용) |
| `npm run start` | 빌드 결과 로컬 실행 |
