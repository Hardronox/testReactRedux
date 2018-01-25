import React from 'react';
import Provider from 'react-redux/es/components/Provider';

import GameContainer from './game/views/GameContainer';
import store from './store';

const App = () => (
  <Provider store={store}>
    <GameContainer />
  </Provider>
);

export default App;
