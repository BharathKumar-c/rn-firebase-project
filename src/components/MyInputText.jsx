import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const MyInputText = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
      <View style={styles.border} />
    </View>
  );
};

export default MyInputText;

const styles = StyleSheet.create({
  border: {
    width: '100%',
    backgroundColor: 'black',
    height: 1,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
  },
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
