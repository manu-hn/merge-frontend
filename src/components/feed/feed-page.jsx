import React, { useCallback, useEffect, useState } from 'react';
import {  toast } from 'sonner';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeedPage = (
    users = [],
    onRequest,
    isLoading = false,
    hasMoreProfiles = true,
) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardExiting, setCardExiting] = useState(false);
    const [cardDirection, setCardDirection] = useState < 'left' | 'right' | null > (null);
    const [actionLoading, setActionLoading] = useState(false);

    const currentUser = users[currentIndex];
    const totalUsers = users.length;
    const hasUsers = totalUsers > 0;

      // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'x') {
        handleIgnore();
      } else if (e.key === 'ArrowRight' || e.key === '/' || e.key === 'Enter') {
        handleInterested();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, actionLoading]);

    const handleCardExit = (direction) => {
    setCardExiting(true);
    setCardDirection(direction);

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setCardExiting(false);
      setCardDirection(null);
    }, 300);
  };

  const handleIgnore = useCallback(async () => {
    if (!hasUsers || actionLoading) return;

    setActionLoading(true);
    const userId = currentUser._id;

    try {
      await onRequest?.('ignore', userId);
      toast.error('Profile ignored', { duration: 2000 });
      handleCardExit('left');
    } catch (error) {
        console.error(error)
      toast.error('Failed to ignore profile', { duration: 2000 });
      setActionLoading(false);
    }
  }, [currentUser, actionLoading, hasUsers, onRequest]);

  const handleInterested = useCallback(async () => {
    if (!hasUsers || actionLoading) return;

    setActionLoading(true);
    const userId = currentUser._id;

    try {
      await onRequest?.('interested', userId);
      toast.success('Profile liked!', { duration: 2000 });
      handleCardExit('right');
    } catch (error) {
        console.error(error)
      toast.error('Failed to like profile', { duration: 2000 });
      setActionLoading(false);
    }
  }, [currentUser, actionLoading, hasUsers, onRequest]);

 if (isLoading && totalUsers === 0) {
    return (
      <div className="min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          <Skeleton className="w-full h-96 rounded-3xl" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>
    );
  }

   if (!hasUsers && !isLoading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto border border-cyan-500/30">
            <ChevronRight className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {hasMoreProfiles ? 'No more profiles available' : 'All caught up!'}
          </h2>
          <p className="text-slate-400 max-w-sm">
            {hasMoreProfiles
              ? 'Check back later for more connections'
              : 'You\'ve reviewed all available profiles. Great work!'}
          </p>
        </div>
      </div>
    );
  }

    return (
       <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-6">
        {/* Profile Counter */}
        {totalUsers > 0 && (
          <div className="text-center space-y-1">
            <div className="text-sm font-medium text-cyan-400">
              Profile {currentIndex + 1} of {totalUsers}
            </div>
            <div className="text-xs text-slate-500">
              {totalUsers - currentIndex - 1} more to explore
            </div>
          </div>
        )}

        {/* Card Container */}
        <div className="relative w-full h-96 sm:h-[500px] perspective">
          {hasUsers && (
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                cardExiting
                  ? cardDirection === 'left'
                    ? 'translate-x-[-120%] opacity-0 -rotate-12'
                    : 'translate-x-[120%] opacity-0 rotate-12'
                  : 'translate-x-0 opacity-100 rotate-0'
              }`}
            >
              <UserCard user={currentUser} />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {hasUsers && (
          <div className="flex gap-6 mt-4">
            <ActionButton
              variant="ignore"
              icon={ChevronLeft}
              onClick={handleIgnore}
              disabled={actionLoading}
              label="Ignore"
            />
            <ActionButton
              variant="interested"
              icon={ChevronRight}
              onClick={handleInterested}
              disabled={actionLoading}
              label="Interested"
            />
          </div>
        )}

        {/* Keyboard Shortcuts Hint */}
        <div className="mt-8 flex gap-8 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700">
              ←
            </kbd>
            Ignore
          </span>
          <span className="flex items-center gap-2">
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700">
              →
            </kbd>
            Interested
          </span>
        </div>
      </div>
    </div>
    )
}

export default FeedPage