import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

import Header from '../../components/Header';
import TeacherItem from '../TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis">

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
        </View>
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