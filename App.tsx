import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Home from './src/screen/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
};