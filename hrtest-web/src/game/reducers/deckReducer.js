import DeckData from '../../deck/DeckData';
import { PickCard, StartGame } from '../actions';

const defaultState = new DeckData();

export default function (state = defaultState, action) {
  switch (action.type) {
    case StartGame:
      const newDeck = new DeckData();
      newDeck.shuffle();
      return newDeck;

    case PickCard:
      const deck = state.clone;
      deck.pop();
      return deck;
  }
  return state;
}
