import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const categories = [
  'Văn học',
  'Kinh tế',
  'Thiếu nhi',
  'Kỹ năng sống',
  'Truyện tranh',
  'Ngoại ngữ',
  'Lịch sử',
];

export default function CategoryChip() {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Category Chips</Text>
      <View style={styles.chipContainer}>
        {categories.map((category) => (
          <View key={category} style={styles.chip}>
            <Text style={styles.chipText}>{category}</Text>
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
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    alignContent: 'flex-start',
  },
  chip: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#6385ff',
    backgroundColor: '#fff',
  },
  chipText: {
    color: '#333',
    fontSize: 13,
  },
});