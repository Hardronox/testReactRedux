import createStore from 'redux/es/createStore';
import combineReducers from 'redux/es/combineReducers';
import deckReducer from './game/reducers/deckReducer';
import gameReducer from './game/reducers/gameReducer';
import menuReducer from './game/reducers/menuReducer';


const store = createStore(combineReducers({
  deck: deckReducer,
  game: gameReducer,
  menu: menuReducer,
}));

export default store;
