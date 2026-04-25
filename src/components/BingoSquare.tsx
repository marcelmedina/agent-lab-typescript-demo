import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const { isMarked, isFreeSpace, text } = square;

  let stateClasses: string;
  if (isFreeSpace) {
    stateClasses = 'bg-accent-dim border-accent/25 cursor-default';
  } else if (isMarked && isWinning) {
    stateClasses = 'bg-bingo-bg border-bingo text-ink font-medium shadow-[0_0_0_2px_var(--color-bingo)]';
  } else if (isMarked) {
    stateClasses = 'bg-marked border-marked-border text-marked-text';
  } else {
    stateClasses =
      'bg-surface-card border-surface-inset text-ink-mid ' +
      'hover:bg-surface-raised hover:border-ink-faint hover:shadow-xs ' +
      'active:bg-surface-inset active:scale-[0.97]';
  }

  return (
    <button
      onClick={onClick}
      disabled={isFreeSpace}
      className={`relative flex items-center justify-center p-1.5 text-center border rounded-lg transition-all duration-150 select-none min-h-[60px] text-xs leading-tight ${stateClasses}`}
      aria-pressed={isMarked}
      aria-label={isFreeSpace ? 'Free space' : text}
    >
      {isFreeSpace ? (
        <span className="font-display font-bold text-accent text-[11px] tracking-wide leading-snug">
          ☕
          <br />
          FREE
        </span>
      ) : (
        <>
          <span className="break-words hyphens-auto">{text}</span>
          {isMarked && (
            <span
              className="absolute top-0.5 right-0.5 text-marked-text text-[10px] leading-none"
              aria-hidden
            >
              ✓
            </span>
          )}
        </>
      )}
    </button>
  );
}
