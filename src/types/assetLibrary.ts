export type AssetCategory =
  | 'micro-saas'
  | 'chrome-extension'
  | 'automation'
  | 'web-template'
  | 'notion-workspace'
  | 'micro-playbook';

export interface EconomicsData {
  priceRange: string;
  timeToBuild: string;
  marginProfile: string;
  demandSignal: string;
  validationMetric: string;
  targetBuyer: string;
}

export interface TechStackItem {
  name: string;
  role: string;
  cost: string;
  url: string;
}

export interface ArchitectureStep {
  step: number;
  label: string;
  detail: string;
}

export interface BuildStep {
  id: string;
  phase: number;
  title: string;
  subtitle: string;
  duration: string;
  tasks: string[];
  aiPrompt?: string;
}

export interface CodeSnippet {
  id: string;
  label: string;
  language: string;
  description: string;
  code: string;
}

export interface AssetItem {
  id: AssetCategory;
  title: string;
  subtitle: string;
  tagline: string;
  iconName: string;
  accentColor: string;
  accentBg: string;
  borderAccent: string;
  badge: string;
  badgeBg: string;
  estimatedRevenue: string;
  timeToBuild: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  economics: EconomicsData;
  techStack: TechStackItem[];
  architecture: ArchitectureStep[];
  buildSteps: BuildStep[];
  snippets: CodeSnippet[];
}
