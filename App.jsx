import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Routes from './src/Navigations/Routes';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});
