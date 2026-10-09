export interface CaseStudyDetailed {
  title: string;
  student: string;
  timeline: string;
  revenue: string;
  margin: string;
  trafficSource: string;
  pricingStructure: string;
  exactFunnel: string;
  breakdownStory: string;
  keyTakeaway: string;
}

export interface FailureTrap {
  trapNumber: string;
  title: string;
  fatalMistake: string;
  mitigationProtocol: string;
}

export interface SwipeItem {
  type: string;
  title: string;
  purpose: string;
  content: string;
}

export interface PlaybookStepDetailed {
  stepNumber: number; // 1 to 10 (corresponding to page 8 to 17)
  pageNumber: number; // 8 to 17
  title: string;
  subtitle: string;
  objective: string;
  timeToExecute: string;
  deliverable: string;
  detailedWalkthrough: string[];
  goldenRule: string;
  codeOrScriptSnippet?: {
    title: string;
    badge: string;
    type: 'prompt' | 'code' | 'script' | 'json' | 'template';
    description: string;
    content: string;
  };
  tasks: { id: string; text: string; details?: string }[];
}

export interface Branch17PageData {
  branchId: string;
  branchName: string;
  shortName: string;
  targetBenchmark: string;
  badge: string;
  themeColor: 'lime' | 'coral' | 'yellow' | 'lavender' | 'mint';
  techStackList: { name: string; role: string; cost: string }[];
  
  // Part 1: Market & Mechanics (Pages 1 to 5)
  part1: {
    page1MacroReality: {
      headline: string;
      currentLandscape: string;
      whyOldMethodsFail: string;
      modernBuyerExpectations: string;
      marketThesis: string;
    };
    page2UnitEconomics: {
      headline: string;
      calculatorDefaults: {
        traffic: number;
        conversionRate: number;
        aov: number;
        feePercent: number;
        overhead: number;
        unitLabel: string;
      };
      pAndLBreakdown: { item: string; benchmark: string; note: string }[];
      cacLtvBenchmarks: { metric: string; target: string; explanation: string }[];
    };
    page3Architecture: {
      headline: string;
      systemFlowStages: { stage: string; name: string; mechanism: string; output: string }[];
      architectureDiagramNote: string;
    };
    page4AsymmetricLeverage: {
      headline: string;
      leverageVectors: { vector: string; description: string; mathAdvantage: string }[];
    };
    page5FailureAnalysis: {
      headline: string;
      capitalPreservationRule: string;
      traps: FailureTrap[];
    };
  };

  // Part 2: Top Benchmarks & Case Studies (Pages 6 to 7)
  part2: {
    page6CaseStudies: CaseStudyDetailed[];
    page7SwipeFile: {
      headlineFormulas: { formula: string; example: string }[];
      valueStackFramework: { tier: string; offer: string; price: string; anchor: string }[];
      swipeItems: SwipeItem[];
    };
  };

  // Part 3: 10-Step Execution Playbook (Pages 8 to 17)
  part3Steps: PlaybookStepDetailed[];
}
