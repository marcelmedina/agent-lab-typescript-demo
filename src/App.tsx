import { useCallback, useState } from 'react';
import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';
import { CardDeckScreen } from './components/CardDeckScreen';
import { questions } from './data/questions';

type AppMode = 'menu' | 'bingo' | 'deck';

function App() {
  const [appMode, setAppMode] = useState<AppMode>('menu');
  const [currentDeckQuestion, setCurrentDeckQuestion] = useState<string | null>(null);

  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const drawDeckQuestion = useCallback(() => {
    if (questions.length === 0) {
      setCurrentDeckQuestion(null);
      return;
    }

    setCurrentDeckQuestion((current) => {
      if (questions.length === 1) {
        return questions[0];
      }

      let next = current;
      while (next === current) {
        next = questions[Math.floor(Math.random() * questions.length)];
      }

      return next;
    });
  }, []);

  const startBingoMode = useCallback(() => {
    setAppMode('bingo');
    startGame();
  }, [startGame]);

  const startDeckMode = useCallback(() => {
    setCurrentDeckQuestion(null);
    setAppMode('deck');
  }, []);

  const goToMenu = useCallback(() => {
    resetGame();
    setCurrentDeckQuestion(null);
    setAppMode('menu');
  }, [resetGame]);

  if (appMode === 'menu') {
    return (
      <StartScreen
        onStartBingo={startBingoMode}
        onStartDeckShuffle={startDeckMode}
      />
    );
  }

  if (appMode === 'deck') {
    return (
      <CardDeckScreen
        currentQuestion={currentDeckQuestion}
        onDraw={drawDeckQuestion}
        onBack={goToMenu}
      />
    );
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={goToMenu}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
