import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>📖 Détails</Text>
      <Button title="Retour à l'accueil" onPress={() => navigation.goBack()} />
    </View>
  );
}