import { StyleSheet } from "react-native";

const GameStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  scoreLabel: {
    textAlign: 'center',
    margin: 5,
    fontSize: 20,
    flexWrap: 'wrap',
  },
  deckAndCardsContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default GameStyles;
