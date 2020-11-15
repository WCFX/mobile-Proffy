import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Header from '../../components/Header';

import TeacherItem, { Teacher } from '../../components/TeacherItem';


import styles from './styles';

const Favorites: React.FC = () => {

  const [favorites, setFavorites ] = useState([]);

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(res => {
      if(res){
        const favoredTeachers = JSON.parse(res);

        setFavorites(favoredTeachers);
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  });

  return(
    <View style={styles.container}>
      <Header title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
       {favorites.map((teacher: Teacher) => {
          return(
            <TeacherItem 
              key={teacher.id}
              teacher={teacher}
              favored
           />
         )
       })}
      </ScrollView>
    </View>
  );
}

export default Favorites;