"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { REPORT_HTML } from "@/data/reportContent";

type EditMode = "view" | "wysiwyg" | "source";

const STORAGE_KEY = "st_report_html";

export default function ReportViewer() {
  const [editMode, setEditMode] = useState<EditMode>("view");
  const [htmlContent, setHtmlContent] = useState<string>(REPORT_HTML);
  const [sourceContent, setSourceContent] = useState<string>(REPORT_HTML);
  const [isSaved, setIsSaved] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  // localStorage에서 저장된 내용 불러오기
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setHtmlContent(saved);
      setSourceContent(saved);
    }
  }, []);

  // 토스트 메시지 표시
  const showToastMsg = useCallback((msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  }, []);

  // WYSIWYG 모드로 전환
  const handleWysiwygMode = () => {
    setEditMode("wysiwyg");
    setSourceContent(htmlContent);
  };

  // 소스 모드로 전환
  const handleSourceMode = () => {
    // WYSIWYG에서 전환 시 현재 DOM 내용 캡처
    if (editMode === "wysiwyg" && contentRef.current) {
      const currentHtml = contentRef.current.innerHTML;
      setHtmlContent(currentHtml);
      setSourceContent(currentHtml);
    } else {
      setSourceContent(htmlContent);
    }
    setEditMode("source");
  };

  // 뷰 모드로 전환
  const handleViewMode = () => {
    if (editMode === "wysiwyg" && contentRef.current) {
      const currentHtml = contentRef.current.innerHTML;
      setHtmlContent(currentHtml);
    } else if (editMode === "source") {
      setHtmlContent(sourceContent);
    }
    setEditMode("view");
  };

  // 저장
  const handleSave = () => {
    let contentToSave = htmlContent;

    if (editMode === "wysiwyg" && contentRef.current) {
      contentToSave = contentRef.current.innerHTML;
      setHtmlContent(contentToSave);
    } else if (editMode === "source") {
      contentToSave = sourceContent;
      setHtmlContent(contentToSave);
    }

    localStorage.setItem(STORAGE_KEY, contentToSave);
    setIsSaved(true);
    showToastMsg("저장되었습니다!");
  };

  // 초기화 (원본으로 복구)
  const handleReset = () => {
    if (window.confirm("원본 보고서로 초기화하시겠습니까? 수정한 내용이 모두 사라집니다.")) {
      setHtmlContent(REPORT_HTML);
      setSourceContent(REPORT_HTML);
      localStorage.removeItem(STORAGE_KEY);
      setIsSaved(true);
      showToastMsg("원본으로 초기화되었습니다.");
    }
  };

  // HTML 다운로드
  const handleDownload = () => {
    let contentToDownload = htmlContent;
    if (editMode === "wysiwyg" && contentRef.current) {
      contentToDownload = contentRef.current.innerHTML;
    } else if (editMode === "source") {
      contentToDownload = sourceContent;
    }

    const fullHtml = generateFullHtml(contentToDownload);
    const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ST_26년_01월_경영실적_요약보고서.html";
    a.click();
    URL.revokeObjectURL(url);
    showToastMsg("파일이 다운로드되었습니다.");
  };

  // 콘텐츠 변경 감지
  const handleContentChange = () => {
    setIsSaved(false);
  };

  return (
    <div className="report-app">
      {/* 툴바 */}
      <div className="toolbar">
        <div className="toolbar-left">
          <span className="toolbar-brand">ST Insight</span>
          <span className="toolbar-divider">|</span>
          <span className="toolbar-title">경영실적 요약보고서</span>
        </div>
        <div className="toolbar-center">
          <button
            className={`toolbar-btn ${editMode === "view" ? "active" : ""}`}
            onClick={handleViewMode}
          >
            👁️ 보기
          </button>
          <button
            className={`toolbar-btn ${editMode === "wysiwyg" ? "active" : ""}`}
            onClick={handleWysiwygMode}
          >
            ✏️ 편집
          </button>
          <button
            className={`toolbar-btn ${editMode === "source" ? "active" : ""}`}
            onClick={handleSourceMode}
          >
            &lt;/&gt; 소스
          </button>
        </div>
        <div className="toolbar-right">
          {editMode !== "view" && (
            <>
              <button className="toolbar-btn save-btn" onClick={handleSave}>
                💾 저장 {!isSaved && <span className="unsaved-dot" />}
              </button>
            </>
          )}
          <button className="toolbar-btn" onClick={handleDownload}>
            ⬇️ 다운로드
          </button>
          <button className="toolbar-btn reset-btn" onClick={handleReset}>
            🔄 초기화
          </button>
        </div>
      </div>

      {/* 편집 모드 안내 배너 */}
      {editMode === "wysiwyg" && (
        <div className="edit-banner">
          ✏️ <strong>WYSIWYG 편집 모드</strong> — 보고서 내용을 직접 클릭하여 수정할 수 있습니다. 수정 후 &apos;저장&apos; 버튼을 눌러주세요.
        </div>
      )}
      {editMode === "source" && (
        <div className="edit-banner source-banner">
          &lt;/&gt; <strong>소스 편집 모드</strong> — HTML 소스를 직접 수정할 수 있습니다.
        </div>
      )}

      {/* 콘텐츠 영역 */}
      {editMode === "source" ? (
        <div className="source-editor-container">
          <textarea
            className="source-editor"
            value={sourceContent}
            onChange={(e) => {
              setSourceContent(e.target.value);
              setIsSaved(false);
            }}
            spellCheck={false}
          />
        </div>
      ) : (
        <div className="report-container">
          <div
            ref={contentRef}
            className={`report-content ${editMode === "wysiwyg" ? "editable" : ""}`}
            contentEditable={editMode === "wysiwyg"}
            suppressContentEditableWarning={true}
            onInput={handleContentChange}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      )}

      {/* 토스트 알림 */}
      {showToast && (
        <div className="toast">
          {toastMessage}
        </div>
      )}

      {/* 맨 위로 버튼 */}
      <a href="#top" className="scroll-top-btn">↑</a>
    </div>
  );
}

