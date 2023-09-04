import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ImageHeader, Logo} from '../../assets';
import {COLOR_GREY, WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/constant';
import {ButtonIcon, PesananActive, Saldo} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang, </Text>
            <Text style={styles.username}>Reza Putra</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.labelLayanan}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title={'Kiloan'} type={'layanan'} />
            <ButtonIcon title={'Satuan'} type={'layanan'} />
            <ButtonIcon title={'VIP'} type={'layanan'} />
            <ButtonIcon title={'Karpet'} type={'layanan'} />
            <ButtonIcon title={'Setrika'} type={'layanan'} />
            <ButtonIcon title={'Ekspress'} type={'layanan'} />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.labelLayanan}>Pesanan Aktif</Text>
          <PesananActive title={'Pesanan No.2314'} status={'Sudah Selesai'}/>
          <PesananActive title={'Pesanan No.2314'} status={'Masih Dicuci'}/>
          <PesananActive title={'Pesanan No.2314'} status={'Sudah Selesai'}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.3,
    paddingHorizontal: 30,
    paddingTop: 12,
  },
  logo: {
    width: WINDOW_WIDTH * 0.3,
    height: WINDOW_HEIGHT * 0.06,
  },
  hello: {
    marginTop: WINDOW_HEIGHT * 0.03,
  },
  selamat: {
    fontSize: 24,
    color: '#000000',
  },
  username: {
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  labelLayanan: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: COLOR_GREY,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
