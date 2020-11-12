import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const GiveClasses: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Mundo Cruel !</Text>
    </View>
  )
}

export default GiveClasses;