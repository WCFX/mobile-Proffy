import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },
  title: {
    color: '#F9F9F9',
    alignItems: 'center',
    fontSize: 32,
    width: 150,
    marginTop: 40,
    fontFamily: 'Poppins_600SemiBold',
  },
  input:{
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 8,
    fontSize: 18,
    textAlign: 'center',
    height: 50,
    paddingHorizontal: 30, 
    backgroundColor: "#FFF",
    fontFamily: 'Poppins_400Regular',
  },
  forgottenPassword: {
    textDecorationLine: 'underline',
    marginHorizontal: 20,
    marginVertical: 20,
    color: '#FFF',
  },
});

export default styles;