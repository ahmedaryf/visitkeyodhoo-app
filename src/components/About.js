import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

export default function About() {
  return (
    <View style={styles.container}>
        <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
            style={styles.gradient} 
            start={{x: .5, y: 0}}
            end={{x: .5, y: 1}}
        />
      
      <View style={styles.body}>
        <Image style={styles.image} source={require('../../assets/images/keyodhoo.jpg')} />
        <Text style={styles.mainText}>Keyodhoo</Text>
        <Text style={styles.p}>Located in Vaavu Atoll, Keyodhoo Island is a stunning destination renowned for its beaches, crystal-clear waters, and vibrant coral reefs.</Text>

        <Text style={styles.p}>Fishing has always been at the heart of Keyodhoo's economy. Visitors can see the traditional fishing village where the islanders make a living by fishing and tourism. Visitors can also join the local fishermen on their fishing trips, where they can learn about the traditional techniques and methods used for catching fish and other seafood.</Text>

        <Text style={styles.p}>In recent years, tourism has become an increasingly important source of income for the island and Keyodhoo island has quite a few guesthouses. The island's beautiful beaches, crystal-clear waters, and vibrant coral reefs have made it a popular destination for tourists seeking a tropical getaway. Visitors can enjoy a variety of activities such as swimming, snorkelling, and diving in the warm waters.</Text>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        paddingBottom: 10
    },
    mainText: {
        fontSize: wp(18),
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff',
        marginLeft: 10,
        marginBottom:10,
        marginTop: wp(-15)
    },
    image: {
        width: wp(100),
        height: hp(30),
        marginBottom: 10
    },
    body: {
        width: wp(100),

    },
    p: {
        color: '#ccc',
        margin: 5,
        fontSize: wp(5)
    },
    gradient: {
        width: wp(100),
        height: hp(100),
        position: 'absolute',
        bottom: 0
    },
})