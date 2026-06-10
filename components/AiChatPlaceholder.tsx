interface AiChatPlaceholderProps {
  characterName: string;
}

export default function AiChatPlaceholder({ characterName }: AiChatPlaceholderProps) {
  return (
    <div className="card border-accent-violet/20 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-white/5 bg-accent-violet/5">
        <div className="w-8 h-8 rounded-full bg-accent-violet/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div>
          <p className="text-text-primary font-semibold text-sm">Chat with {characterName}</p>
          <p className="text-text-muted text-xs">AI character chat</p>
        </div>
        <span className="badge badge-violet ml-auto">Coming Soon</span>
      </div>

      {/* Mock chat area */}
      <div className="p-4 space-y-3 opacity-40 pointer-events-none select-none">
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-accent-violet/30 flex-shrink-0 mt-0.5" />
          <div className="bg-bg-elevated rounded-2xl rounded-tl-sm px-3 py-2 max-w-xs">
            <p className="text-text-secondary text-xs">Hi! Ask me anything about the story...</p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="bg-accent-violet/20 rounded-2xl rounded-tr-sm px-3 py-2 max-w-xs">
            <p className="text-text-secondary text-xs">What happened in Episode 3?</p>
          </div>
        </div>
      </div>

      {/* Locked input */}
      <div className="p-4 border-t border-white/5 relative">
        <div className="flex items-center gap-2 bg-bg-elevated rounded-xl px-4 py-3 opacity-50">
          <span className="text-text-muted text-sm flex-1">Ask {characterName} a question...</span>
          <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <p className="text-center text-text-muted text-xs mt-3">
          AI character chat is in development — check back soon.
        </p>
      </div>
    </div>
  );
}
