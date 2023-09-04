import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR_PRIMARY, WINDOW_HEIGHT} from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Saldo:</Text>
          <Text style={styles.valueSaldo}>Rp. 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Antar Point:</Text>
          <Text style={styles.valuePoint}>100 points</Text>
        </View>
      </View>
      <View style={styles.buttonAksi}>
        <ButtonIcon title={"Add Saldo"}/>
        <Gap width={10} height={0}/>
        <ButtonIcon title={"Get Point"}/>
      </View>
    </View>
  );
};

export default Saldo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -WINDOW_HEIGHT * 0.07,
    flexDirection: 'row'
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  informasiSaldo: {
    width: '60%'
  },
  labelSaldo: {
    fontSize: 20,
    fontWeight: 'normal'
  },
  valueSaldo: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  labelPoint: {
    fontSize: 12,
    fontWeight: 'normal'
  },
  valuePoint: {
    fontSize: 12,
    color: COLOR_PRIMARY,
    fontWeight: 'bold'
  },
  buttonAksi: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
