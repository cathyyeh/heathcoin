<!-- markdownlint-disable-file -->
# Task Research: 健康幣與不同人群需求分析

依據使用者需求，建立「台灣衛福部健康署健康幣」倡議之研究文件，聚焦不同年齡與生活型態族群對健康促進、長照參與與健康幣制度的需求差異，並建議適合的 campaign 設計。

## Task Implementation Requests

* 以 Design Thinking 的視角，從同理、定義、概念化、測試角度分析不同 persona 的健康需要與參與障礙
* 針對 30-50、50-65、65-80、80+ 四個年齡層設計適宜的健康幣參與路徑
* 評估健康幣與健康檢查、建身、運動、長照2.0、志工服務、便利商店消費的連結方式
* 提出可能增加參與度的 campaign 建議與落地優先序

## Scope and Success Criteria

* Scope: 聚焦台灣健康署健康幣倡議之短期推廣與中長期擴張方向，含各年齡層與照護關係之需求研究
* Assumptions:
  * 使用者提供之健康幣概念屬於健康促進型數位獎勵制度
  * 政策與實務限制可能影響直接現金化或大規模商店消費兌換
  * 長照2.0 與志工系統可作為健康幣擴張的社會效益場域
* Success Criteria:
  * 研究文件整理出透明的人群需求差異
  * 檢視不同 segment 是否適合健康幣參與
  * 提出具體 campaign 與驗證方向

## Outline

1. 研究背景與目標
2. Design Thinking 人物誌與需求分群
3. Persona 分析：30-50、50-65、65-80、80+
4. 互動及參與障礙分析
5. Campaign 建議與可行路徑
6. 與健康幣擴張方向的關係
7. 建議之下一步行動

## Potential Next Research

* 以實地健康生活資料為基礎研究各年齡層媒體與數位使用習慣
  * Reasoning: 要確認不同 persona 以何種管道接觸健康登入、活動與健康幣獎勵
  * Reference: 目前使用者提供的圖片與 Word 檔案
* 外部政策分析：健康署與衛福部長照2.0 為何可協同規格化
  * Reasoning: 健康幣制度需要明確的部會協作與治理邊界
  * Reference: 及其相關制度文件尚未入研究庫

## Research Executed

### File Analysis

* c:\Gov\115\healthcoin\healthcoin_research_report.md
  * 已存在研究報告內容，包含背景、目標、研究問題、建議策略與可行性評估
* c:\Gov\115\healthcoin\Health and Fitness.docx
  * 目前為文字內容抽取不足，未能確認細部執行架構；此研究以使用者說明為主要 facts
* c:\Gov\115\healthcoin\healthcoin1.jpg
  * 工具已檢視，內容可供設計概念的品牌與視覺語意參考
* c:\Gov\115\healthcoin\healthcoin2.jpg
  * 工具已檢視，內容可供設計概念的品牌與視覺語意參考

### Code Search Results

* No repository implementation specific files found for this campaign idea
  * Matches: none

### External Research

* Web search unavailable in workspace research context
  * Findings: This prompt is scoped to workspace and user-provided artifacts only

### Project Conventions

* Standards referenced: Markdown research conventions and task research prompt
* Instructions followed: hve-core markdown guidance and task research workflow

## Key Discoveries

### Project Structure

目前工作區未發現可用之系統碼、既有健康幣服務平台或專案實作資料，故研究以政策與用戶角色分析為主，較偏概念驗證層級。

### Implementation Patterns

健康幣作為健康促進政策信號，其實作模式可採用下列型態：

* 健康檢查後給予健康幣（第一層激勵）
* 健康任務與健康行為記錄（第二層參與）
* 社區活動與志工服務（第三層公益價值）
* 生活消費型兌換（限定型服務）

### Complete Examples

```text
健康檢查 -> 健康風險評估 -> 健康任務 -> 健康幣得點 -> 對應活動/資源/社區福利
```

### API and Schema Documentation

No API fields or external schema were discovered in workspace research.

### Configuration Examples

```text
Campaign = 健康幣
Audience = 30-50, 50-65, 65-80, 80+
Reward Channel = 檢查, 生活任務, 社區活動, 志工時數, 商店兌換
Administration = 健康署 + 地方衛生局 + 長照2.0 中心
```

## Technical Scenarios

### Scenario 1: 以人群分層設計健康幣活化策略

健康署健康幣若要成功推廣，不能只以全民單一促銷思維出發，而應從不同生活型態與能力狀態中區分不同用戶之需求。

**Requirements:**

* 必須可連接全民健康促進與健康檢查參與
* 需要考量不同年齡層對健康參與之限制與可能性
* 需要為中年、壯年、高齡與失能/長照對象設計不同價值流

**Preferred Approach:**

* 以 Design Thinking 同理分析為起點，主要採分層 campaign 設計
* 針對每個 persona 配置低門檻、可持續、可確認成效的參與任務
* 区分激勵類型：健康自我管理、社會責任、照護支持、社區參與與生活回饋

```text
Persona Cluster -> Needs -> Barriers -> Incentive -> Campaign -> Ledger
```

**Implementation Details:**

此研究建議將健康幣由單一「兌換系統」提升為通用促進型平台。每個 persona 設定一個最重要的首要任務：

