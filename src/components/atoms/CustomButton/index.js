import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function index({children}) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