// 독립 HTML 파일 생성용 (다운로드 시 사용)
function generateFullHtml(bodyContent: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SERGIO TACCHINI 브랜드 2026년 1월 경영 보고서</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; font-size: 9px; color: #333; background: #f7fafc; line-height: 1.3; }
    .wrap { max-width: 210mm; margin: 0 auto; background: #fff; padding: 14mm 12mm 20mm 12mm; min-height: 100vh; box-shadow: 0 0 20px rgba(0,0,0,0.08); }
    .header { border-bottom: 2.5px solid #1a365d; padding-bottom: 8px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: flex-end; }
    .header-left h1 { font-size: 16px; color: #1a365d; letter-spacing: -0.3px; }
    .header-left p { font-size: 8px; color: #666; margin-top: 2px; }
    .header-right { text-align: right; }
    .header-right .big-num { font-size: 22px; font-weight: bold; color: #1a365d; }
    .header-right .big-num span { font-size: 10px; font-weight: normal; }
    .header-right .sub { font-size: 8px; color: #666; }
    .page-title { font-size: 12px; font-weight: bold; color: #1a365d; border-left: 3.5px solid #1a365d; padding-left: 8px; margin: 18px 0 10px 0; }
    .divider { border: none; border-top: 1px dashed #cbd5e0; margin: 16px 0; }
    .container { display: flex; gap: 12px; }
    .left, .right { width: 50%; }
    .section { margin-bottom: 8px; }
    .section-title { font-size: 9px; font-weight: bold; color: #1a365d; border-bottom: 1.5px solid #1a365d; padding-bottom: 2px; margin-bottom: 5px; }
    table { width: 100%; border-collapse: collapse; font-size: 8px; }
    th { background: #f0f4f8; padding: 3px 4px; text-align: left; font-weight: bold; border-bottom: 1px solid #cbd5e0; color: #2d3748; }
    td { padding: 3px 4px; border-bottom: 1px solid #edf2f7; }
    .num { text-align: right; }
    .badge-up { background: #c6f6d5; color: #276749; padding: 1px 5px; border-radius: 2px; font-size: 7px; font-weight: bold; }
    .badge-down { background: #fed7d7; color: #c53030; padding: 1px 5px; border-radius: 2px; font-size: 7px; font-weight: bold; }
    .badge-warn { background: #fefcbf; color: #975a16; padding: 1px 5px; border-radius: 2px; font-size: 7px; font-weight: bold; }
    .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin-bottom: 10px; }
    .kpi-box { background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 6px 5px; text-align: center; }
    .kpi-label { font-size: 7px; color: #718096; margin-bottom: 1px; }
    .kpi-value { font-size: 13px; font-weight: bold; color: #1a365d; }
    .kpi-change { font-size: 7px; margin-top: 1px; }
    .up { color: #276749; }
    .down { color: #c53030; }
    .box { border-radius: 4px; padding: 7px 8px; margin-bottom: 7px; }
    .box-red { background: #fff5f5; border-left: 3.5px solid #c53030; }
    .box-yellow { background: #fffff0; border-left: 3.5px solid #d69e2e; }
    .box-green { background: #f0fff4; border-left: 3.5px solid #38a169; }
    .box-blue { background: #ebf8ff; border-left: 3.5px solid #3182ce; }
    .box-gray { background: #f7fafc; border-left: 3.5px solid #718096; }
    .box-dark { background: #1a365d; color: white; border-radius: 4px; }
    .box-title { font-weight: bold; margin-bottom: 4px; font-size: 9px; }
    .box-title.red { color: #c53030; }
    .box-title.yellow { color: #975a16; }
    .box-title.green { color: #276749; }
    .box-title.blue { color: #2b6cb0; }
    ul { padding-left: 12px; margin: 0; }
    li { margin-bottom: 2px; line-height: 1.35; font-size: 8px; }
    li ul { margin-top: 1px; }
    .text-red { color: #c53030; }
    .text-green { color: #276749; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
    .insight-box { background: #ebf4ff; border: 1px solid #90cdf4; border-radius: 4px; padding: 6px 8px; margin-top: 6px; }
    .insight-title { font-size: 8px; font-weight: bold; color: #2b6cb0; margin-bottom: 3px; }
    .highlight-row { background: #e6fffa; }
    .danger-row { background: #fed7d7; }
    .warn-row { background: #fef3c7; }
    .success-row { background: #c6f6d5; }
    .total-row { background: #f0f4f8; font-weight: bold; }
    .report-nav { position: sticky; top: 0; background: linear-gradient(135deg, #1a365d, #2b6cb0); padding: 8px 15px; z-index: 100; display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
    .report-nav a { color: white; text-decoration: none; font-size: 9px; padding: 4px 10px; border-radius: 3px; transition: background 0.2s; }
    .report-nav a:hover { background: rgba(255,255,255,0.2); }
    .footer { margin-top: 20px; padding-top: 8px; border-top: 1.5px solid #cbd5e0; font-size: 7px; color: #a0aec0; text-align: center; }
    @media print { body { background: white; } .wrap { box-shadow: none; } .report-nav { display: none; } .page-title { page-break-before: always; } }
  </style>
</head>
<body>
${bodyContent}
</body>
</html>`;
}
