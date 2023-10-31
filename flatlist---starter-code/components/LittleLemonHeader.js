import * as React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.headerText}>Little Lemon</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
  },
  headerText: {
    padding: 5,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});