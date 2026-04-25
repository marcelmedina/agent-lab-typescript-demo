interface CardDeckScreenProps {
  currentQuestion: string | null;
  onDraw: () => void;
  onBack: () => void;
}

export function CardDeckScreen({ currentQuestion, onDraw, onBack }: CardDeckScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-surface">
      <header className="flex items-center justify-between px-4 py-3 bg-surface-card border-b border-surface-inset">
        <button
          onClick={onBack}
          className="text-ink-soft text-sm px-3 py-1.5 rounded-lg hover:bg-surface-inset active:bg-surface-inset transition-colors duration-150"
        >
          ← Back
        </button>
        <h1 className="font-display font-bold text-ink text-lg tracking-tight">
          Card Deck Shuffle
        </h1>
        <div className="w-16" aria-hidden />
      </header>

      <p className="text-center text-ink-soft text-xs py-2 px-4">
        Tap the card to draw a random question.
      </p>

      <div className="flex-1 flex items-center justify-center p-5">
        <button
          onClick={onDraw}
          className="w-full max-w-md rounded-2xl p-6 bg-surface-card border border-surface-inset text-left transition-all duration-200 hover:-translate-y-1 active:translate-y-0"
          style={{
            boxShadow: '0 10px 28px rgba(30,14,8,0.14)',
            animation: currentQuestion ? 'cardDealIn 260ms ease-out' : 'none',
          }}
          aria-label="Draw a card"
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-ink-soft mb-3">
            Shuffle Deck
          </p>
          {currentQuestion ? (
            <p className="text-xl font-display text-ink leading-snug">
              {currentQuestion}
            </p>
          ) : (
            <p className="text-base text-ink-mid leading-relaxed">
              Tap here to draw your first question card.
            </p>
          )}
        </button>
      </div>

      <div className="px-5 pb-6">
        <button
          onClick={onDraw}
          className="w-full bg-accent hover:bg-accent-hover text-surface-card font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200"
          style={{ boxShadow: '0 4px 16px rgba(181,100,28,0.28)' }}
        >
          Draw Another Card
        </button>
      </div>
    </div>
  );
}
