import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import background from '../../assets/give-classes-background.png';

import styles from './styles';

const GiveClasses: React.FC = () => {

  const { navigate } = useNavigation();

  function handleButtonLogin(){
    navigate('Login')
  }

  function handleButtonCreateRegistration(){
    navigate('Registration')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={styles.content}
        source={background}
      >

      <Text style={styles.title}>
        Quer ser um Proffy ?
      </Text>
      
      <Text style={styles.description}>
        Para começar, você precisa se cadastrar como professor
        na nossa plataforma.{'\n'} Se você já possuí cadastro basta entrar 
        na sua conta. 
      </Text>

    </ImageBackground>
    
    <View style={styles.containerButton}>

      <RectButton 
        onPress={handleButtonCreateRegistration}
        style={[styles.button, styles.buttonRegistration]}
        > 
        <Text style={[styles.buttonText, styles.buttonTextPurple]}>Cadastre-se</Text>
      </RectButton>
      
      <RectButton 
        onPress={handleButtonLogin}
        style={[styles.button, styles.buttonLogin]}
        > 
        <Text style={styles.buttonText}>Entrar</Text>
      </RectButton>


      </View>
    </View>
  )
}

export default GiveClasses;