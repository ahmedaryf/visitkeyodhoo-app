import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function GuesthouseScreen(props) {
    const item = props.route.params;
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.guesthouseView}>
            <ScrollView>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: wp(100),
        height: hp(50)
    },
    title: {
        fontSize: wp(8),
        color: '#999',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10
    },
    guesthouseView: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -40,
        paddingBottom: 40
      },
      description: {
        fontSize: wp(5),
        marginTop:10,
        lineHeight: wp(7),
        color: '#666',
      }
})