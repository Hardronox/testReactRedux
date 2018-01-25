import * as CardValues from './CardValues';
import * as CardSuits from './CardSuits';

function checkCardValue(value) {
  for (const s in CardValues) {
    if (CardValues[s] === value) {
      return;
    }
  }
  throw new Error(`invalid card value ${value}`);
}

function checkCardSuit(value) {
// eslint-disable-next-line no-restricted-syntax
  for (const s in CardSuits) {
    if (CardSuits[s] == value) {
      return;
    }
  }
  throw new Error(`invalid card suit ${value}`);
}

export default class CardData {
  constructor(value, suit) {
    checkCardValue(value);
    checkCardSuit(suit);

    this._value = value;
    this._suit = suit;
  }

  get value() {
    return this._value;
  }

  get suit() {
    return this._suit;
  }

  get numericValue() {
    let i = 0;
    for (const key in CardValues) {
      i++;
      if (CardValues[key] == this.value) {
        return i;
      }
    }
    return i;
  }
}
