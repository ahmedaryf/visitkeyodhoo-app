import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../constraints'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Destinations() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {
            destinationData.map((item, index) => {
                return (
                    <DestinationCard navigation={navigation} item={item} key={index} />
                )
            })
        }
    </View>
  )
}

const DestinationCard = ({item, navigation}) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate('Destination', {...item})} style={styles.cardStyle}>
            <Image style={styles.cardStyleImg} source={item.image} />
            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                style={styles.gradient} 
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
            />
            <Text style={styles.titleText}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    cardStyle: {
        width: wp(44),
        height: wp(66),
        position: 'relative',
        padding: 10,
        margin: 5,
        marginBottom: 15,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    cardStyleImg: {
        width: wp(44),
        height: wp(66),
        position: 'absolute',
        borderRadius: 20,
    },
    gradient: {
        width: wp(44),
        height: hp(15),
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    titleText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: wp(5),
        fontWeight: '700'
        
    }
})