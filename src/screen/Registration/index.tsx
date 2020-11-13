import React from 'react';
import { View, Text, Image, ImageBackground, TextInput } from 'react-native';

import styles from './styles';
import background from '../../assets/give-classes-background.png';

const Registration: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.contain}>
        
        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Nome completo</Text>
          <TextInput />
        </View>
        
        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Email:</Text>
          <TextInput />
        </View>
        
        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Confirmação de email:</Text>
          <TextInput />
        </View>
        
        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Whatsapp</Text>
          <TextInput />
        </View>
        
        <View style={styles.containerInput}>
          <Text style={styles.titleInput}>Biografia</Text>
          <TextInput />
        </View>
        
        <View style={styles.containerInput}>
          <Text style={styles.titleInput}></Text>
          <TextInput />
        </View>
      
      </ImageBackground>
    </View>
  )
}

export default Registration;