import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'

export default function DestinationScreen(props) {
  const item = props.route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />

      <View style={styles.titleView}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.titleScrollView}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.longDescription}</Text>
            </ScrollView>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: wp(100),
    height: hp(55)
  },
  title: {
    fontSize: wp(8),
    textAlign: 'center',
    fontWeight: '600',
    color: '#666',
  },
  titleView: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingBottom: 50
  },
  description: {
    fontSize: wp(5),
    marginTop:10,
    lineHeight: wp(7),
    color: '#666',
  }
})