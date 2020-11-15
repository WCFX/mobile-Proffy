import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0f0f7',
    borderWidth: 1,
    borderColor: '#e5e5f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#04d361',
  },
  profileInfo: {
    marginLeft: 16
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264D',
    fontSize: 24,
  },
  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 16,
    marginTop: 4
  },
  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    color: '#6a6180',
  },
  footer: {
    backgroundColor: '#fafafa',
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontFamily: 'Archivo_700Bold',
    color: '#6a6180',
    fontSize: 16,
  },
  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257e5',
    fontSize: 18
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  favoritesButton: {
    backgroundColor: '#8257e5',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  contactButton: {
    backgroundColor: '#04d361',
    flexDirection: 'row',
    flex: 1,
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  contactButtonText:  {
    marginHorizontal: 20,
    color: '#F9f9f9',
    fontSize: 20,
    fontFamily: 'Archivo_600SemiBold',
  }
});


export default styles;