const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('HTML 추출 시작...');
  
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // A4 크기에 맞춘 뷰포트 설정
  await page.setViewport({ width: 794, height: 1123 });
  
  // 로컬 개발 서버에 접속
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });
  
  // 폰트 로딩 대기
  await page.evaluate(() => document.fonts.ready);
  
  // 렌더링 안정화 대기
  await new Promise((r) => setTimeout(r, 2000));
  
  // 페이지의 모든 CSS와 HTML을 추출
  const html = await page.evaluate(() => {
    let allCSS = '';
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          allCSS += rule.cssText + '\n';
        }
      } catch (e) {
        // 외부 스타일시트 접근 제한 무시
      }
    }
    
    return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ST Insight - SERGIO TACCHINI 경영실적 보고서</title>
  <style>
${allCSS}
@media print {
  @page {
    size: A4;
    margin: 10mm 8mm;
  }
}
  </style>
</head>
<body>
${document.body.innerHTML}
</body>
</html>`;
  });
  
  const outputPath = path.resolve(__dirname, 'ST_26년_01월_경영실적_요약보고서.html');
  fs.writeFileSync(outputPath, html, 'utf-8');
  
  console.log(`HTML 저장 완료: ${outputPath}`);
  await browser.close();
})();