* 30-50: 健康檢查與職場/家庭任務
* 50-65: 健康風險改善與照護責任配套
* 65-80: 社區健康站與社區活動
* 80+: 長照照護管理與生活功能維持

```markdown
### persona roadmap

| Persona | Primary Need | Key Barrier | Suggested Campaign |
|---|---|---|---|
| 30-50 | 工作與家庭雙重壓力下健康管理 | 時間與負擔 | 午休健康挑戰、家庭健康護照 |
| 50-65 | 慢性病與照護管理 | 行為習慣與家庭責任 | 健康管理達標挑戰、長照家庭關懷日 |
| 65-80 | 社區健康與功能維持 | 行動能力與交通 | 社區健康站健康幣、長者健康陪伴計畫 |
| 80+ | 生活穩定與照護支持 | 失能與依賴性 | 長照照護成效獎勵、家屬照護支持計畫 |
```

#### Considered Alternatives

* 單純全民抽獎型健康幣宣導：可擴大曝光，但難以形成真實健康行為習慣
* 以高齡長者全量引導型設計：能滿足某些群體，但對中壯年活躍族群不夠多元
* 直接以商店消費兌換型：對參與者易理解，但法規與治理高風險，短期不建議採取

### Scenario 2: 建立健康幣與長照2.0 的雙向互動

長照2.0 可加強健康幣的社會價值，方式是將志工時數、家屬照護活動與社區互助納入健康幣發行條件。

**Requirements:**

* 必須使志工或照護者的參與有可被驗證的成果
* 必須讓高齡與失能者的健康任務由照護人員或社區單位完成
* 必須確保照護與健康促進互為獎勵，而不是互相剝奪

**Preferred Approach:**

* 應建立健康幣與長照服務時數的對照模型，例如義工 1 小時 = 1-2 點，整合至健康幣積點系統
* 讓長照對象與照護者在健康管理任務中分別獲得可視化回饋
* 將長照關懷所屬於社區健康推動而不是單一個人活動

```text
社區關懷站 -> 關懷任務 -> 志工時數 -> 健康幣可得點 -> 社區健康/服務兌換
```

**Implementation Details:**

* 志工協助長者完成健康檢查、健康站陪伴、社區體適能活動者可獲得健康幣
* 照護者參與健康教育與照護記錄，亦可納入加成
* 以服務成果而非單純形式進行審核，避免鼓勵「紙上參與」

#### Considered Alternatives

* 由健康署獨立發行長照用途幣：便於制度切分，但不足以涵蓋緊密照護的社會互動
* 由長照中心單獨推動：對照護目標較聚焦，但缺乏全民健康 uplink 的品牌與行為意願

### Scenario 3: 健康幣包裝的 campaign 路線

若健康幣要從理念轉為參與協議，需要建立一系列 campaign 包裝，使每個 persona 都能看見一條明確的參與路徑。

**Requirements:**

* Campaign 必須明確對應不同使用者中的生活問題與需求
* 功能必須以活動與機制清楚對齊健康服務與健康回饋
* 應少量先行測試，以保留學習與優化空間

**Preferred Approach:**

* 先以三大 campaign 型態推出：健康檢查型、建身與社區型、長照志工型
* 再擴建到商店兌換與折價型的限定用途互動

```text
Campaign Launch -> Health Check -> Exercise & Nutrition -> Volunteer / Long-term Care -> Exchange Platform
```

**Implementation Details:**

```markdown
1. 健康檢查與健康追蹤：
   * 健康篩檢完成後給予入口幣
   * 回填風險評估後給予加成

2. 健身與運動型：
   * 運動幣共享任務與步數挑戰
   * 可用於健身場域、體適能課程與健康站活動

3. 長照志工型：
   * 志工時數換算健康幣與長照貢獻積分
   * 家屬照護與長者陪伴任務獲得加成

4. 生活兌換型：
   * 以限定健康食品、保健品與日用品為兌換項目
   * 不直接提供現金化與未用途別管制
```

#### Considered Alternatives

* 單一品牌廣宣：缺乏分群成熟度
* 一次性抽獎與換卷活動：不利於形成健康行為持續性
* 直接從模板化健康幣兌換區擴張：風險高，宜逐步驗證

## Research Conclusion

從 Design Thinking 的角度看，健康幣的成功不只在於發行一套券值，也在於建立對不同 persona 的同理、不同生活型態的參與通道與可持續的健康行為回饋。30-50 中年族群可被職場與家庭活動設計解放；50-65 壯年族群可從慢性病管理與照護責任出發；65-80 高齡族群則應以社區健康站與健康陪伴活化；80+ 族群更適合由照護體系旁路參與。

建議的短期推動順序如下：

1. 先以健康檢查與健康管理活動帶入健康幣
2. 再與社區健康站、家戶健康任務、社區建身/運動任務接軌
3. 再擴建長照2.0 志工與照護行為的健康幣積分
4. 最後才研議實物/生活化兌換門檻與合作商店場域

研究證據與文件：

* 健康幣研究報告已寫入工作區：[healthcoin_research_report.md](../../../healthcoin_research_report.md)
* 目前工作區尚未發現實作與應用資料庫，故本研究採概念驗證與理論設計為主
