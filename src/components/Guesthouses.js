import { View, Text, TouchableOpacity , StyleSheet, Image, SafeAreaView, ScrollView,} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { GuesthousesData } from '../constraints';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <View style={styles.innerContainer}>
      <Text style={styles.homeText}>Places to Stay</Text>
     </View>
     <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} style={styles.scrollView} showsHorizontalScrollIndicator={false}>

     {GuesthousesData.map((guesthouse, index) => {
        return (
            <TouchableOpacity onPress={()=> navigation.navigate('Guesthouse', {...guesthouse} )} key={index} style={styles.catTouchable}>
                <Image source={guesthouse.image} style={styles.guesthouseImg}/>
                <Text style={styles.catTitle}>{guesthouse.shortName}</Text>
            </TouchableOpacity>
        )
     })}
     </ScrollView>
    

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      marginBottom:30,
      paddingTop: 30
    },
    innerContainer: {
      marginLeft: 10,
      marginRight: 10,

    },
    homeText: {
      fontSize: wp(10),
      fontWeight: '700',
      textAlign: 'center',
      color: '#fff',
      marginLeft: 10
    },
    scrollView: {
      marginLeft: 10,
      marginRight: 10
    },
    catTouchable: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10
    },
    guesthouseImg: {
      width: wp(28),
      height: wp(20),
      borderRadius: 10,
      margin: 5
    },
    catTitle: {
      fontSize: wp(4),
      fontWeight: '500',
      color: '#fff'
    }
  })