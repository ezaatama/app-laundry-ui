import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconAkun,
  IconAkunActive,
  IconHome,
  IconHomeActive,
  IconPesanan,
  IconPesananActive,
} from '../../assets';
import { COLOR_DISABLE, COLOR_PRIMARY } from '../../utils/constant';

const TabItem = ({
  onPress,
  onLongPress,
  isFocused,
  label,
}: {
  onPress: any;
  onLongPress: any;
  isFocused: any;
  label: any;
}) => {
  const Icon = () => {
    if (label == 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;
    if (label == 'Pesanan')
      return isFocused ? <IconPesananActive /> : <IconPesanan />;
    if (label == 'Akun') return isFocused ? <IconAkunActive /> : <IconAkun />;
    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={isFocused ? styles.textFocus : styles.textInfocus}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textFocus: {
        fontSize: 13,
        marginTop: 8,
        color: COLOR_PRIMARY
    },
    textInfocus: {
        fontSize: 13,
        marginTop: 8,
        color: COLOR_DISABLE
    }
});
