import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';


import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Header from '../../components/Header';

import api from '../services/api';

import styles from './styles';

const TeacherList: React.FC = () => {

  const [isFiltersVisible, setIsFiltersVisible ] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers ] = useState([]);

  const [subject, setSubject ] = useState('');
  const [week_day, setWeekDay ] = useState('');
  const [time, setTime ] = useState('');

  function handleFiltersShowUp(){
    setIsFiltersVisible(!isFiltersVisible)
  };

  async function handleFiltersSubmit(){

    loadFavorites();

    const res = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    setIsFiltersVisible(false)
    setTeachers(res.data)
  }

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(res => {
      if(res){
        const favoredTeachers = JSON.parse(res);
        const favoredTeachersIds = favoredTeachers.map((teacher : Teacher) => {
          return teacher.id;
        })

        setFavorites(favoredTeachersIds);
      }
    })
  }

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
              value={subject}
              onChangeText={text => setSubject(text)}
              style={styles.input}
              placeholder="Qual a matéria"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>

                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  style={styles.input}
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={text => setTime(text)}
                  style={styles.input}
                  placeholder="Horário"
                />
              </View>
            </View>
            <View style={styles.containerButtonSearch}>

              <RectButton
                onPress={handleFiltersSubmit}
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
        {teachers.map((teacher: Teacher) => {
          return(
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favored={favorites.includes(teacher.id)}
            />
          )
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;