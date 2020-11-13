import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';


import backIcon from '../../assets/icons/back.png';
import logoImg from '../../assets/logo.png';

import styles from './styles';


interface HeaderProps {
  title: string;

}

const Header: React.FC<HeaderProps> = ({ title }) => {

  const { navigate } = useNavigation();

  function handleGoBack(){
    navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton style={{ padding: 10}} onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header;