import React from 'react';
import { Image, View } from 'react-native';
import * as PropTypes from "prop-types";

import CardData from './CardData';
import CardStyle from './styles';


const m = {
  '2_of_clubs': require('./card_images/2_of_clubs.png'),
  '2_of_diamonds': require('./card_images/2_of_diamonds.png'),
  '2_of_hearts': require('./card_images/2_of_hearts.png'),
  '2_of_spades': require('./card_images/2_of_spades.png'),
  '3_of_clubs': require('./card_images/3_of_clubs.png'),
  '3_of_diamonds': require('./card_images/3_of_diamonds.png'),
  '3_of_hearts': require('./card_images/3_of_hearts.png'),
  '3_of_spades': require('./card_images/3_of_spades.png'),
  '4_of_clubs': require('./card_images/4_of_clubs.png'),
  '4_of_diamonds': require('./card_images/4_of_diamonds.png'),
  '4_of_hearts': require('./card_images/4_of_hearts.png'),
  '4_of_spades': require('./card_images/4_of_spades.png'),
  '5_of_clubs': require('./card_images/5_of_clubs.png'),
  '5_of_diamonds': require('./card_images/5_of_diamonds.png'),
  '5_of_hearts': require('./card_images/5_of_hearts.png'),
  '5_of_spades': require('./card_images/5_of_spades.png'),
  '6_of_clubs': require('./card_images/6_of_clubs.png'),
  '6_of_diamonds': require('./card_images/6_of_diamonds.png'),
  '6_of_hearts': require('./card_images/6_of_hearts.png'),
  '6_of_spades': require('./card_images/6_of_spades.png'),
  '7_of_clubs': require('./card_images/7_of_clubs.png'),
  '7_of_diamonds': require('./card_images/7_of_diamonds.png'),
  '7_of_hearts': require('./card_images/7_of_hearts.png'),
  '7_of_spades': require('./card_images/7_of_spades.png'),
  '8_of_clubs': require('./card_images/8_of_clubs.png'),
  '8_of_diamonds': require('./card_images/8_of_diamonds.png'),
  '8_of_hearts': require('./card_images/8_of_hearts.png'),
  '8_of_spades': require('./card_images/8_of_spades.png'),
  '9_of_clubs': require('./card_images/9_of_clubs.png'),
  '9_of_diamonds': require('./card_images/9_of_diamonds.png'),
  '9_of_hearts': require('./card_images/9_of_hearts.png'),
  '9_of_spades': require('./card_images/9_of_spades.png'),
  '10_of_clubs': require('./card_images/10_of_clubs.png'),
  '10_of_diamonds': require('./card_images/10_of_diamonds.png'),
  '10_of_hearts': require('./card_images/10_of_hearts.png'),
  '10_of_spades': require('./card_images/10_of_spades.png'),
  j_of_clubs: require('./card_images/j_of_clubs.png'),
  j_of_diamonds: require('./card_images/j_of_diamonds.png'),
  j_of_hearts: require('./card_images/j_of_hearts.png'),
  j_of_spades: require('./card_images/j_of_spades.png'),
  q_of_clubs: require('./card_images/q_of_clubs.png'),
  q_of_diamonds: require('./card_images/q_of_diamonds.png'),
  q_of_hearts: require('./card_images/q_of_hearts.png'),
  q_of_spades: require('./card_images/q_of_spades.png'),
  k_of_clubs: require('./card_images/k_of_clubs.png'),
  k_of_diamonds: require('./card_images/k_of_diamonds.png'),
  k_of_hearts: require('./card_images/k_of_hearts.png'),
  k_of_spades: require('./card_images/k_of_spades.png'),
  a_of_clubs: require('./card_images/a_of_clubs.png'),
  a_of_diamonds: require('./card_images/a_of_diamonds.png'),
  a_of_hearts: require('./card_images/a_of_hearts.png'),
  a_of_spades: require('./card_images/a_of_spades.png'),
};

function getImage(card) {
  const imageKey = `${card.value}_of_${card.suit}`;
  return m[imageKey];
}

const Card = ({ card }) => {
  if (card) {
    return (
      <Image style={CardStyle.stretch} source={getImage(card)} />
    );
  }
  return (<View style={CardStyle.stretch} />);
};

Card.propTypes={
  card: PropTypes.instanceOf(CardData),
};

export default Card;
