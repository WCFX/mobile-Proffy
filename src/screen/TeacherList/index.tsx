import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import TeacherItem from '../TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {

  const [isFiltersVisible, setIsFiltersVisible ] = useState(false);

  function handleFiltersShowUp(){
    setIsFiltersVisible(!isFiltersVisible)
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Proffys disponíveis"
        headerRight={
        <>
          <RectButton onPress={handleFiltersShowUp}>
            <Text style={{color: '#FFF', fontSize: 14 }}>Pesquise</Text>
            <Feather name="filter" size={44} color="#04d361" />
          </RectButton>
        </>
        }
      >

        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              style={styles.input}
              placeholder="Qual a matéria"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>

                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Horário"
                />
              </View>
            </View>
            <View style={styles.containerButtonSearch}>

              <RectButton
                onPress={() => {}}
                style={styles.buttonSearchProffys}
                >
                <Text style={styles.buttonSearchProffysText}>Buscar</Text>
              </RectButton>
            
            </View>
          </View>
        )}
      </Header>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;