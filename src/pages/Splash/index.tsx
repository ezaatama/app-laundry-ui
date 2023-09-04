import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { SplashImages, Logo } from '../../assets'

const SplashScreen = ( {navigation}: {navigation: any} ) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainApp");
    }, 3000)
  }, [navigation])
  return (
    <ImageBackground source={SplashImages} style={styles.background}>
      <Image source={Logo} style={styles.logo}/>
    </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
    height: 105,
  }
})