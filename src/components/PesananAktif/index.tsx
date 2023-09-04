import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import {IconOrderActive} from '../../assets';
import { COLOR_PRIMARY, COLOR_WARNING, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constant';

const PesananActive = ({title, status} : {title:any, status:any}) => {
  return (
    <TouchableOpacity style={styles().container}>
      <Image source={IconOrderActive} style={styles().imgOrder}/>
      <View style={styles().wrapperPesanan}>
        <Text style={styles().title}>{title}</Text>
        <Text style={styles(status).status}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananActive;

const styles = (status?:any) => StyleSheet.create({
  container: {
    padding: 17,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: WINDOW_HEIGHT * 0.015,
    alignItems: 'center'
  },
  imgOrder: {
    width: WINDOW_WIDTH * 0.2,
    height: WINDOW_HEIGHT * 0.05,
  },
  wrapperPesanan: {
    marginLeft: WINDOW_WIDTH * 0.02
  },
  title: {
    fontSize: 18,
    fontWeight: '800'
  },
  status: {
    fontSize: 14,
    fontWeight: '400',
    color: status === 'Sudah Selesai' ? COLOR_PRIMARY : COLOR_WARNING
  }
});
