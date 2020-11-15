import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/icons/heart-outline.png';
import unFavoredIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import api from '../../screen/services/api';


import styles from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
};

interface TeacherItemProps {
  teacher: Teacher;
  favored: boolean;
}


const TeacherItem: React.FC<TeacherItemProps>= ({ teacher, favored }) => {

  const [isFavored, setIsFavored ] = useState(favored);

  function handleButtonWhatsApp(){

    api.post('connections', {
      user_id: teacher.id,
    })

    Linking.openURL(`whatsapp://send?phone=+55${teacher.whatsapp}`)
  }

  async function handleToggleFavorite(){

    const favorites = await AsyncStorage.getItem('favorites');

      let favoritesArray = [];

      if ( favorites ){
        favoritesArray = JSON.parse(favorites);
      }

    if(isFavored){
      const favoredIndex = favoritesArray.findIndex((teacherItem: Teacher ) => {
        return teacherItem.id === teacher.id;
      })
      favoritesArray.splice(favoredIndex, 1);
      setIsFavored(false)
    }else {
      
      favoritesArray.push(teacher);

      setIsFavored(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  };

  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R${teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>

          <RectButton
            onPress={handleToggleFavorite}
            style={[
              styles.favoritesButton,
              isFavored ? styles.favored : {},
            ]}
          >
            { isFavored 
            
              ? <Image source={unFavoredIcon} />
              : <Image source={heartOutlineIcon} />
            }
          </RectButton>

          {/* <RectButton style={styles.favoritesButton}>
            <Image source={unFavoredIcon} />
          </RectButton> */}

          <RectButton 
            onPress={handleButtonWhatsApp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>

        </View>
      </View>
    </View>
  )
}

export default TeacherItem;