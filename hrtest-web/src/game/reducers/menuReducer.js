import { FinishGame, StartGame } from '../actions';

const defaultState = {
  isGameInProgress: false,
  winner: null,
  winnerScore: 0,
};

export default function (state = defaultState, action) {
  const result = { ...state };
  switch (action.type) {
    case StartGame:
      result.isGameInProgress = true;
      return result;

    case FinishGame:
      result.isGameInProgress = false;
      result.winner = action.winner;
      result.winnerScore = action.score;
      return result;
  }
  return state;
}
