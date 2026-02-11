// 보고서 HTML 콘텐츠 원본 데이터
// 이 파일은 초기 보고서 내용을 담고 있으며, 편집 시 localStorage에 저장됩니다.

export const REPORT_HTML = `
<div class="report-nav" id="top">
  <a href="#sec1">🎯 전략 &amp; Action</a>
  <a href="#sec2">📊 Executive Summary</a>
  <a href="#sec3">📈 채널분석</a>
  <a href="#sec4">🏷️ 상품/재고</a>
  <a href="#sec5">🏪 매장효율</a>
</div>

<div class="wrap">

  <div class="header">
    <div class="header-left">
      <h1>🎾 SERGIO TACCHINI 브랜드 2026년 1월 경영 보고서</h1>
      <p>경영관리팀 FP&amp;A | 보고일: 2026년 2월 11일</p>
    </div>
    <div class="header-right">
      <div class="big-num">468<span>백만원</span></div>
      <div class="sub">실판매출 YoY 208% (+243백만원) | 영업이익률 -214.9%</div>
    </div>
  </div>

  <!-- ========== 1. 전략 & Action Plan ========== -->
  <div class="page-title" id="sec1">1. 전략 &amp; Action Plan - 즉시/단기/중장기 과제</div>

  <div class="container">
    <div class="left">
      <div class="box box-red">
        <div class="box-title red">⚡ 즉시 실행 (1개월 내)</div>
        <ul>
          <li><strong>한남 플래그십 매출 성장 가속화</strong>
            <ul>
              <li>한남점 매출 39백만원, 직접이익 -49백만원 → BEP 달성이 최우선 과제</li>
              <li>할인율 19.6% → 15% 이하 제한, 정가 판매 비중 70% 확보</li>
              <li>롯데월드·코엑스와 상권 중복 최소화 위한 상품 믹스 차별화</li>
              <li>VIP 초청 이벤트, 팝업 전시 등 플래그십 본연의 브랜딩 기능 강화</li>
            </ul>
          </li>
          <li><strong>제휴몰 할인율 상한제 도입</strong>
            <ul>
              <li>제휴몰 할인율 53.0%(YoY +24.0%p) → 구조적 저수익 고착화</li>
              <li>무신사 55.1%, 29CM 47.0%, SSF샵 52.4%로 전 플랫폼 50%대</li>
              <li>조치: 무신사 50%, 29CM 45%, SSF샵 48% 할인 상한 즉시 적용</li>
            </ul>
          </li>
          <li><strong>영업비 20% 긴급 절감</strong>
            <ul>
              <li>영업비 678백만원(매출 대비 159.3%) → 매출 초과하는 비정상 구조</li>
              <li>광고비 260백만원(YoY +239%): 비효율 매체 20% 즉시 컷</li>
              <li>샘플비 28백만원(YoY +1,020%): 디지털 샘플링 도입, 50% 절감</li>
              <li>목표: 월 678백만원 → 540백만원(-138백만원)</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="box box-yellow">
        <div class="box-title yellow">📋 단기 실행 (1분기 내)</div>
        <ul>
          <li><strong>과시즌 재고 161억원(50%) 긴급 소진</strong>
            <ul>
              <li>과시즌 의류 161억원(YoY 177%), 전체 재고의 50.3% 차지</li>
              <li>1년차 30%→40%, 2년차 50%→60%로 할인율 상향 조정</li>
              <li>아울렛 팝업 3개 추가(목표 월 소진 20억원)</li>
            </ul>
          </li>
          <li><strong>자사몰 성장 동력 회복</strong>
            <ul>
              <li>자사몰 76백만원(MOM -41.5%): 전월 129백만원에서 급락</li>
              <li>자사몰 전용 혜택 강화(쿠폰 15%, 적립금 5%)</li>
              <li>제휴몰 구매 고객 → 자사몰 VIP 전환 프로그램 운영</li>
            </ul>
          </li>
          <li><strong>직영점 수익성 개선</strong>
            <ul>
              <li>직영점 5개 중 전 매장 적자, 평균 점당매출 23백만원</li>
              <li>스타필드수원(-32백만원) 임대료 재협상, 3개월 모니터링</li>
              <li>롯데월드 할인율 33.6% → 25% 이하로 정상화</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="right">
      <div class="box box-green">
        <div class="box-title green">🎯 중장기 전략 (상반기)</div>
        <ul>
          <li><strong>채널 포트폴리오 구조 재편</strong>
            <ul>
              <li>자사몰(직접이익률 46.2%) + 면세점(유일 흑자) 고수익 채널 확대</li>
              <li>제휴몰 수수료 재협상: 무신사 29.8%, 29CM 33.9% → 25% 이하 목표</li>
              <li>백화점 채널 데이터 검증 후 리뉴얼 또는 전략 재수립</li>
            </ul>
          </li>
          <li><strong>할인율 정상화 프로젝트</strong>
            <ul>
              <li>전사 할인율 35.7% → 25% 이하로 6개월 내 달성</li>
              <li>TAG 대비 실판 갭 모니터링: 주간 단위 할인액 260백만원 → 150백만원</li>
              <li>할인율 10%p 인하 시 월 직접이익 +47백만원 개선 효과</li>
            </ul>
          </li>
          <li><strong>브랜드 재포지셔닝</strong>
            <ul>
              <li>한남 플래그십 중심 프리미엄 브랜드 이미지 구축</li>
              <li>면세점(할인율 11.6%) 정가 판매 성공 모델 타 채널 확산</li>
              <li>스커트(판매율 56.5%)·다운점퍼(38.9%) 강점 아이템 집중 육성</li>
            </ul>
          </li>
          <li><strong>ACC 재고 효율화</strong>
            <ul>
              <li>ACC 재고주수 181.8주(약 3.5년) → 120주 목표</li>
              <li>기타ACC 421.9주, 가방 192.3주 과다 → 세트 상품 기획 소진</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="box box-dark">
        <div class="box-title" style="color:white;">📌 1Q 핵심 KPI 목표</div>
        <table style="margin-top:5px;color:white;font-size:8px;">
          <tbody>
          <tr style="border-bottom:1px solid #4a5568;">
            <th style="background:transparent;color:#a0aec0;border:none;">지표</th>
            <th class="num" style="background:transparent;color:#a0aec0;border:none;">현재</th>
            <th class="num" style="background:transparent;color:#a0aec0;border:none;">목표</th>
            <th class="num" style="background:transparent;color:#a0aec0;border:none;">Gap</th>
          </tr>
          <tr style="border-bottom:1px solid #4a5568;">
            <td style="color:#e2e8f0;border:none;">직접이익률</td>
            <td class="num" style="border:none;">-55.6%</td>
            <td class="num" style="border:none;"><strong>-20%</strong></td>
            <td class="num" style="border:none;color:#48bb78;">+35.6%p</td>
          </tr>
          <tr style="border-bottom:1px solid #4a5568;">
            <td style="color:#e2e8f0;border:none;">할인율</td>
            <td class="num" style="border:none;">35.7%</td>
            <td class="num" style="border:none;"><strong>25%</strong></td>
            <td class="num" style="border:none;color:#48bb78;">-10.7%p</td>
          </tr>
          <tr style="border-bottom:1px solid #4a5568;">
            <td style="color:#e2e8f0;border:none;">영업비율(매출 대비)</td>
            <td class="num" style="border:none;">159.3%</td>
            <td class="num" style="border:none;"><strong>120%</strong></td>
            <td class="num" style="border:none;color:#48bb78;">-39.3%p</td>
          </tr>
          <tr style="border-bottom:1px solid #4a5568;">
            <td style="color:#e2e8f0;border:none;">과시즌 재고</td>
            <td class="num" style="border:none;">161억</td>
            <td class="num" style="border:none;"><strong>100억</strong></td>
            <td class="num" style="border:none;color:#48bb78;">-61억</td>
          </tr>
          <tr style="border-bottom:1px solid #4a5568;">
            <td style="color:#e2e8f0;border:none;">한남점 직접이익</td>
            <td class="num" style="border:none;">-49백만</td>
            <td class="num" style="border:none;"><strong>0(BEP)</strong></td>
            <td class="num" style="border:none;color:#48bb78;">+49백만</td>
          </tr>
          <tr>
            <td style="color:#e2e8f0;border:none;">25FW 판매율</td>
            <td class="num" style="border:none;">30.4%</td>
            <td class="num" style="border:none;"><strong>45%</strong></td>
            <td class="num" style="border:none;color:#48bb78;">+14.6%p</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="box box-blue">
        <div class="box-title blue">📝 경영진 핵심 메시지</div>
        <div style="font-size:8px;line-height:1.45;">
          1월 실판매출 468백만원(YoY +108%)으로 외형 성장세는 뚜렷하나, <strong>영업적자 914백만원(영업이익률 -214.9%)</strong>으로 성장과 수익성 간 괴리가 심각합니다.
          직영점(+155%)·제휴몰(+146%)·아울렛(+171%) 3대 채널의 폭발적 성장은 긍정적이나, <strong>할인율 35.7%(+11.4%p)</strong>과 <strong>영업비 159.3%(매출 대비)</strong>가 수익성을 잠식하고 있습니다.
          한남 플래그십 스토어의 매출 성장을 통한 BEP 달성, 제휴몰 할인율 상한제 도입, 영업비 20% 절감을 1분기 내 완료하여 <strong>직접이익률 -55.6% → -20%</strong> 회복이 시급합니다.
        </div>
      </div>
    </div>
  </div>

  <hr class="divider">

  <!-- ========== 2. Executive Summary ========== -->
  <div class="page-title" id="sec2">2. Executive Summary - 핵심 실적, KPI, 주요 이슈 요약</div>

  <div class="section">
    <div class="section-title">📊 핵심 경영 지표</div>
    <div class="kpi-grid">
      <div class="kpi-box">
        <div class="kpi-label">실판매출</div>
        <div class="kpi-value">468백만원</div>
        <div class="kpi-change up">▲ YoY 208% (+243백만원)</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-label">영업이익</div>
        <div class="kpi-value text-red">-914백만원</div>
        <div class="kpi-change down">▼ 적자확대 (-321백만원)</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-label">영업이익률</div>
        <div class="kpi-value text-red">-214.9%</div>
        <div class="kpi-change down">▼ -64.5%p (전년 -150.4%)</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-label">할인율</div>
        <div class="kpi-value text-red">35.7%</div>
        <div class="kpi-change down">▼ +11.4%p (전년 24.3%)</div>
      </div>
    </div>
    <div class="kpi-grid" style="margin-top:5px;">
      <div class="kpi-box">
        <div class="kpi-label">직접이익률</div>
        <div class="kpi-value text-red">-55.6%</div>
        <div class="kpi-change down">▼ -27.9%p (전년 -27.7%)</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-label">매출이익률</div>
        <div class="kpi-value text-red">29.1%</div>
        <div class="kpi-change down">▼ -27.4%p (전년 56.5%)</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-label">25FW 판매율</div>
        <div class="kpi-value">30.4%</div>
        <div class="kpi-change up">▲ +7.1%p (전년 23.3%)</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-label">기말재고(TAG)</div>
        <div class="kpi-value">321억원</div>
        <div class="kpi-change up">▲ YoY 96% (-14억)</div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="left">
      <div class="section">
        <div class="section-title">📈 채널별 실적 요약</div>
        <table>
          <tbody>
          <tr><th>채널</th><th class="num">매출</th><th class="num">YoY</th><th class="num">비중</th></tr>
          <tr class="highlight-row"><td><strong>직영점</strong></td><td class="num"><strong>114</strong></td><td class="num"><span class="badge-up">255%</span></td><td class="num">24.4%</td></tr>
          <tr class="highlight-row"><td><strong>제휴몰</strong></td><td class="num"><strong>110</strong></td><td class="num"><span class="badge-up">246%</span></td><td class="num">23.6%</td></tr>
          <tr class="highlight-row"><td><strong>아울렛</strong></td><td class="num"><strong>81</strong></td><td class="num"><span class="badge-up">271%</span></td><td class="num">17.4%</td></tr>
          <tr><td>면세점</td><td class="num">77</td><td class="num"><span class="badge-up">247%</span></td><td class="num">16.4%</td></tr>
          <tr><td>자사몰</td><td class="num">76</td><td class="num"><span class="badge-up">158%</span></td><td class="num">16.2%</td></tr>
          <tr class="danger-row"><td><strong>백화점</strong></td><td class="num"><strong>9</strong></td><td class="num"><span class="badge-down">17%</span></td><td class="num">2.0%</td></tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <div class="section-title">🏷️ 아이템별 실적 요약</div>
        <table>
          <tbody>
          <tr><th>카테고리</th><th class="num">매출</th><th class="num">YoY</th><th class="num">비중</th></tr>
          <tr class="highlight-row"><td><strong>과시즌 의류</strong></td><td class="num"><strong>172</strong></td><td class="num"><span class="badge-up">298%</span></td><td class="num">36.8%</td></tr>
          <tr><td>25F 의류</td><td class="num">110</td><td class="num"><span class="badge-down">74%</span></td><td class="num">23.6%</td></tr>
          <tr class="success-row"><td><strong>차기시즌</strong></td><td class="num"><strong>63</strong></td><td class="num"><span class="badge-up">703%</span></td><td class="num">13.4%</td></tr>
          <tr><td>25S 의류</td><td class="num">62</td><td class="num"><span class="badge-down">55%</span></td><td class="num">13.2%</td></tr>
          <tr><td>신발</td><td class="num">23</td><td class="num">-</td><td class="num">4.9%</td></tr>
          <tr><td>모자</td><td class="num">18</td><td class="num">-</td><td class="num">3.8%</td></tr>
          <tr><td>가방</td><td class="num">14</td><td class="num">-</td><td class="num">3.0%</td></tr>
          <tr><td>기타ACC</td><td class="num">6</td><td class="num">-</td><td class="num">1.3%</td></tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <div class="section-title">💰 손익 구조</div>
        <table>
          <tbody>
          <tr><th>항목</th><th class="num">금액</th><th class="num">비율</th></tr>
          <tr><td>TAG 매출</td><td class="num">728</td><td class="num">-</td></tr>
          <tr><td>할인액</td><td class="num">-260</td><td class="num">35.7%</td></tr>
          <tr class="total-row"><td>실판매출</td><td class="num">468</td><td class="num">100%</td></tr>
          <tr><td>매출이익</td><td class="num">136</td><td class="num">29.1%</td></tr>
          <tr><td>직접비</td><td class="num">-360</td><td class="num">-84.7%</td></tr>
          <tr class="danger-row"><td><strong>직접이익</strong></td><td class="num text-red"><strong>-237</strong></td><td class="num text-red"><strong>-55.6%</strong></td></tr>
          <tr><td>영업비</td><td class="num">-678</td><td class="num">-159.3%</td></tr>
          <tr class="danger-row"><td><strong>영업이익</strong></td><td class="num text-red"><strong>-914</strong></td><td class="num text-red"><strong>-214.9%</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="right">
      <div class="box box-red">
        <div class="box-title red">🔴 Critical Risk</div>
        <ul>
          <li><strong>영업적자 914백만원</strong> — 직접이익 -237백만원 + 영업비 678백만원 = 구조적 적자</li>
          <li><strong>할인율 고착화</strong> 35.7%(+11.4%p) — 제휴몰 53%, 아울렛 46.5%, 신발 60.1%</li>
          <li><strong>영업비 폭발</strong> 678백만원(매출 대비 159.3%) — 광고비 260백만(+239%), 임차료 94백만(+1,160%)</li>
          <li><strong>과시즌 재고 161억</strong>(50.3%) — YoY 177%, 소진 불투명</li>
          <li><strong>자사몰 급락</strong> 76백만원(MOM -41.5%) — 성장 동력 상실</li>
        </ul>
      </div>

      <div class="box box-green">
        <div class="box-title green">🟢 Positive Signal</div>
        <ul>
          <li><strong>3대 채널 폭발 성장</strong> 직영점 +155%, 제휴몰 +146%, 아울렛 +171%</li>
          <li><strong>25FW 판매율 개선</strong> 30.4%(+7.1%p) — 다운점퍼 38.9%(+23.5%p) 호조</li>
          <li><strong>면세점 정가 판매</strong> 할인율 11.6%로 최저, 유일 흑자(+6백만원)</li>
          <li><strong>자사몰 수익 구조</strong> 직접이익률 46.2%, 수수료 無, 최고 효율 채널</li>
          <li><strong>스커트 판매율 56.5%</strong>(+11.4%p) — ST 시그니처 아이템 확인</li>
          <li><strong>기말재고 YoY 96%</strong> 총량 관리 개선(-14억원)</li>
        </ul>
      </div>

      <div class="box box-blue">
        <div class="box-title blue">💡 1월 Key Point</div>
        <ul>
          <li>과시즌 의류(172백만)가 1월 매출의 36.8% 차지, YoY 298%로 성장 견인</li>
          <li>직영점·제휴몰·아울렛 3대 채널이 전체 매출의 65.4% 차지</li>
          <li>면세점 스커트(28백만원) 해외 수요 견인 → 정가 판매 모델 확인</li>
          <li>TAG 728백만 vs 실판 468백만 = 할인액 260백만(35.7%) 과다</li>
          <li>영업비(678백만)가 매출(468백만)을 초과하는 비정상 구조 즉시 정상화 필요</li>
        </ul>
      </div>
    </div>
  </div>

  <hr class="divider">

  <!-- ========== 3. 채널별 상세 분석 ========== -->
  <div class="page-title" id="sec3">3. 채널별 상세 분석 - 고성장 vs 부진 채널, 매장별 기여도 분석</div>

  <div class="container">
    <div class="left">
      <div class="section">
        <div class="section-title">🚀 고성장 채널 분석</div>
        
        <div class="box box-green">
          <div class="box-title green">직영점: 매출 114백만원 (YoY +155%)</div>
          <ul>
            <li><strong>할인율:</strong> 25.6% — 한남 19.6%, 롯데월드 33.6%, 코엑스 23.1%</li>
            <li><strong>직접이익:</strong> -109백만원, 이익률 -104.6% (전 매장 적자)</li>
            <li><strong>매장:</strong> 5개(+2개), 점당매출 23백만원(YoY 92%)</li>
          </ul>
          
          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">매장별 실적 (전 매장 적자)</div>
          <table style="margin-top:2px;">
            <tbody>
            <tr><th>매장명</th><th class="num">매출</th><th class="num">직접이익</th><th class="num">이익률</th><th class="num">할인율</th></tr>
            <tr class="warn-row"><td>한남점(직)</td><td class="num">39</td><td class="num text-red">-49</td><td class="num">-125.6%</td><td class="num">19.6%</td></tr>
            <tr><td>롯데월드(직)</td><td class="num">39</td><td class="num text-red">-15</td><td class="num">-38.5%</td><td class="num">33.6%</td></tr>
            <tr><td>스타필드코엑스(직)</td><td class="num">21</td><td class="num text-red">-13</td><td class="num">-61.9%</td><td class="num">23.1%</td></tr>
            <tr class="danger-row"><td>스타필드수원(직)</td><td class="num">9</td><td class="num text-red"><strong>-32</strong></td><td class="num">-355.6%</td><td class="num">27.2%</td></tr>
            <tr><td>강남사옥(직)</td><td class="num">6</td><td class="num text-red">-1</td><td class="num">-</td><td class="num">2.5%</td></tr>
            </tbody>
          </table>
          
          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">핵심 인사이트</div>
          <ul style="margin-top:2px;font-size:7px;">
            <li>한남 플래그십: 매출 39백만원으로 롯데월드와 동률 — 매출 성장을 통한 BEP 달성이 핵심 과제</li>
            <li>스타필드수원: 매출 대비 직접이익 -355.6%로 최악의 효율, 임대료 재협상 필수</li>
            <li>기존 매장 잠식: 롯데월드 MOM -27.8%, 코엑스 MOM -48.8% 급락</li>
          </ul>
        </div>

        <div class="box box-green">
          <div class="box-title green">제휴몰: 매출 110백만원 (YoY +146%)</div>
          <ul>
            <li><strong>할인율:</strong> 53.0%(전년 29.0%, +24.0%p) — 전 채널 최고</li>
            <li><strong>직접이익:</strong> +27백만원, 이익률 26.6%</li>
            <li><strong>수수료율:</strong> 무신사 29.8%, 29CM 33.9%</li>
          </ul>
          
          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">매장별 실적</div>
          <table style="margin-top:2px;">
            <tbody>
            <tr><th>매장명</th><th class="num">매출</th><th class="num">직접이익</th><th class="num">할인율</th><th class="num">수수료</th></tr>
            <tr><td>무신사</td><td class="num">54</td><td class="num">12</td><td class="num">55.1%</td><td class="num">29.8%</td></tr>
            <tr><td>29CM</td><td class="num">28</td><td class="num">6</td><td class="num">47.0%</td><td class="num">33.9%</td></tr>
            <tr class="warn-row"><td>SSF샵</td><td class="num">12</td><td class="num">-</td><td class="num">52.4%</td><td class="num">31.3%</td></tr>
            </tbody>
          </table>
          
          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">핵심 인사이트</div>
          <ul style="margin-top:2px;font-size:7px;">
            <li>전월 대비 급락: 전월 189백만원 → 당월 110백만원(-41.3%), 프로모션 종료 영향</li>
            <li>할인 50%+ 고착화: 무신사 55.1%, SSF샵 52.4%로 구조적 저수익</li>
            <li>SSF샵 YoY -53.8% 역성장: 파트너십 재검토 필요</li>
          </ul>
        </div>

        <div class="box box-green">
          <div class="box-title green">아울렛: 매출 81백만원 (YoY +171%)</div>
          <ul>
            <li><strong>할인율:</strong> 46.5% — 과시즌 재고 소진 채널</li>
            <li><strong>매장:</strong> 3개(+2개), 점당매출 27백만원(YoY 57%)</li>
          </ul>
          
          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">매장별 실적</div>
          <table style="margin-top:2px;">
            <tbody>
            <tr><th>매장명</th><th class="num">매출</th><th class="num">점유율</th><th class="num">MOM</th></tr>
            <tr class="success-row"><td><strong>롯데기흥</strong></td><td class="num"><strong>60</strong></td><td class="num"><strong>73.2%</strong></td><td class="num text-green">+25.0%</td></tr>
            <tr class="warn-row"><td>롯데이천</td><td class="num">12</td><td class="num">14.6%</td><td class="num text-red">-33.3%</td></tr>
            <tr class="warn-row"><td>롯데고양</td><td class="num">10</td><td class="num">12.2%</td><td class="num text-red">-16.7%</td></tr>
            </tbody>
          </table>
          
          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">핵심 인사이트</div>
          <ul style="margin-top:2px;font-size:7px;">
            <li>기흥 독주: 아울렛 전체의 73.2%를 단독 견인, 편중 리스크</li>
            <li>신규 매장 조기 둔화: 이천·고양 오픈 2개월 만에 MOM -33%, -17%</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="section">
        <div class="section-title">📉 부진 채널 분석</div>
        
        <div class="box box-red">
          <div class="box-title red">백화점: 매출 9백만원 (YoY -83%)</div>
          <ul>
            <li><strong>할인율:</strong> 15.7% — 채널 내 적정 수준</li>
            <li><strong>직접이익:</strong> -13백만원, 이익률 적자</li>
            <li><strong>매장:</strong> 2개(-8개), 점당매출 5백만원</li>
          </ul>
          
          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">매장별 실적</div>
          <table style="margin-top:2px;">
            <tbody>
            <tr><th>매장명</th><th class="num">매출</th><th class="num">직접이익</th><th class="num">YoY</th></tr>
            <tr><td>롯데중동</td><td class="num">6</td><td class="num text-red">-7</td><td class="num"><span class="badge-up">+101%</span></td></tr>
            <tr><td>롯데관악</td><td class="num">3</td><td class="num text-red">-6</td><td class="num"><span class="badge-up">+150%</span></td></tr>
            </tbody>
          </table>
          
          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">핵심 인사이트</div>
          <ul style="margin-top:2px;font-size:7px;">
            <li>채널 기능 실질 상실: 전년 54백만원 → 9백만원(-83%), 데이터 오류 가능성 검증 필요</li>
            <li>잔여 2개 매장 모두 적자이나 YoY 성장세(중동 +101%, 관악 +150%) 회복 중</li>
          </ul>
        </div>

        <div class="box box-yellow">
          <div class="box-title yellow">자사몰: 매출 76백만원 (YoY +58%)</div>
          <ul>
            <li><strong>할인율:</strong> 14.9%(전년 2.5%, +12.4%p) — 급등 주의</li>
            <li><strong>직접이익:</strong> +32백만원, 이익률 46.2% (전 채널 최고)</li>
          </ul>

          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">핵심 인사이트</div>
          <ul style="margin-top:2px;font-size:7px;">
            <li>전월 대비 -41.5% 급락(129백만원→76백만원): 성장 동력 약화</li>
            <li>직접이익률 46.2%로 수수료 無 구조 유지, 수익성 최고 채널</li>
            <li>제휴몰(110백만원)에 매출 역전 → 자사몰 전용 혜택 강화 시급</li>
          </ul>
        </div>

        <div class="box box-blue">
          <div class="box-title blue">면세점: 매출 77백만원 (YoY +47%)</div>
          <ul>
            <li><strong>할인율:</strong> 11.6% — 전 채널 최저, 정가 판매 모범 채널</li>
            <li><strong>직접이익:</strong> +6백만원, 이익률 7.8% (유일 흑자)</li>
            <li><strong>매장:</strong> 신라면세용산 1개</li>
          </ul>
          
          <div style="font-size:8px;font-weight:bold;margin:6px 0 3px 0;">핵심 인사이트</div>
          <ul style="margin-top:2px;font-size:7px;">
            <li>유일한 흑자 오프라인 채널: 정가 판매 + 해외 수요 → 브랜드 가치 유지</li>
            <li>스커트(28백만원) 해외 수요 견인, 면세 전용 아이템 확대 기회</li>
          </ul>
        </div>
      </div>

      <div class="section" style="margin-top:6px;">
        <div class="section-title">🌐 온라인 채널 수익구조 비교 (L12M)</div>
        <table>
          <tbody>
          <tr><th>구분</th><th class="num">자사몰</th><th class="num">제휴몰</th><th class="num">격차</th></tr>
          <tr><td>매출액</td><td class="num">1,634</td><td class="num">2,396</td><td class="num">1.5배</td></tr>
          <tr><td>매출성장률</td><td class="num"><span class="badge-down">-17%</span></td><td class="num"><span class="badge-up">+203%</span></td><td class="num">-220%p</td></tr>
          <tr class="highlight-row"><td><strong>직접이익률</strong></td><td class="num"><strong>52.4%</strong></td><td class="num">26.1%</td><td class="num text-green"><strong>+26.3%p</strong></td></tr>
          <tr><td>유통수수료율</td><td class="num text-green">0%</td><td class="num">30.9%</td><td class="num text-green">-30.9%p</td></tr>
          <tr><td>할인율</td><td class="num">30.5%</td><td class="num">50.7%</td><td class="num text-green">-20.2%p</td></tr>
          </tbody>
        </table>

        <table style="margin-top:6px;">
          <tbody>
          <tr><th>자사몰 세부</th><th class="num">매출</th><th class="num">이익률</th><th class="num">할인율</th></tr>
          <tr class="success-row"><td>카페24</td><td class="num">908</td><td class="num"><strong>56.1%</strong></td><td class="num">11.0%</td></tr>
          <tr><td>온라인쇼핑몰(직)</td><td class="num">726</td><td class="num">47.7%</td><td class="num">45.5%</td></tr>
          </tbody>
        </table>

        <div class="insight-box">
          <div class="insight-title">💡 인사이트</div>
          <span style="font-size:8px;">자사몰은 수수료 無 구조로 직접이익률 52.4% 달성(제휴몰 대비 +26.3%p). 카페24(56.1%) 급감(-53.9%) → 온라인쇼핑몰(직)로 카니발라이제이션 추정. 자사몰 매출 회복이 수익성 개선의 핵심 레버.</span>
        </div>
      </div>

      <div class="section" style="margin-top:8px;">
        <div class="section-title">📊 채널별 할인율 비교</div>
        <table>
          <tbody>
          <tr><th>채널</th><th class="num">할인율</th><th class="num">전년</th><th class="num">증감</th></tr>
          <tr class="success-row"><td>면세점</td><td class="num"><strong>11.6%</strong></td><td class="num">7.0%</td><td class="num">+4.6%p</td></tr>
          <tr><td>자사몰</td><td class="num">14.9%</td><td class="num">2.5%</td><td class="num text-red">+12.4%p</td></tr>
          <tr><td>백화점</td><td class="num">15.7%</td><td class="num">-</td><td class="num">-</td></tr>
          <tr class="warn-row"><td>직영점</td><td class="num">25.6%</td><td class="num">-</td><td class="num">-</td></tr>
          <tr class="danger-row"><td><strong>아울렛</strong></td><td class="num"><strong>46.5%</strong></td><td class="num">-</td><td class="num">-</td></tr>
          <tr class="danger-row"><td><strong>제휴몰</strong></td><td class="num"><strong>53.0%</strong></td><td class="num">29.0%</td><td class="num text-red"><strong>+24.0%p</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <hr class="divider">

  <!-- ========== 4. 상품/재고 분석 ========== -->
  <div class="page-title" id="sec4">4. 상품/재고 분석 - 25FW 판매율, 기말재고 리스크, 원가율 분석</div>

  <div class="container">
    <div class="left">
      <div class="section">
        <div class="section-title">📊 25FW 시즌 판매율 TOP5</div>
        
        <div class="grid-2">
          <div class="kpi-box">
            <div class="kpi-label">25FW 판매율</div>
            <div class="kpi-value">30.4%</div>
            <div class="kpi-change up">전년 23.3% (+7.1%p)</div>
          </div>
          <div class="kpi-box">
            <div class="kpi-label">M/U 발주배율</div>
            <div class="kpi-value">3.67</div>
            <div class="kpi-change">전년 3.63 (+0.04)</div>
          </div>
        </div>

        <table style="margin-top:6px;">
          <tbody>
          <tr><th>아이템</th><th class="num">판매율</th><th class="num">전년</th><th class="num">증감</th></tr>
          <tr class="success-row"><td><strong>스커트</strong></td><td class="num"><strong>56.5%</strong></td><td class="num">45.1%</td><td class="num text-green"><strong>+11.4%p</strong></td></tr>
          <tr class="success-row"><td><strong>다운점퍼</strong></td><td class="num"><strong>38.9%</strong></td><td class="num">15.4%</td><td class="num text-green"><strong>+23.5%p</strong></td></tr>
          <tr><td>폴로 티셔츠</td><td class="num">32.0%</td><td class="num">24.6%</td><td class="num text-green">+7.4%p</td></tr>
          <tr><td>니트풀오버</td><td class="num">28.4%</td><td class="num">19.4%</td><td class="num text-green">+9.0%p</td></tr>
          <tr class="warn-row"><td>맨투맨</td><td class="num">25.5%</td><td class="num">28.0%</td><td class="num text-red">-2.5%p</td></tr>
          </tbody>
        </table>
        <ul style="margin-top:5px;font-size:7px;">
          <li><strong>스커트·다운점퍼:</strong> ST 시그니처 아이템, 면세점 수요 견인</li>
          <li><strong>다운점퍼 판매율 +23.5%p:</strong> 전년 대비 최대 폭 개선</li>
          <li><strong>맨투맨 유일 역성장:</strong> -2.5%p, 상품력 점검 필요</li>
        </ul>
      </div>

      <div class="section">
        <div class="section-title">🏭 기말재고 (321억, YoY 96%)</div>
        <table>
          <tbody>
          <tr><th>카테고리</th><th class="num">재고(TAG)</th><th class="num">YoY</th><th class="num">구성비</th><th class="num">위험도</th></tr>
          <tr class="danger-row"><td><strong>과시즌 의류</strong></td><td class="num"><strong>16,138</strong></td><td class="num"><span class="badge-down">177%</span></td><td class="num"><strong>50.3%</strong></td><td class="num text-red"><strong>Critical</strong></td></tr>
          <tr class="warn-row"><td>차기시즌</td><td class="num">4,208</td><td class="num"><span class="badge-warn">230%</span></td><td class="num">13.1%</td><td class="num">주의</td></tr>
          <tr class="success-row"><td>25F 의류</td><td class="num">3,697</td><td class="num"><span class="badge-up">56%</span></td><td class="num">11.5%</td><td class="num text-green">양호</td></tr>
          <tr class="success-row"><td>25S 의류</td><td class="num">3,634</td><td class="num"><span class="badge-up">36%</span></td><td class="num">11.3%</td><td class="num text-green">양호</td></tr>
          <tr><td>신발</td><td class="num">1,972</td><td class="num">60%</td><td class="num">6.1%</td><td class="num text-green">양호</td></tr>
          <tr><td>모자</td><td class="num">912</td><td class="num">-</td><td class="num">2.8%</td><td class="num">-</td></tr>
          <tr><td>가방</td><td class="num">847</td><td class="num">-</td><td class="num">2.6%</td><td class="num">-</td></tr>
          <tr><td>기타ACC</td><td class="num">690</td><td class="num">-</td><td class="num">2.1%</td><td class="num">-</td></tr>
          <tr class="total-row"><td><strong>합계</strong></td><td class="num"><strong>32,097</strong></td><td class="num"><strong>96%</strong></td><td class="num"><strong>100%</strong></td><td class="num">-</td></tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <div class="section-title">🏭 ACC 재고주수 현황</div>
        <table>
          <tbody>
          <tr><th>카테고리</th><th class="num">당해</th><th class="num">전년</th><th class="num">증감</th></tr>
          <tr class="total-row"><td>전체 ACC</td><td class="num">181.8주</td><td class="num">236.6주</td><td class="num text-green">-54.8주</td></tr>
          <tr class="danger-row"><td><strong>기타ACC</strong></td><td class="num"><strong>421.9주</strong></td><td class="num">318.2주</td><td class="num text-red"><strong>+103.7주</strong></td></tr>
          <tr class="warn-row"><td>가방</td><td class="num">192.3주</td><td class="num">136.8주</td><td class="num text-red">+55.5주</td></tr>
          <tr class="warn-row"><td>모자</td><td class="num">190.0주</td><td class="num">156.0주</td><td class="num text-red">+34.0주</td></tr>
          <tr class="success-row"><td><strong>신발</strong></td><td class="num"><strong>146.3주</strong></td><td class="num">341.4주</td><td class="num text-green"><strong>-195.1주</strong></td></tr>
          </tbody>
        </table>
        <ul style="margin-top:5px;font-size:7px;">
          <li><strong>신발 대폭 개선:</strong> -195.1주로 전년 대비 최대 개선</li>
          <li><strong>기타ACC 악화:</strong> +103.7주, 재고 장기화 심각</li>
        </ul>
      </div>
    </div>

    <div class="right">
      <div class="section">
        <div class="section-title">🏷️ 25FW 시즌별 원가율 분석</div>
        
        <table>
          <thead>
            <tr>
              <th>카테고리</th>
              <th class="num">원가율</th>
              <th class="num">증감</th>
              <th class="num">원부자재</th>
              <th class="num">공임</th>
            </tr>
          </thead>
          <tbody>
            <tr class="total-row">
              <td>전체</td>
              <td class="num">27.2%</td>
              <td class="num text-green">-0.4%p</td>
              <td class="num">10.8%</td>
              <td class="num">11.2%</td>
            </tr>
            <tr class="warn-row">
              <td><strong>OUTER</strong></td>
              <td class="num"><strong>33.0%</strong></td>
              <td class="num text-red"><strong>+3.4%p</strong></td>
              <td class="num">-</td>
              <td class="num"><strong>14.1%</strong></td>
            </tr>
            <tr class="success-row">
              <td>INNER</td>
              <td class="num">25.1%</td>
              <td class="num text-green">-1.5%p</td>
              <td class="num">-</td>
              <td class="num">-</td>
            </tr>
            <tr>
              <td>BOTTOM</td>
              <td class="num">26.6%</td>
              <td class="num text-red">+0.5%p</td>
              <td class="num">-</td>
              <td class="num">-</td>
            </tr>
          </tbody>
        </table>

        <div class="box box-red" style="margin-top:7px;">
          <div class="box-title red">⚠️ 원가 상승 세부 요인</div>
          <table style="margin-top:4px;">
            <tbody>
            <tr><th>원가 구성</th><th class="num">당해</th><th class="num">전년</th><th class="num">증감</th></tr>
            <tr><td>원부자재</td><td class="num">10.8%</td><td class="num">12.7%</td><td class="num text-green">-1.9%p</td></tr>
            <tr><td>아트웍</td><td class="num">0.9%</td><td class="num">1.6%</td><td class="num text-green">-0.7%p</td></tr>
            <tr class="danger-row"><td><strong>공임</strong></td><td class="num"><strong>11.2%</strong></td><td class="num">9.2%</td><td class="num text-red"><strong>+2.0%p</strong></td></tr>
            </tbody>
          </table>
          <ul style="margin-top:5px;font-size:7px;">
            <li><strong>핵심:</strong> 전체 원가율 -0.4%p 개선이나, OUTER 공임 14.1%(+3.6%p) 급등</li>
            <li><strong>OUTER 기타경비:</strong> 2.1%(+1.3%p) 급증 → 비용 통제 필요</li>
            <li><strong>INNER 최고 효율:</strong> 원가율 25.1%(-1.5%p), 원가 절감 모범 사례</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section-title">🏷️ 25FW/25N 할인율 TOP 아이템</div>
        <table>
          <tbody>
          <tr><th>상품명</th><th class="num">매출</th><th class="num">할인율</th><th>주력채널</th></tr>
          <tr class="success-row"><td>W 타키니 플라잉 스커트</td><td class="num">7</td><td class="num">16.7%</td><td>면세점 58.2%</td></tr>
          <tr><td>W MC 하프집업 플리스</td><td class="num">5</td><td class="num">-</td><td>직영점 중심</td></tr>
          <tr><td>U 스트라이프 스웨터 폴로</td><td class="num">4</td><td class="num">13.8%</td><td>직영점 62.3%</td></tr>
          <tr><td>W 타키니 플레잉 폴로</td><td class="num">3</td><td class="num">20.1%</td><td>직영점 51.4%</td></tr>
          </tbody>
        </table>
        <ul style="margin-top:5px;font-size:7px;">
          <li><strong>타키니 스커트:</strong> 면세점 58.2% 비중, 정가 판매(할인율 7.0%) 성공</li>
          <li><strong>직영점:</strong> 20~42% 할인으로 재고 소진 역할, 브랜드 가치 훼손 주의</li>
          <li><strong>면세점:</strong> 0~10% 저할인으로 정가 판매 채널 역할 명확</li>
        </ul>
      </div>

      <div class="box box-yellow" style="margin-top:7px;">
        <div class="box-title yellow">⚠️ 재고 리스크 요약</div>
        <ul>
          <li><strong>과시즌 161억(50.3%):</strong> 1년차 40%, 2년차 60% 할인 소진 계획, 소진 불투명</li>
          <li><strong>25SS 잔여 63억 예상:</strong> 목표 소진 48억, 추가 아울렛 팝업 필요</li>
          <li><strong>캐리오버 50억(30%):</strong> FW 과시즌 할인 제한하여 브랜드 가치 유지</li>
          <li><strong>ACC 재고주수 181.8주:</strong> 기타ACC 421.9주, 가방 192.3주 장기체류 심각</li>
        </ul>
      </div>
    </div>
  </div>

  <hr class="divider">

  <!-- ========== 5. 매장 효율성 ========== -->
  <div class="page-title" id="sec5">5. 매장 효율성 - 채널별 매장 현황, TOP/BOTTOM, 개선 방안</div>

  <div class="container">
    <div class="left">
      <div class="section">
        <div class="section-title">🏪 채널별 매장 현황</div>
        <table>
          <tbody>
          <tr><th>채널</th><th class="num">매장수</th><th class="num">증감</th><th class="num">점당매출</th><th class="num">YoY</th></tr>
          <tr class="danger-row"><td><strong>백화점</strong></td><td class="num"><strong>2개</strong></td><td class="num text-red"><strong>-8</strong></td><td class="num">5</td><td class="num"><span class="badge-down">-</span></td></tr>
          <tr><td>직영점</td><td class="num">5개</td><td class="num text-green">+2</td><td class="num">23</td><td class="num"><span class="badge-down">92%</span></td></tr>
          <tr><td>면세점</td><td class="num">1개</td><td class="num">-</td><td class="num"><strong>77</strong></td><td class="num"><span class="badge-up">148%</span></td></tr>
          <tr><td>아울렛</td><td class="num">3개</td><td class="num text-green">+2</td><td class="num">27</td><td class="num"><span class="badge-down">57%</span></td></tr>
          <tr class="total-row"><td><strong>TOTAL</strong></td><td class="num"><strong>11개</strong></td><td class="num text-red"><strong>-4</strong></td><td class="num"><strong>26</strong></td><td class="num"><span class="badge-up"><strong>173%</strong></span></td></tr>
          </tbody>
        </table>
      </div>

      <div class="box box-green">
        <div class="box-title green">🏆 직접이익 TOP5 매장</div>

        <div style="font-size:8px;font-weight:bold;margin:5px 0 3px 0;color:#276749;">자사몰 (최고 수익 이익률 46.2%)</div>
        <table style="margin-top:2px;">
          <tbody>
          <tr><th>매장명</th><th class="num">직접이익</th><th class="num">이익률</th></tr>
          <tr class="highlight-row"><td><strong>온라인쇼핑몰(직)</strong></td><td class="num"><strong>+32</strong></td><td class="num"><strong>46.2%</strong></td></tr>
          </tbody>
        </table>

        <div style="font-size:8px;font-weight:bold;margin:8px 0 3px 0;color:#276749;">제휴몰 (흑자 이익률 26.6%)</div>
        <table style="margin-top:2px;">
          <tbody>
          <tr><th>매장명</th><th class="num">직접이익</th><th class="num">YoY</th><th class="num">이익률</th></tr>
          <tr class="success-row"><td>무신사</td><td class="num">+12</td><td class="num">+211%</td><td class="num">22.2%</td></tr>
          <tr><td>29CM</td><td class="num">+6</td><td class="num">N/A</td><td class="num">21.4%</td></tr>
          </tbody>
        </table>

        <div style="font-size:8px;font-weight:bold;margin:8px 0 3px 0;color:#276749;">아울렛·면세점</div>
        <table style="margin-top:2px;">
          <tbody>
          <tr><th>매장명</th><th class="num">직접이익</th><th class="num">YoY</th><th class="num">이익률</th></tr>
          <tr><td>롯데아울렛기흥</td><td class="num">+11</td><td class="num">+378%</td><td class="num">18.3%</td></tr>
          <tr><td>신라면세용산</td><td class="num">+6</td><td class="num">+47%</td><td class="num">7.8%</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="right">
      <div class="box box-red">
        <div class="box-title red">🚨 적자 매장 현황 - 즉시 조치 필요</div>
        
        <div style="font-size:8px;font-weight:bold;margin:5px 0 3px 0;">직영점 적자 매장 (5개 전원)</div>
        <table style="margin-top:2px;">
          <tbody>
          <tr><th>매장명</th><th class="num">매출</th><th class="num">직접이익</th><th class="num">할인율</th><th class="num">조치</th></tr>
          <tr class="warn-row"><td><strong>한남점(직)</strong></td><td class="num">39</td><td class="num text-red"><strong>-49</strong></td><td class="num">19.6%</td><td class="num">매출성장→BEP</td></tr>
          <tr class="danger-row"><td>스타필드수원(직)</td><td class="num">9</td><td class="num text-red">-32</td><td class="num">27.2%</td><td class="num">임대료 재협상</td></tr>
          <tr class="warn-row"><td>롯데월드(직)</td><td class="num">39</td><td class="num text-red">-15</td><td class="num">33.6%</td><td class="num">할인율 정상화</td></tr>
          <tr><td>스타필드코엑스(직)</td><td class="num">21</td><td class="num text-red">-13</td><td class="num">23.1%</td><td class="num">매출 성장세</td></tr>
          <tr><td>강남사옥(직)</td><td class="num">6</td><td class="num text-red">-1</td><td class="num">2.5%</td><td class="num">소규모 운영</td></tr>
          </tbody>
        </table>
        <ul style="margin-top:5px;font-size:7px;">
          <li><strong>한남 플래그십:</strong> 첫 플래그십 스토어, 매출 성장 가속을 통한 BEP 달성 목표</li>
          <li><strong>스타필드수원:</strong> 매출 YoY -48.6%로 급감, 임대료 재협상 3개월 모니터링</li>
          <li><strong>롯데월드:</strong> 할인율 33.6%(전년比 +1.6%p) 과다, 25% 이하 정상화</li>
        </ul>

        <div style="font-size:8px;font-weight:bold;margin:8px 0 3px 0;">회복 가능 매장 (4개)</div>
        <table style="margin-top:2px;">
          <tbody>
          <tr><th>매장명</th><th class="num">직접이익</th><th class="num">개선 포인트</th></tr>
          <tr><td>스타필드코엑스</td><td class="num">-13</td><td class="num">매출 YoY +44.4%</td></tr>
          <tr><td>롯데중동(백)</td><td class="num">-7</td><td class="num">매출 YoY +101%, 흑자 임박</td></tr>
          <tr><td>롯데관악(백)</td><td class="num">-6</td><td class="num">매출 YoY +150%, 흑자 임박</td></tr>
          <tr class="success-row"><td><strong>신라면세용산</strong></td><td class="num"><strong>+6</strong></td><td class="num">유일 흑자, 이익률 15%+</td></tr>
          </tbody>
        </table>
      </div>

      <div class="box box-yellow">
        <div class="box-title yellow">📊 즉시 조치사항 (1주일 내)</div>
        <table style="margin-top:4px;">
          <tbody>
          <tr><th>조치</th><th>대상</th><th>목표</th></tr>
          <tr><td><strong>한남점 매출 성장 전략</strong></td><td>직영점</td><td>BEP 3개월</td></tr>
          <tr><td>스타필드수원 임대료 재협상</td><td>직영점</td><td>1주일 내</td></tr>
          <tr><td>롯데월드 할인율 25% 이하</td><td>직영점</td><td>즉시</td></tr>
          <tr><td>제휴몰 할인 상한제</td><td>전 제휴몰</td><td>3일 내 공지</td></tr>
          </tbody>
        </table>
      </div>

      <div class="box box-blue">
        <div class="box-title blue">✅ 기대 효과 (월간 기준)</div>
        <ul>
          <li><strong>한남점 BEP 달성 시:</strong> 월 직접이익 +49백만원 개선</li>
          <li><strong>할인율 10%p 인하 시:</strong> 월 직접이익 +47백만원</li>
          <li><strong>영업비 20% 절감 시:</strong> 월 -138백만원 비용 절감</li>
          <li><strong>자사몰 회복 시:</strong> 월 매출 +44백만원, 직접이익 +20백만원</li>
        </ul>
      </div>

      <div class="box box-gray">
        <div class="box-title">📈 매장 효율성 지표 (3개월 목표)</div>
        <table style="margin-top:4px;">
          <tbody>
          <tr><th>지표</th><th class="num">현재</th><th class="num">1개월 목표</th><th class="num">3개월 목표</th></tr>
          <tr><td>적자 매장 수</td><td class="num">7개</td><td class="num">4개</td><td class="num">0개</td></tr>
          <tr><td>직영점 평균 할인율</td><td class="num">25.6%</td><td class="num">20%</td><td class="num">18%</td></tr>
          <tr><td>백화점 직접이익</td><td class="num">-13백만</td><td class="num">-5백만</td><td class="num">+10백만</td></tr>
          <tr><td>한남점 직접이익</td><td class="num">-49백만</td><td class="num">-25백만</td><td class="num">0(BEP)</td></tr>
          <tr><td>ST 전사 직접이익</td><td class="num">-237백만</td><td class="num">-100백만</td><td class="num">흑자 전환</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="footer">
    SERGIO TACCHINI 브랜드 2026년 1월 실적 보고서 | F&amp;F Corporation 경영관리팀 FP&amp;A | 데이터 기준: 2026년 1월 실적 (vs 2025년 1월) | 보고 대상: CEO 및 경영진
  </div>

</div>
`;
