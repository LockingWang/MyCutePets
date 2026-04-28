# MyCutePets｜家有小可愛 · 貓狗大棧

> 單頁式作品集：介紹家中的毛孩，練習 SCSS、滾動視差與現代響應式版型。

[![Live Demo](https://img.shields.io/badge/GitHub_Pages-預覽-0366d6?style=flat-square&logo=github)](https://lockingwang.github.io/MyCutePets/)

| 項目 | 說明 |
|------|------|
| 初次完成 | 2023/02/27 |
| 線上預覽 | [lockingwang.github.io/MyCutePets](https://lockingwang.github.io/MyCutePets/) |

---

## 簡介

在完成 **SCSS** 與 **滾動視差** 課程後，以自訂版面製作此站，用以整理所學。後續持續加入家庭成員更新、紀念區塊與 **RWD／現代化 UI**，作為小型 front-end 練習與紀錄。

網站以「居住環境」開場，依序介紹：**木木**（長毛臘腸）、**小咪**（美短）、**Marbo**（本土貓），以及 **錢錢**（奶油長毛臘腸，紀念區）。

---

## 功能特色

- **響應式版型（RWD）**：斷點涵蓋桌機至手機；導覽於窄螢幕改為漢堡選單，`clamp()` 流動字級與彈性排版。
- **現代介面**：CSS 變數（設計 token）、玻璃擬態頂欄／卡片、`Noto Sans TC`、柔和陰影與圓角；支援 `prefers-reduced-motion`。
- **滾動互動**：錨點平滑捲動、依區塊高亮導覽、進度條動畫、區塊淡入；背景與插圖視差位移。
- **毛孩資料**：生日驅動的**即時年齡**（含紀念對象之「享年」計算）；頭像以圓形容器 **`object-fit: cover`** 填滿。
- **紀念錢錢**：生卒年月、短文與較柔和的視覺區隔（含導覽提示）。

---

## 技術棧

| 類別 | 使用 |
|------|------|
| 標記 | HTML5（`lang="zh-Hant"`） |
| 樣式 | SCSS → 編譯為 `css/all.css`（變數、mixin、`@extend`） |
| 互動 | jQuery 3.x |
| 字型／圖示 | Google Fonts（Noto Sans TC）、Font Awesome |

---

## 專案結構（摘錄）

```
MyCutePets/
├── index.html          # 單頁入口
├── css/
│   ├── all.scss        # 樣式主檔（建議由此修改）
│   ├── all.css         # 編譯輸出（提交版）
│   └── import/         # reset、變數、mixin
├── js/
│   └── all.js          # 選單、捲動、年齡與動畫邏輯
└── images/             # 背景、頭像、素材
```

---

## 本機開發與編譯

修改樣式請編輯 **`css/all.scss`**，再編譯為 `all.css`：

```bash
npx sass css/all.scss css/all.css
```

若已全域安裝 Dart Sass：

```bash
sass css/all.scss css/all.css
```

---

## 原版練習重點（沿革）

下列為最初版本的學習焦點，至今仍適用於理解專案根基：

1. **SCSS**：變數、mixin 資料夾、`@import` 模組化。
2. **滾動**：平滑導覽、`background-attachment`、監聽 `scroll` 套用 class／動畫（導覽 active、進度條、fade-in、視差）。

### 心得（節錄）

透過預先 import 常用設定，撰寫效率與可讀性都比純 CSS 更好；滾動監聽則讓「動態網頁」與 jQuery 的應用具體落在作品上。後續改版則往響應式、元件化樣式與可維護性延伸。

---

## 授權

本儲存庫內容僅供學習與個人展示用途；圖像與文字為個人資料，轉載前請取得同意。
