import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CategoryChip from './components/CategoryChip';
import BookGrid from './components/BookGrid';
import Badge from './components/Badge';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.section}>
        <Text style={styles.heading}>Bài tập 1: Danh sách danh mục dạng chip</Text>
        <CategoryChip />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Bài tập 2: Lưới sản phẩm 2 cột</Text>
        <BookGrid />
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Bài tập 3: Badge giảm giá</Text>
        <Badge />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 48,
    backgroundColor: '#ffffff',
  },
  section: {
    marginBottom: 28,
  },
  heading: {
    marginBottom: 12,
    color: '#243b8f',
    fontSize: 18,
    fontWeight: '700',
  },
});