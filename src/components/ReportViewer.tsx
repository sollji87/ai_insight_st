"use client";

import { REPORT_HTML } from "@/data/reportContent";

export default function ReportViewer() {
  return (
    <div className="report-app">
      {/* 콘텐츠 영역 */}
      <div className="report-container">
        <div
          className="report-content"
          dangerouslySetInnerHTML={{ __html: REPORT_HTML }}
        />
      </div>

      {/* 맨 위로 버튼 */}
      <a href="#top" className="scroll-top-btn">↑</a>
    </div>
  );
}
