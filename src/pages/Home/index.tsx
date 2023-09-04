import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageHeader, Logo } from '../../assets'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constant'
import { Saldo } from '../../components'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header} >
        <Image source={Logo} style={styles.logo}/>
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang, </Text>
          <Text style={styles.username}>Reza Putra</Text>
        </View>
      </ImageBackground>
      <Saldo />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.30,
    paddingHorizontal: 30,
    paddingTop: 12
  },
  logo: {
    width: WINDOW_WIDTH * 0.3,
    height: WINDOW_HEIGHT * 0.06
  },
  hello: {
    marginTop: WINDOW_HEIGHT * 0.030
  },
  selamat: {
    fontSize: 24,
    color: '#000000'
  },
  username: {
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold'
  }
})