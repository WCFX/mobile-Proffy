import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#F9F9F9',
    fontSize: 32,
    width: 150,
    fontFamily: 'Poppins_600SemiBold',
  },
  description: {
    fontSize: 22,
    maxWidth: 380,
    color: '#ccc',
    letterSpacing: 1,
    fontFamily: 'Nunito_400Regular'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: 100,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  buttonRegistration: {
    backgroundColor: '#fff',
  },
  buttonLogin: {
    backgroundColor: '#04d361',
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'Archivo_700Bold'
  },
  buttonTextPurple: {
    color: '#8257E5',
    fontSize: 22,
  }
});


export default styles;