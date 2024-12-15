import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';


const restaurantes = [
  { id: '1', nome: 'Restaurante A', endereco: 'Rua A, 123', itemCardapio: 'Prato A' },
  { id: '2', nome: 'Restaurante B', endereco: 'Rua B, 456', itemCardapio: 'Prato B' },
  { id: '3', nome: 'Restaurante C', endereco: 'Rua C, 789', itemCardapio: 'Prato C' },

];

const RestaurantesScreen = () => {
  const [restauranteSelecionado, setRestauranteSelecionado] = useState(null);

  const renderizarRestaurante = ({ item }) => (
    <TouchableOpacity
      style={styles.cardRestaurante}
      onPress={() => setRestauranteSelecionado(item)}
    >
      <Text style={styles.nomeRestaurante}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {restauranteSelecionado ? (
        <View>
          <Text style={styles.titulo}>{restauranteSelecionado.nome}</Text>
          <Text style={styles.texto}>Endereço: {restauranteSelecionado.endereco}</Text>
          <Text style={styles.texto}>Item do Cardápio: {restauranteSelecionado.itemCardapio}</Text>
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => setRestauranteSelecionado(null)}
          >
            <Text style={styles.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.titulo}>Restaurantes</Text>
          <FlatList
            data={restaurantes}
            keyExtractor={(item) => item.id}
            renderItem={renderizarRestaurante}
            contentContainerStyle={styles.listaRestaurantes}
          />
        </View>
      )}
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
  listaRestaurantes: {
    paddingBottom: 20,
  },
  cardRestaurante: {
    backgroundColor: '#f4a261',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  nomeRestaurante: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  texto: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  botaoVoltar: {
    backgroundColor: '#f4a261',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotaoVoltar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RestaurantesScreen;