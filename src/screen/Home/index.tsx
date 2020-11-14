import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/landing.png'
import studyIcon from '../../assets/icons/study.png';
import giveClassesIcon from '../../assets/icons/give-classes.png';
import heart from '../../assets/icons/heart.png';

import styles from './styles';

const Home: React.FC = () => {

  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesScreen(){
    navigate('GiveClasses')
  }

  function handleNavigateToStudyScreen(){
    navigate('Study');
  }

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

        <RectButton 
          onPress={handleNavigateToStudyScreen}  
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton 
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToGiveClassesScreen}  
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
        
      </View>

      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas. {' '}
        <Image source={heart} />
      </Text>
    </View>
  )
}

export default Home;