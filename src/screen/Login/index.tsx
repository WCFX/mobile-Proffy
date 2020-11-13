import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        style={styles.input}
        placeholder="Coloque seu login ou email aqui" />

      <Text style={styles.title}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Coloque sua senha aqui" 
        secureTextEntry={true}
      />
      <RectButton onPress={() => {}}>
        <Text style={styles.forgottenPassword}>Esqueceu sua senha?</Text>
      </RectButton>
    </View>
  )
}

export default Login;