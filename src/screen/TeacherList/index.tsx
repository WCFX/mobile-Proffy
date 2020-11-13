import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import TeacherItem from '../TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis" />
      <FlatList>
        <TeacherItem />
      </FlatList>
    </View>
  );
}

export default TeacherList;