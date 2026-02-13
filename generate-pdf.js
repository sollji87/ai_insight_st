const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('PDF 생성 시작...');
  
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // A4 크기에 맞춘 뷰포트 설정
  await page.setViewport({ width: 794, height: 1123 });
  
  // 로컬 개발 서버에 접속
  const port = process.env.PORT || 3000;
  await page.goto(`http://localhost:${port}`, {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });
  
  // 폰트 로딩 대기
  await page.evaluate(() => document.fonts.ready);
  
  // 렌더링 안정화 대기
  await new Promise((r) => setTimeout(r, 2000));
  
  // PDF 생성
  const outputPath = path.resolve(__dirname, 'ST_Report_2026_01.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '8mm',
      bottom: '10mm',
      left: '8mm',
    },
  });
  
  console.log(`PDF 저장 완료: ${outputPath}`);
  await browser.close();
})();
