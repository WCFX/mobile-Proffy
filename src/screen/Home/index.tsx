import React from 'react';
import { View, Text, Image } from 'react-native';


import styles from './styles';
import landingImg from '../../assets/landing.png'

const Home: React.FC = () => {
  return(
    <View style={styles.container}>
      <Image 
        style={styles.landingImg}
        source={landingImg}
      />
      <Text style={styles.title}>
        Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
    </View>
  )
}

export default Home;