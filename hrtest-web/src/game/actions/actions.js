import { EvaluateRound, FinishGame, StartGame } from './actionTypes';

export const pickCard = card => ({
  type: 'PickCard',
  card,
});

export const evaluateRound = () => ({
  type: EvaluateRound,
});

export const startGame = () => ({
  type: StartGame,
});

export const finishGame = (score1, score2) => ({
  type: FinishGame,
  winner: score1 > score2 ? 'Player 1' : 'Player 2',
  score: Math.max(score1, score2),
});
