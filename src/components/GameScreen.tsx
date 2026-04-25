import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-surface">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-surface-card border-b border-surface-inset">
        <button
          onClick={onReset}
          className="text-ink-soft text-sm px-3 py-1.5 rounded-lg hover:bg-surface-inset active:bg-surface-inset transition-colors duration-150"
        >
          ← Back
        </button>
        <h1 className="font-display font-bold text-ink text-lg tracking-tight">
          Bingo Mixer
        </h1>
        <div className="w-16" aria-hidden />
      </header>

      {/* Instructions */}
      <p className="text-center text-ink-soft text-xs py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-bingo-bg border-y border-bingo/30 text-ink-mid text-center py-2 font-semibold text-sm font-display italic">
          ☕ You&rsquo;ve got a Bingo!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
