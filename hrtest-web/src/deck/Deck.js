import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as PropTypes from 'prop-types';
import DeckData from './DeckData';
import CardStyle from './styles';

const Deck = ({ deck, onPickCard }) => (
  <TouchableOpacity onPress={() => onPickCard(deck.topCard)}>
    {deck.isEmpty ?
      (<Image style={CardStyle.stretch} source={require('./card_images/back2.png')} />) :
      (<Image style={CardStyle.stretch} source={require('./card_images/back.png')} />)
    }

  </TouchableOpacity>
);

Deck.propTypes = {
  deck: PropTypes.instanceOf(DeckData).isRequired,
  onPickCard: PropTypes.func.isRequired,
};

export default Deck;
