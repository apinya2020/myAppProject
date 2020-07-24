import React from 'react';
import {Text,View,StyleSheet,Linking}from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.myContent}
      onPress={() => Linking.openURL('https://twitter.com/search?q=%23%E0%B8%AD%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B9%88%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%89%E0%B8%AD&src=typeahead_click')}>#อีสานบ่อยัน</Text>
      
      
      <Text style={styles.myContent}
      onPress={() => Linking.openURL('')}>#เยาวชนปลดแอก</Text>
      <Text style={{color:'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>Google</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#8A2BE2',
  },
  myContent:{
    fontSize: 20,
    color:'#A52A2A',
  }
})