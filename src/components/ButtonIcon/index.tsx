import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AddSaldo, GetPoint} from '../../assets';
import {COLOR_SECONDARY} from '../../utils/constant';

const ButtonIcon = ({title}: {title: any}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <AddSaldo />;
    if (title === 'Get Point') return <GetPoint />;

    return <AddSaldo />;
  };
  return (
    <TouchableOpacity>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: COLOR_SECONDARY,
    padding: 7,
    borderRadius: 10,
  },
  text: {
    fontSize: 10,
    textAlign: 'center'
  }
});
