import * as CardValues from './CardValues';
import * as CardSuits from './CardSuits';
import CardData from './CardData';


const allCards = [
  new CardData(CardValues.VALUE_2, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_3, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_4, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_5, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_6, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_7, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_8, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_9, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_10, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_J, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_Q, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_K, CardSuits.CLUBS),
  new CardData(CardValues.VALUE_A, CardSuits.CLUBS),

  new CardData(CardValues.VALUE_2, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_3, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_4, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_5, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_6, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_7, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_8, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_9, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_10, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_J, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_Q, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_K, CardSuits.DIAMONDS),
  new CardData(CardValues.VALUE_A, CardSuits.DIAMONDS),

  new CardData(CardValues.VALUE_2, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_3, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_4, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_5, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_6, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_7, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_8, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_9, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_10, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_J, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_Q, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_K, CardSuits.HEARTS),
  new CardData(CardValues.VALUE_A, CardSuits.HEARTS),

  new CardData(CardValues.VALUE_2, CardSuits.SPADES),
  new CardData(CardValues.VALUE_3, CardSuits.SPADES),
  new CardData(CardValues.VALUE_4, CardSuits.SPADES),
  new CardData(CardValues.VALUE_5, CardSuits.SPADES),
  new CardData(CardValues.VALUE_6, CardSuits.SPADES),
  new CardData(CardValues.VALUE_7, CardSuits.SPADES),
  new CardData(CardValues.VALUE_8, CardSuits.SPADES),
  new CardData(CardValues.VALUE_9, CardSuits.SPADES),
  new CardData(CardValues.VALUE_10, CardSuits.SPADES),
  new CardData(CardValues.VALUE_J, CardSuits.SPADES),
  new CardData(CardValues.VALUE_Q, CardSuits.SPADES),
  new CardData(CardValues.VALUE_K, CardSuits.SPADES),
  new CardData(CardValues.VALUE_A, CardSuits.SPADES),
];

class DeckData {
  constructor(cards = allCards) {
    this._cards = cards.slice();
  }

  shuffle() {
    let counter = this._cards.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = this._cards[counter];
      this._cards[counter] = this._cards[index];
      this._cards[index] = temp;
    }

    return allCards;
  }

  pop() {
    if (this._cards.length === 0) {
      return null;
    }
    return this._cards.pop();
  }

  get topCard() {
    if (this.isEmpty) {
      return null;
    }
    return this._cards[this._cards.length - 1];
  }

  get isEmpty() {
    return this._cards.length === 0;
  }

  get clone() {
    return new DeckData(this._cards);
  }
}

export default DeckData;
