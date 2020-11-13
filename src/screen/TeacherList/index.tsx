import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import TeacherItem from '../TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {

  // const [proffys, setProffys ] = useState([]);

  // useEffect(() => {
  //   async function reqProffys(){
  //     const req = await fetch()
  //   }
  // })

  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis" />

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