import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0f0f7',
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm:{
    marginBottom: 8,
  },
  label:{
    color: '#D4C2FF',
    fontFamily: 'Poppins_400Regular',
  },
  inputGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock:{
    width: '48%',
  },
  input:{
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  containerButtonSearch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSearchProffys: {
    width: '80%',
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#04d361',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonSearchProffysText:{
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
  },
  
});


export default styles;