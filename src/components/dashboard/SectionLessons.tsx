'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  Clock,
  Target,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { PlaybookBranch, Lesson } from '@/types/playbook';

interface SectionLessonsProps {
  branch: PlaybookBranch;
  completedTasks: Record<string, boolean>;
  onToggleTask: (taskId: string) => void;
  onCompleteAllInLesson: (lesson: Lesson) => void;
}

export const SectionLessons: React.FC<SectionLessonsProps> = ({
  branch,
  completedTasks,
  onToggleTask,
  onCompleteAllInLesson,
}) => {
  const [expandedLessonId, setExpandedLessonId] = useState<string>(
    branch.lessons[0]?.id || ''
  );

  const toggleAccordion = (id: string) => {
    setExpandedLessonId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="space-y-6">
      {/* Header Info Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-[#121522] border border-white/[0.12]">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#D4F84C]" />
            Execution Curriculum: 3 Phased Sprints
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
            Check off each milestone as you deploy your infrastructure. All progress saves automatically.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/40 text-[#D4F84C]">
            Interactive Checklist
          </span>
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {branch.lessons.map((lesson) => {
          const isExpanded = expandedLessonId === lesson.id;
          const totalTasksInLesson = lesson.tasks.length;
          const completedInLesson = lesson.tasks.filter((t) => completedTasks[t.id]).length;
          const isLessonFinished = totalTasksInLesson > 0 && completedInLesson === totalTasksInLesson;

          return (
            <div
              key={lesson.id}
              className={`rounded-3xl border transition-all duration-200 overflow-hidden shadow-md ${
                isLessonFinished
                  ? 'bg-[#10141D] border-[#34D399]/50'
                  : isExpanded
                  ? 'bg-[#131624] border-white/25'
                  : 'bg-[#10131E] border-white/[0.10] hover:border-white/20'
              }`}
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(lesson.id)}
                className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 select-none"
              >
                <div className="flex items-start sm:items-center gap-4 min-w-0">
                  {/* Timeline Badge */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 transition-transform ${
                      isLessonFinished
                        ? 'bg-[#34D399] text-black'
                        : isExpanded
                        ? 'bg-[#D4F84C] text-black'
                        : 'bg-white/[0.08] text-zinc-200'
                    }`}
                  >
                    {isLessonFinished ? (
                      <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                    ) : (
                      <span>0{lesson.number}</span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider">
                        Sprint Phase {lesson.number}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/15 text-zinc-200 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-zinc-300" />
                        {lesson.duration}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/30 text-[#D4F84C]">
                        {lesson.estimatedYield}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
                      {lesson.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.12] text-xs font-mono">
                    <span className="text-zinc-300">Progress:</span>
                    <span
                      className={`font-bold ${
                        isLessonFinished ? 'text-[#34D399]' : 'text-white'
                      }`}
                    >
                      {completedInLesson}/{totalTasksInLesson}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-zinc-300">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-white" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </button>

              {/* Accordion Content Body */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-white/[0.08] space-y-6">
                  {/* Summary Callout */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-sm text-zinc-200 leading-relaxed">
                    <strong className="text-white block mb-1">Objective Summary:</strong>
                    {lesson.summary}
                  </div>

                  {/* Actionable Tasks Checklist */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Target className="w-4 h-4 text-[#D4F84C]" />
                        Milestone Execution Checklist
                      </span>
                      <button
                        onClick={() => onCompleteAllInLesson(lesson)}
                        className="text-xs text-[#D4F84C] hover:underline font-bold"
                      >
                        {isLessonFinished ? 'Reset Tasks' : 'Mark All Tasks Completed'}
                      </button>
                    </div>

                    <div className="space-y-2">
                      {lesson.tasks.map((task) => {
                        const isChecked = !!completedTasks[task.id];
                        return (
                          <div
                            key={task.id}
                            onClick={() => onToggleTask(task.id)}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                              isChecked
                                ? 'bg-[#34D399]/15 border-[#34D399]/40 text-white'
                                : 'bg-black/40 border-white/[0.08] hover:border-white/25 text-zinc-300 hover:bg-white/[0.03]'
                            }`}
                          >
                            <div className="mt-0.5 shrink-0">
                              {isChecked ? (
                                <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                              ) : (
                                <Circle className="w-5 h-5 text-zinc-400 hover:text-white" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-sm font-medium leading-snug transition-all ${
                                  isChecked ? 'line-through text-zinc-400' : 'text-zinc-100'
                                }`}
                              >
                                {task.text}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Core Frameworks / Models */}
                  {lesson.frameworks && lesson.frameworks.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {lesson.frameworks.map((fw, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.10]"
                        >
                          <span className="text-xs font-bold text-[#D4F84C] block mb-1">
                            {fw.title}
                          </span>
                          <p className="text-xs text-zinc-300 leading-relaxed">
                            {fw.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* The Golden Rule Callout */}
                  <div className="p-4 rounded-2xl bg-[#ECE859]/15 border border-[#ECE859]/40 text-xs sm:text-sm text-[#ECE859] flex items-start gap-3">
                    <Sparkles className="w-5 h-5 shrink-0 mt-0.5 text-[#ECE859]" />
                    <div>
                      <strong className="block text-white mb-0.5 font-bold uppercase tracking-wide text-xs">
                        The Unbreakable Golden Rule
                      </strong>
                      <span className="text-zinc-100 font-medium">{lesson.goldenRule}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
