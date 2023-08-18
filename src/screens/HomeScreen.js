import { View, Text, TouchableOpacity , StyleSheet, Image, SafeAreaView, ScrollView,} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Gueshouse from '../components/Guesthouses';
import Destinations from '../components/Destinations';

export default function HomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.mainImage} source={require('../../assets/images/Shipwreck.jpg')} />
        <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, .8)']}
                style={styles.gradient} 
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
            />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            {/* Guesthouses */}
            <View style={styles.guesthouseView}>
                <Gueshouse />
            </View>

            <View style={StyleSheet.create({display: 'flex', justifyContent: 'center', alignItems: 'center'})}>
                <View style={StyleSheet.create({borderBottomWidth: 1, borderBottomColor: 'rgba(255, 255, 255, .5)', width: wp(90)})}></View>
            </View>

            <View>
                <Text style={styles.todoText}>Things To Do</Text>
                <Destinations />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative'
    },
    mainImage: {
        width: '100%',
        height: '120%', 
        position: 'absolute'
    },
    safeArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(100),
        position: 'absolute'
    },
    btnTouchableBack: {
        padding: 10,
        marginLeft: 20,

    },
    guesthouseView: {
        
    },
    todoText: {
        fontSize: wp(8),
        fontWeight: '700',
        textAlign: 'left',
        color: '#fff',
        marginLeft: 10,
        marginTop: 20
    },
    gradient: {
        width: wp(100),
        height: hp(100),
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
})