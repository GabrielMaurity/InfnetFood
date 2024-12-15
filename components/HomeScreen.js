import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const categoria = [
  { id: '1', nome: 'Lanches' },
  { id: '2', nome: 'Bebidas' },
  { id: '3', nome: 'Sobremesas' },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderizarCategoria = ({ item }) => (
    <TouchableOpacity
      style={styles.cardCategoria}
      onPress={() => navigation.navigate('Produtos', { categoria: item.nome })}
    >
      <Text style={styles.nomeCategoria}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorias</Text>

      <FlatList
        data={categoria}
        keyExtractor={(item) => item.id}
        renderItem={renderizarCategoria}
        contentContainerStyle={styles.listaCategorias}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2a9d8f',
    textAlign: 'center',
    marginBottom: 20,
  },
  listaCategorias: {
    paddingBottom: 20,
  },
  cardCategoria: {
    backgroundColor: '#f4a261',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  nomeCategoria: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;