// lib/store.ts
import { create } from 'zustand';
import { AppState, Brand, DashboardSnapshot, AuditModule } from './types';

// Import mocked data
import brandsData from '@/data/brands.json';
import dashboardData from '@/data/dashboard-snapshot.json';
import auditModulesData from '@/data/audit-modules.json';

export const useAppStore = create<AppState>((set) => ({
  // Initial State
  selectedBrandId: null,
  selectedModuleId: null,
  brands: [],
  dashboardData: null,
  auditModules: [],
  isLoading: false,

  // Actions
  setSelectedBrand: (brandId: string) => {
    set({ selectedBrandId: brandId });
  },

  setSelectedModule: (moduleId: string) => {
    set({ selectedModuleId: moduleId });
  },

  loadBrands: () => {
    set({ isLoading: true });
    // Simulate loading delay
    setTimeout(() => {
      set({
        brands: brandsData as Brand[],
        isLoading: false,
      });
    }, 300);
  },

  loadDashboardData: (brandId: string) => {
    set({ isLoading: true });
    setTimeout(() => {
      // In a real app, this would filter by brandId
      set({
        dashboardData: dashboardData as DashboardSnapshot,
        isLoading: false,
      });
    }, 300);
  },

  loadAuditModules: (brandId: string) => {
    set({ isLoading: true });
    setTimeout(() => {
      // In a real app, this would filter by brandId
      set({
        auditModules: auditModulesData as AuditModule[],
        isLoading: false,
      });
    }, 300);
  },
}));