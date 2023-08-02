import React from 'react';
import type {Node} from 'react';
import Navigation from './src/navigation/Navigation';
import store from './src/redux/Store';
import {Provider} from 'react-redux';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
