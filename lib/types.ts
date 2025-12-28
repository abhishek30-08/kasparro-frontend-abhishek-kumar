// lib/types.ts

// Brand Types
export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
  lastAuditDate: string;
}

// Dashboard Snapshot Types
export interface DashboardSnapshot {
  brandId: string;
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  lastAuditTimestamp: string;
  trendsData: {
    visibilityTrend: number; // percentage change
    trustTrend: number;
    keywordTrend: number;
  };
}

// Audit Module Types
export type ModuleType =
  | 'brand-mentions'
  | 'sentiment-analysis'
  | 'eeat-trust'
  | 'keyword-coverage'
  | 'competitor-analysis'
  | 'content-gaps'
  | 'citation-tracking';

export interface AuditModule {
  id: string;
  type: ModuleType;
  name: string;
  description: string;
  score: number;
  status: 'excellent' | 'good' | 'needs-improvement' | 'critical';
  insights: string[];
  issues: Issue[];
  recommendations: Recommendation[];
  lastUpdated: string;
}

export interface Issue {
  id: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
}

export interface Recommendation {
  id: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  expectedImpact: string;
  effort: 'low' | 'medium' | 'high';
}

// Architecture Types
export interface PipelineStage {
  id: string;
  name: string;
  description: string;
  inputs: string[];
  outputs: string[];
  processingTime: string;
}

export interface ArchitectureFlow {
  inputAssembler: PipelineStage;
  contextPack: PipelineStage;
  auditModules: PipelineStage[];
  outputSurfaces: PipelineStage;
}

// UI State Types
export interface AppState {
  selectedBrandId: string | null;
  selectedModuleId: string | null;
  brands: Brand[];
  dashboardData: DashboardSnapshot | null;
  auditModules: AuditModule[];
  isLoading: boolean;
  setSelectedBrand: (brandId: string) => void;
  setSelectedModule: (moduleId: string) => void;
  loadBrands: () => void;
  loadDashboardData: (brandId: string) => void;
  loadAuditModules: (brandId: string) => void;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

// Component Props Types
export interface SnapshotCardProps {
  title: string;
  value: number | string;
  trend?: number;
  suffix?: string;
  icon?: React.ReactNode;
}

export interface ModuleCardProps {
  module: AuditModule;
  isSelected: boolean;
  onClick: () => void;
}

export interface ScoreBadgeProps {
  score: number;
  status: AuditModule['status'];
}