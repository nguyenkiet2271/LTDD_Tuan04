import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookGrid() {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Book Grid</Text>
      <View style={styles.grid}>
        {[1, 2, 3, 4].map((book) => (
          <View key={book} style={styles.card}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>Ảnh aspect Ratio</Text>
            </View>
            <View style={styles.infoBox}>
              <Text>Tên-Giá</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 14,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#6385ff',
    backgroundColor: '#f8f9fc',
  },
  title: {
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  card: {
    width: '48%',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: 4 / 3,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: '#6385ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontWeight: '600',
  },
  infoBox: {
    width: '100%',
    height: 35,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#4aa84a',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcebd8',
    padding: 8,
  },
});