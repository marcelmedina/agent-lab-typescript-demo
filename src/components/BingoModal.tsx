interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{
        background: 'rgba(30,14,8,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <div
        className="max-w-xs w-full rounded-2xl p-8 text-center bg-surface-card border border-surface-inset"
        style={{
          boxShadow: '0 32px 64px rgba(30,14,8,0.45)',
          animation: 'modalIn 0.42s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        <p className="text-5xl mb-3 select-none" aria-hidden>☕</p>
        <h2
          className="font-display text-4xl font-bold text-bingo mb-2"
          style={{ lineHeight: '1.1' }}
        >
          Bingo!
        </h2>
        <p className="text-ink-soft text-sm mb-7 font-display italic">
          You completed a line — well played!
        </p>

        <button
          onClick={onDismiss}
          className="w-full bg-accent hover:bg-accent-hover text-surface-card font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
          style={{ boxShadow: '0 4px 16px rgba(181,100,28,0.30)' }}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
