import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Routes from './src/Navigations/Routes';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});
