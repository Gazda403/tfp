'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { BranchHeader } from '@/components/dashboard/BranchHeader';
import { TabNavigation, SectionTab } from '@/components/dashboard/TabNavigation';
import { BranchReaderView } from '@/components/dashboard/BranchReaderView';
import { SectionVault } from '@/components/dashboard/SectionVault';
import { SectionTools } from '@/components/dashboard/SectionTools';
import { AssetLibraryGrid } from '@/components/dashboard/AssetLibraryGrid';
import { AssetDrawer } from '@/components/dashboard/AssetDrawer';
import { HighTicketBanner } from '@/components/dashboard/HighTicketBanner';
import { BookingModal } from '@/components/dashboard/BookingModal';
import { RevenueCalculatorModal } from '@/components/dashboard/RevenueCalculatorModal';
import { SearchModal } from '@/components/dashboard/SearchModal';
import { AudioBriefingBar } from '@/components/dashboard/AudioBriefingBar';
import { MindsetView } from '@/components/onboarding/MindsetView';
import { VehiclesView } from '@/components/onboarding/VehiclesView';
import { PLAYBOOK_BRANCHES } from '@/data/playbookData';
import { getBranchPlaybook } from '@/data/branchPlaybooksData';
import { ASSET_LIBRARY } from '@/data/assetLibraryData';
import { Lesson } from '@/types/playbook';
import { AssetItem } from '@/types/assetLibrary';

export default function DashboardPage() {
  // Default active view: Automatically route to "00: The Winner's Mindset" on initial launch
  const [activeViewId, setActiveViewId] = useState<string>('onboarding-mindset');
  const [activeBranchId, setActiveBranchId] = useState<string>('digital-products');
  const [activeTab, setActiveTab] = useState<SectionTab>('playbook17');
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showAudioBar, setShowAudioBar] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeAsset, setActiveAsset] = useState<AssetItem | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tfp_completed_tasks_v1');
      if (saved) {
        setCompletedTasks(JSON.parse(saved));
      } else {
        setCompletedTasks({ 'dp-s1-t1': true, 'dp-s1-t2': true });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleToggleTask = (taskId: string) => {
    setCompletedTasks((prev) => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      try {
        localStorage.setItem('tfp_completed_tasks_v1', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleSelectView = (viewId: string) => {
    setActiveViewId(viewId);
    if (viewId !== 'onboarding-mindset' && viewId !== 'onboarding-vehicles') {
      setActiveBranchId(viewId);
    }
    const mainEl = document.querySelector('main');
    if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeBranch = PLAYBOOK_BRANCHES.find((b) => b.id === activeBranchId) || PLAYBOOK_BRANCHES[0];
  const activeBranchPlaybook = getBranchPlaybook(activeBranchId);

  // Dynamic task completion calculations
  const allTasks = PLAYBOOK_BRANCHES.flatMap((b) => b.lessons.flatMap((l) => l.tasks));
  const totalTasks = allTasks.length || 85;
  const completedCount = allTasks.filter((t) => completedTasks[t.id]).length;

  const handleSelectSearchResult = (branchId: string, tab: SectionTab) => {
    setActiveBranchId(branchId);
    setActiveViewId(branchId);
    setActiveTab(tab || 'playbook17');
    const mainEl = document.querySelector('main');
    if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isOnboardingMindset = activeViewId === 'onboarding-mindset';
  const isOnboardingVehicles = activeViewId === 'onboarding-vehicles';
  const isBranchView = !isOnboardingMindset && !isOnboardingVehicles;

  return (
    <div className="h-screen bg-[#08090E] text-zinc-100 flex flex-col font-sans selection:bg-[#D4F84C] selection:text-black overflow-hidden">
      {/* Top Header */}
      <Header
        completedCount={completedCount}
        totalTasks={totalTasks}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onToggleAudio={() => {
          setIsAudioPlaying(!isAudioPlaying);
          setShowAudioBar(true);
        }}
        isAudioPlaying={isAudioPlaying}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto overflow-hidden">
        {/* Left Sidebar Navigation (Restructured into Phase 0 & Phase 1) */}
        <Sidebar
          branches={PLAYBOOK_BRANCHES}
          activeViewId={activeViewId}
          onSelectView={handleSelectView}
          completedTasks={completedTasks}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Content Workspace */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 space-y-8 pb-16 overflow-y-auto">
          {/* ══════════════════════════════════════════════════════
              VIEW A: ONBOARDING - THE WINNER'S MINDSET
          ══════════════════════════════════════════════════════ */}
          {isOnboardingMindset && (
            <MindsetView
              onProceedToStrategy={() => handleSelectView('onboarding-vehicles')}
              onSelectBranch={(branchId) => handleSelectView(branchId)}
            />
          )}

          {/* ══════════════════════════════════════════════════════
              VIEW B: ONBOARDING - WHY THESE 5 VEHICLES?
          ══════════════════════════════════════════════════════ */}
          {isOnboardingVehicles && (
            <VehiclesView
              onSelectBranch={(branchId) => handleSelectView(branchId)}
              onBackToMindset={() => handleSelectView('onboarding-mindset')}
            />
          )}

          {/* ══════════════════════════════════════════════════════
              PHASE 1: 5 CORE PROFIT ENGINE VIEWS
          ══════════════════════════════════════════════════════ */}
          {isBranchView && (
            <>
              {/* Audio Briefing Bar */}
              {showAudioBar && (
                <AudioBriefingBar
                  branch={activeBranch}
                  isPlaying={isAudioPlaying}
                  onTogglePlay={() => setIsAudioPlaying(!isAudioPlaying)}
                  onClose={() => setShowAudioBar(false)}
                />
              )}

              {/* 1. Branch Header Hero */}
              <BranchHeader branch={activeBranch} />

              {/* 2. 4-Tab Navigation */}
              <TabNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
                vaultCount={activeBranch.vault.length}
                toolsCount={activeBranch.tools.length}
                assetsCount={ASSET_LIBRARY.length}
              />

              {/* 3. Dynamic Section Content */}
              <div>
                {/* 17-Page Exhaustive Master Playbook Reader */}
                {activeTab === 'playbook17' && (
                  <BranchReaderView
                    branchData={activeBranchPlaybook}
                    completedTasks={completedTasks}
                    onToggleTask={handleToggleTask}
                    onOpenBooking={() => setIsBookingOpen(true)}
                  />
                )}

                {/* Plug-and-Play Vault */}
                {activeTab === 'vault' && <SectionVault vaultItems={activeBranch.vault} />}

                {/* Executable Assets */}
                {activeTab === 'assets' && (
                  <AssetLibraryGrid
                    assets={ASSET_LIBRARY}
                    onSelectAsset={(asset) => setActiveAsset(asset)}
                  />
                )}

                {/* Tools & Stack */}
                {activeTab === 'tools' && <SectionTools tools={activeBranch.tools} />}
              </div>

              {/* 4. High-Ticket Banner */}
              <HighTicketBanner
                onOpenBooking={() => setIsBookingOpen(true)}
                branchName={activeBranch.name}
              />
            </>
          )}
        </main>
      </div>

      {/* ── Modals & Drawers ────────────────────────────── */}
      <AssetDrawer
        asset={activeAsset}
        onClose={() => setActiveAsset(null)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        branchName={activeBranch.name}
      />

      <RevenueCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        defaultBranchId={activeBranchId}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        branches={PLAYBOOK_BRANCHES}
        onSelectResult={handleSelectSearchResult}
      />
    </div>
  );
}
