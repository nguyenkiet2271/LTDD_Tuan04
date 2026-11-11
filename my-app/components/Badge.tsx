import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Badge() {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Badge</Text>
      <View style={styles.bookCover}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>-20%</Text>
        </View>
        <Text style={styles.coverText}>Ảnh bìa sách</Text>
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
  bookCover: {
    position: 'relative',
    height: 180,
    backgroundColor: '#d3d3d3',
    borderWidth: 1,
    borderColor: '#6385ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverText: {
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    top: 6,
    left: 6,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 2,
    backgroundColor: '#e23b45',
  },
  badgeText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});