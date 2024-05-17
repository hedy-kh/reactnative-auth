import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './navigation';
import GlobalProvider, { useGlobalContext } from './context/GlobalProvider';
export default function App() {
  return (
    <GlobalProvider>
     <Navigation />
     </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
