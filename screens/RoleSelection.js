import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NeumorphicView from '../components/NeumorphicView';

const { width } = Dimensions.get('window');
const isLargeScreen = width > 768;

export default function RoleSelection({ onSelectRole }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.logoContainer}>
          <NeumorphicView style={styles.logoCircle}>
            <Ionicons name="pulse" size={60} color="#4f8cff" />
          </NeumorphicView>
          <Text style={styles.appName}>ClassPulse</Text>
          <Text style={styles.tagline}>Select your role to get started</Text>
        </View>

        <View style={[isLargeScreen ? styles.row : styles.column, styles.cardsContainer]}>
          
          <TouchableOpacity style={[styles.flex1, styles.cardSpacing]} onPress={() => onSelectRole('teacher')} activeOpacity={0.8}>
            <NeumorphicView style={styles.roleCard}>
              <View style={[styles.iconWrapper]}>
                <Ionicons name="school-outline" size={54} color="#4f8cff" />
              </View>
              <Text style={styles.roleTitle}>Teacher</Text>
              <Text style={styles.roleSubtext}>Create sessions, run pulse checks, and monitor class comprehension instantly.</Text>
            </NeumorphicView>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.flex1, styles.cardSpacing]} onPress={() => onSelectRole('student')} activeOpacity={0.8}>
            <NeumorphicView style={styles.roleCard}>
              <View style={[styles.iconWrapper]}>
                <Ionicons name="person-outline" size={54} color="#4CAF50" />
              </View>
              <Text style={styles.roleTitle}>Student</Text>
              <Text style={styles.roleSubtext}>Join active sessions, anonymously answer pulse checks, and ask questions.</Text>
            </NeumorphicView>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#e0e5ec' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  
  logoContainer: { alignItems: 'center', marginBottom: 60 },
  logoCircle: { width: 120, height: 120, borderRadius: 60, alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  appName: { fontSize: 36, fontWeight: 'bold', color: '#2f3542', letterSpacing: 1 },
  tagline: { fontSize: 16, color: '#6b7280', marginTop: 8 },

  cardsContainer: { width: '100%', maxWidth: 800 },
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
  flex1: { flex: 1 },
  cardSpacing: { marginVertical: isLargeScreen ? 0 : 16, marginHorizontal: isLargeScreen ? 16 : 0 },
  
  roleCard: { padding: 32, borderRadius: 24, alignItems: 'center', minHeight: 280, justifyContent: 'center' },
  iconWrapper: { marginBottom: 20 },
  roleTitle: { fontSize: 24, fontWeight: 'bold', color: '#2f3542', marginBottom: 16 },
  roleSubtext: { fontSize: 14, color: '#6b7280', textAlign: 'center', lineHeight: 22 },
});
