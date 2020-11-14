import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257e5',
  },
  title: {
    fontSize: 24,
    color: '#F9F9F9',
    fontFamily: 'Archivo_700Bold',
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});


export default styles;