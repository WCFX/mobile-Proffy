import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


import styles from './styles';

import landingImg from '../../assets/landing.png'
import studyIcon from '../../assets/icons/study.png';
import giveClassesIcon from '../../assets/icons/give-classes.png';
import heart from '../../assets/icons/heart.png';

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

      <View style={styles.buttonsContainer}>

        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </TouchableOpacity>
        
      </View>

      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas. {' '}
        <Image source={heart} />
      </Text>
    </View>
  )
}

export default Home;