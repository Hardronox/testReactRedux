import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import Deck from '../../deck/Deck';
import Card from '../../deck/Card';
import { EvaluateRound, finishGame, pickCard, StartGame } from "../actions";
import Styles from './styles';
import CardData from '../../deck/CardData';
import DeckData from '../../deck/DeckData';
import HiScore from '../../hiscore/views/HiScore';


class GameContainer extends React.Component {
  _pickCard(card) {
    if (this.props.card1 != null && this.props.card2 != null && this.props.deck.isEmpty) {
      this.props.finishGame(this.props.score1, this.props.score2);
    } else if (this.props.card1 != null && this.props.card2 != null) {
      this.props.evaluateRound();
    } else {
      this.props.pickCard(card);
    }
  }

  render() {

    console.log(this.props);
    if (this.props.isGameInProgress) {
      return (
        <View style={Styles.container}>
          <Text style={Styles.scoreLabel}>Player 1 - {this.props.score1} points</Text>
          <View style={Styles.deckAndCardsContainer}>
            <Deck deck={this.props.deck} onPickCard={card => this._pickCard(card)} />
            <Card card={this.props.card1} />
            <Card card={this.props.card2} />
          </View>
          <Text style={Styles.scoreLabel}>Player 2 - {this.props.score2} points</Text>
        </View>
      );
    }

    if (this.props.isInMainMenu) {
      return (
        <View style={Styles.container}>
          <Text style={Styles.scoreLabel}>Pick a card</Text>
          <Button title="Start game" onPress={this.props.startGame} />
        </View>
      );
    }

    if (this.props.isGameResult) {
      return (
        <View style={Styles.container}>
          <Text style={Styles.scoreLabel}>Game finished. {this.props.winner} won with score
            of {this.props.winnerScore}
          </Text>
          <HiScore />
          <Button title="Play again" onPress={this.props.startGame} />
        </View>
      );
    }

    return null;
  }
}

GameContainer.propTypes = {
  isGameInProgress: PropTypes.bool.isRequired,
  isInMainMenu: PropTypes.bool.isRequired,
  isGameResult: PropTypes.bool,
  deck: PropTypes.instanceOf(DeckData).isRequired,
  card1: PropTypes.instanceOf(CardData),
  card2: PropTypes.instanceOf(CardData),
  score1: PropTypes.number.isRequired,
  score2: PropTypes.number.isRequired,
  winner: PropTypes.string,
  winnerScore: PropTypes.number,
  pickCard: PropTypes.func.isRequired,
  evaluateRound: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired,
};

GameContainer.defaultProps = {
  card1: null,
  card2: null,
  isGameResult: false,
  winner: null,
  winnerScore: 0,
};

const mapStateToProps = state => ({
  isGameInProgress: state.menu.isGameInProgress,
  isInMainMenu: !state.menu.isGameInProgress && !state.menu.winner,

  isGameResult: !state.menu.isGameInProgress && state.menu.winner,
  deck: state.deck,
  card1: state.game.cards[0],
  card2: state.game.cards[1],


  score1: state.game.scores[0],
  score2: state.game.scores[1],
  winner: state.menu.winner,
  winnerScore: state.menu.score,
});

const mapDispatchToProps = dispatch => ({
  pickCard: card => dispatch(pickCard(card)),
  evaluateRound: () => dispatch({ type: EvaluateRound }),
  startGame: () => dispatch({type:StartGame}),
  finishGame: (score1, score2) => dispatch(finishGame(score1, score2)),
});


export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
