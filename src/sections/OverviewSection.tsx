import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Award, Target, HelpCircle, Clock, BookOpen, Flame, ArrowRight } from 'lucide-react';

interface StatItem {
  id: number;
  label: string;
  value: string;
  icon: React.ReactNode;
  subtitle: string;
  color: 'purple' | 'cyan' | 'green' | 'amber' | 'pink';
}

const progressData = [
  { day: 'Mon', score: 88 },
  { day: 'Tue', score: 92 },
  { day: 'Wed', score: 85 },
  { day: 'Thu', score: 95 },
  { day: 'Fri', score: 90 },
  { day: 'Sat', score: 98 },
  { day: 'Sun', score: 100 },
];

const activityData = [
  {
    icon: '📝',
    text: "Completed 'ThreatTrace' integration scan",
    details: "Vulnerability severity check: 98% secure",
    time: "2 hours ago"
  },
  {
    icon: '💬',
    text: "Queried 'ExamPrep RAG' AI assistant",
    details: "12 vector-retrieved citations loaded",
    time: "4 hours ago"
  },
  {
    icon: '🃏',
    text: "Studied 32 Security controls flashcards",
    details: "28 correct answers, 4 incorrect",
    time: "1 day ago"
  },
  {
    icon: '📤',
    text: "Pushed commits to FreshScan AI repo",
    details: "Optimized image preprocess normalization",
    time: "2 days ago"
  }
];

const documentData = [
  {
    title: "threat_trace_soc_platform.pdf",
    pages: 8,
    date: "Jun 24, 2026",
    status: "Ready",
    statusColor: "green",
    projectUrl: "#projects"
  },
  {
    title: "exam_prep_rag_assistant.pdf",
    pages: 12,
    date: "Jun 22, 2026",
    status: "Ready",
    statusColor: "green",
    projectUrl: "#projects"
  },
  {
    title: "fresh_scan_deep_learning.pdf",
    pages: 6,
    date: "Jun 18, 2026",
    status: "Processing",
    statusColor: "amber",
    projectUrl: "#projects"
  }
];

