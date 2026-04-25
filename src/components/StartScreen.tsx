interface StartScreenProps {
  onStartBingo: () => void;
  onStartDeckShuffle: () => void;
}

export function StartScreen({ onStartBingo, onStartDeckShuffle }: StartScreenProps) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-full p-6"
      style={{
        background:
          'radial-gradient(ellipse 80% 55% at 12% 12%, #f5e6d0 0%, transparent 55%), ' +
          'radial-gradient(ellipse 55% 75% at 88% 88%, #ede0cb 0%, transparent 55%), ' +
          '#F8F2E8',
      }}
    >
      <div className="w-full max-w-sm text-center">
        {/* Brand mark */}
        <p className="text-4xl mb-3 select-none" aria-hidden>☕</p>

        <h1
          className="font-display text-5xl font-bold text-ink tracking-tight mb-1"
          style={{ lineHeight: '1.1' }}
        >
          Bingo Mixer
        </h1>
        <p className="font-display italic text-ink-soft text-base mb-8">
          Find your people
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-7">
          <div className="flex-1 h-px bg-surface-inset" />
          <span className="text-[10px] uppercase tracking-[0.15em] text-ink-soft font-body">
            How to play
          </span>
          <div className="flex-1 h-px bg-surface-inset" />
        </div>

        {/* Instructions card */}
        <div
          className="rounded-xl p-5 mb-8 text-left bg-surface-card border border-surface-inset"
          style={{ boxShadow: '0 2px 16px rgba(30,14,8,0.07)' }}
        >
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-base shrink-0 mt-0.5" aria-hidden>🔍</span>
              <span className="text-sm text-ink-mid">Find someone who matches a square</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-base shrink-0 mt-0.5" aria-hidden>✓</span>
              <span className="text-sm text-ink-mid">Tap to mark it on your card</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-base shrink-0 mt-0.5" aria-hidden>🏆</span>
              <span className="text-sm text-ink-mid">Complete 5 in a row to win</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-3">
          <button
            onClick={onStartBingo}
            className="w-full bg-accent hover:bg-accent-hover text-surface-card font-semibold py-4 px-8 rounded-xl text-base transition-all duration-200 active:scale-[0.97]"
            style={{ boxShadow: '0 4px 20px rgba(181,100,28,0.32)' }}
          >
            Play Classic Bingo
          </button>
          <button
            onClick={onStartDeckShuffle}
            className="w-full bg-surface-raised hover:bg-surface-inset text-ink font-semibold py-4 px-8 rounded-xl text-base transition-all duration-200 active:scale-[0.97] border border-surface-inset"
          >
            Card Deck Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}
