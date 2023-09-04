import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {AddSaldo, GetPoint, IconKiloan, IconSatuan, IconSetrika, IconExpress, IconKarpet, IconVip} from '../../assets';
import {COLOR_SECONDARY} from '../../utils/constant';

const ButtonIcon = ({title, type}: {title:any, type?:any}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <AddSaldo />;
    if (title === 'Get Point') return <GetPoint />;
    if (title === 'Kiloan') return <IconKiloan />;
    if (title === 'Satuan') return <IconSatuan />;
    if (title === 'Setrika') return <IconSetrika />;
    if (title === 'VIP') return <IconVip />;
    if (title === 'Karpet') return <IconKarpet />;
    if (title === 'Ekspress') return <IconExpress />;

    return <AddSaldo />;
  };
  return (
    <TouchableOpacity style={styles(type).container}>
      <View style={styles(type).icon}>
        <Icon />
      </View>
      <Text style={styles(type).text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = (type?: any) => StyleSheet.create({
  container: {
    marginBottom: type === 'layanan' ? 12 : 0,
    marginRight: type === 'layanan' ? 30 : 0
  },
  icon: {
    backgroundColor: COLOR_SECONDARY,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
  },
  text: {
    fontSize: type === 'layanan' ? 14 : 10,
    textAlign: 'center',
    fontWeight: type === 'layanan' ? 'normal' : 'bold'
  }
});
