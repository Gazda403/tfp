export type ColorTheme = 'lime' | 'coral' | 'lavender' | 'mint' | 'yellow';

export interface CaseStudy {
  title: string;
  student: string;
  avatarSeed: string;
  timeline: string;
  revenue: string;
  margin: string;
  funnel: string;
  keyTakeaway: string;
  tag: string;
}

export interface MythItem {
  myth: string;
  reality: string;
  lossPrevention: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
  trend?: string;
}

export interface LessonTask {
  id: string;
  text: string;
  details?: string;
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  duration: string;
  estimatedYield: string;
  summary: string;
  tasks: LessonTask[];
  frameworks: { title: string; desc: string }[];
  goldenRule: string;
}

export interface VaultItem {
  id: string;
  title: string;
  category: 'Cold Outbound DMs' | 'Email Sequences' | 'AI Prompts' | 'Objection Closing' | 'Templates';
  description: string;
  content: string;
  conversionMetric: string;
  tags: string[];
}

export interface ToolItem {
  id: string;
  name: string;
  category: string;
  cost: string;
  purpose: string;
  insiderAdvantage: string;
  url: string;
  isEssential: boolean;
}

export interface PlaybookBranch {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  iconName: string;
  themeColor: ColorTheme;
  earningPotential: string;
  timeToFirstDollar: string;
  difficulty: string;
  capitalNeeded: string;
  successRate: string;
  subheader: string;
  monthlyRunRateBenchmark: string;
  breakdown: {
    founderExperience: {
      headline: string;
      story: string;
      metrics: MetricHighlight[];
      verifiedProofNote: string;
    };
    caseStudies: CaseStudy[];
    mythsToAvoid: MythItem[];
  };
  lessons: Lesson[];
  vault: VaultItem[];
  tools: ToolItem[];
}