export const OverviewSection: React.FC<{ onTabChange: (tab: any) => void }> = ({ onTabChange }) => {
  const [greeting, setGreeting] = useState('Welcome back');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const stats: StatItem[] = [
    { id: 1, label: 'Documents', value: '15', icon: <FileText className="w-5 h-5" />, subtitle: 'Up-to-date', color: 'purple' },
    { id: 2, label: 'Questions Asked', value: '248', icon: <MessageSquare className="w-5 h-5" />, subtitle: '34 today', color: 'cyan' },
    { id: 3, label: 'Quizzes Done', value: '42', icon: <Award className="w-5 h-5" />, subtitle: '3 this week', color: 'green' },
    { id: 4, label: 'Avg Score', value: '94.5%', icon: <Target className="w-5 h-5" />, subtitle: '6% this month', color: 'amber' },
    { id: 5, label: 'Flashcards', value: '180', icon: <HelpCircle className="w-5 h-5" />, subtitle: '48 today', color: 'pink' },
    { id: 6, label: 'Study Time', value: '120h', icon: <Clock className="w-5 h-5" />, subtitle: 'This month', color: 'purple' },
    { id: 7, label: 'Summaries', value: '24', icon: <BookOpen className="w-5 h-5" />, subtitle: 'Generated', color: 'cyan' },
    { id: 8, label: 'Streak', value: '56 Days', icon: <Flame className="w-5 h-5" />, subtitle: 'Days active', color: 'amber' },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple': return 'border-purple-500/30 text-purple-400 bg-purple-500/5';
      case 'cyan': return 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5';
      case 'green': return 'border-green-500/30 text-green-400 bg-green-500/5';
      case 'amber': return 'border-amber-500/30 text-amber-400 bg-amber-500/5';
      case 'pink': return 'border-pink-500/30 text-pink-400 bg-pink-500/5';
      default: return 'border-white/10 text-white bg-white/5';
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 pb-20 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent shimmer select-none">
          {greeting}, Palle Jeshwanth
        </h1>
        <p className="text-[#D7E2EA]/60 text-sm sm:text-base mt-1">
          Here&apos;s your study overview. Keep up the great work!
        </p>
      </div>

      {/* 8-Stat KPI Grid (4-Columns) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`glass-card p-4 flex flex-col justify-between border-l-2 ${getColorClasses(stat.color)} shadow-lg min-h-[110px]`}
          >
            <div className="flex justify-between items-start w-full text-[#D7E2EA]/60 mb-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">{stat.label}</span>
              <div className="p-1 rounded-md bg-white/5">{stat.icon}</div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-black text-[#D7E2EA] tracking-tight">{stat.value}</span>
              <span className="text-[10px] sm:text-xs opacity-60 mt-0.5">{stat.subtitle}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Split Graph & Activity Grid (2-Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Weekly Progress */}
        <div className="glass-card p-5 border border-white/5 flex flex-col justify-between h-[320px]">
          <div className="flex justify-between items-center w-full mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#D7E2EA]">Weekly Progress</h3>
            <button
              onClick={() => onTabChange('projects')}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest cursor-pointer"
            >
              View analytics
            </button>
          </div>
          {/* Custom Animated Bar Chart */}
          <div className="flex items-end justify-between h-full w-full gap-2 sm:gap-4 px-2">
            {progressData.map((item, index) => (
              <div key={item.day} className="flex flex-col items-center gap-2 h-full flex-grow justify-end">
                <div className="w-8 sm:w-10 bg-white/5 rounded-t-lg h-[150px] relative overflow-hidden flex items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${item.score}%` }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                    className="w-full bg-gradient-to-t from-indigo-600/80 to-indigo-400/50 rounded-t-lg relative group cursor-pointer"
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] px-1.5 py-0.5 rounded transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {item.score}%
                    </div>
                  </motion.div>
                </div>
                <span className="text-[10px] sm:text-xs text-[#D7E2EA]/50 uppercase tracking-widest font-bold">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Recent Activity */}
        <div className="glass-card p-5 border border-white/5 flex flex-col h-[320px] overflow-hidden">
          <div className="flex justify-between items-center w-full mb-4 flex-shrink-0">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#D7E2EA]">Recent Activity</h3>
            <button
              onClick={() => onTabChange('about')}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest cursor-pointer"
            >
              View all
            </button>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto pr-1 flex-grow scrollbar-thin">
            {activityData.map((act, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0 text-left"
              >
                <div className="text-xl p-2 rounded-lg bg-white/5 flex-shrink-0">{act.icon}</div>
                <div className="flex flex-col flex-grow">
                  <span className="text-xs sm:text-sm font-medium text-[#D7E2EA]">{act.text}</span>
                  <span className="text-[10px] sm:text-xs text-[#D7E2EA]/40">{act.details}</span>
                </div>
                <span className="text-[10px] text-[#D7E2EA]/30 whitespace-nowrap flex-shrink-0">{act.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Documents Grid (3-Columns) */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#D7E2EA]">Your Documents</h3>
          <button
            onClick={() => onTabChange('projects')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest cursor-pointer"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {documentData.map((doc, index) => (
            <div key={index} className="glass-card p-5 border border-white/5 flex flex-col justify-between min-h-[140px] text-left">
              <div className="flex flex-col">
                <div className="flex justify-between items-start w-full">
                  <span className="font-semibold text-sm sm:text-base text-[#D7E2EA] truncate max-w-[80%]">
                    {doc.title}
                  </span>
                  <span
                    className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border ${
                      doc.statusColor === 'green'
                        ? 'border-green-500/20 text-green-400 bg-green-500/5'
                        : 'border-amber-500/20 text-amber-400 bg-amber-500/5'
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-[#D7E2EA]/40 mt-1">
                  {doc.pages} pages &bull; Created {doc.date}
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <button
                  onClick={() => onTabChange('projects')}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-all flex items-center gap-1 hover:gap-2 cursor-pointer"
                >
                  Study now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
