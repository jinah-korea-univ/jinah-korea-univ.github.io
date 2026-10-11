# 웹사이트 올리는 방법

주소: https://jinah-korea-univ.github.io/

## 1. 저장소 만들기 (처음 한 번)
1. GitHub에 `jinah-korea-univ` 계정으로 로그인
2. 오른쪽 위 **+** → **New repository**
3. Repository name: `jinah-korea-univ.github.io` (정확히 이 이름)
4. **Public** 선택, 다른 옵션은 그대로 두고 **Create repository**

## 2. 파일 올리기

### 방법 A. 웹에서 드래그 (가장 간단)
1. 만든 저장소 화면에서 **uploading an existing file** 클릭
2. 이 폴더 안의 내용(`index.html`, `style.css`, `main.js`, `images`, `files`, `cv`)을 끌어다 놓기
   - `cv/node_modules` 폴더는 올리지 않아도 됩니다 (CV 생성용 도구, 용량만 큼)
3. 아래 **Commit changes** 클릭

### 방법 B. 터미널
```bash
cd jinah-korea-univ.github.io
git init
git branch -M main
git add -A
git commit -m "Initial site"
git remote add origin https://github.com/jinah-korea-univ/jinah-korea-univ.github.io.git
git push -u origin main
```
(`.gitignore`가 `cv/node_modules`를 자동으로 제외합니다.)

## 3. 사이트 켜기 (처음 한 번)
저장소 **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, 폴더 **/(root)** → **Save**

1~3분 뒤 https://jinah-korea-univ.github.io/ 에서 열립니다.
바로 안 바뀌어 보이면 강력 새로고침(Ctrl+Shift+R).

## 수정할 때
- 웹사이트 내용: `index.html`
- CV: `cv/cv.json`을 고친 뒤 `cv/README.md`의 명령으로 Word/PDF 다시 생성
- 갤러리 사진: `images/gallery/` (큰 사진) + `images/gallery/thumbs/` (썸네일)

고친 뒤 방법 A로 같은 파일을 다시 올리거나(덮어쓰기), 터미널이면:
```bash
git add -A && git commit -m "Update" && git push
```
