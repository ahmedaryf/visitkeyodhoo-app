import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image style={styles.welcomImage} source={require('../../assets/images/sunset.jpg')} />

        <View style={styles.logoView}>
            <Image style={styles.logo} source={require('../../assets/images/newlogo-transparent.png')} />
        </View>
                <LinearGradient
                    colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                    style={styles.gradient} 
                    start={{x: .5, y: 0}}
                    end={{x: .5, y: 1}}
                />
                
        <View style={styles.secondContainer}>
            <Text style={styles.title}>Vaavu Keyodhoo</Text>
            <Text style={styles.subTitle}>Unveiling Hidden Gems in Local Tourism</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.exploreBtn}>
                <Text style={styles.exploreBtnText}>Explore the Island</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
      fontSize: wp(12),
      color: '#fff',
      fontWeight: '700',
      marginTop: 16
    },
    subTitle: {
      fontSize: wp(5),
      color: '#fff',
      fontWeight: '500',
      marginTop: 5
    },
    welcomImage: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    exploreBtn: { 
        padding: 7,
        backgroundColor: 'rgba(255, 140, 100, 0.5)',
        borderRadius: 10,
        width: wp(85),
        marginTop: 20,
        marginBottom: 80
    },
    exploreBtnText: {
        fontSize: wp(6),
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500'
    },
    gradient: {
        width: wp(100),
        height: hp(60),
        position: 'absolute',
        bottom: 0
    },
    logo: {
        width: '30%',
        height: '30%'
    },
    logoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '30%',
        marginTop: 40
    }
  });
  