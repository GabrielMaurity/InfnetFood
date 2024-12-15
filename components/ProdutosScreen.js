import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';


const mockCategorias = {
  Lanches: [
    { id: '1', nome: 'Hambúrguer', preco: 15.0, imagem: require('../assets/hamburguer.png') },
    { id: '2', nome: 'Cachorro-Quente', preco: 12.0, imagem: require('../assets/cachorro-quente.png') },
    { id: '3', nome: 'Batata Frita', preco: 8.0, imagem: require('../assets/batata-frita.png') },
  ],
  Bebidas: [
    { id: '4', nome: 'Refrigerante', preco: 5.0, imagem: require('../assets/refrigerante.png') },
    { id: '5', nome: 'Suco Natural', preco: 7.0, imagem: require('../assets/suco.png') },
    { id: '6', nome: 'Água Mineral', preco: 3.0, imagem: require('../assets/agua.png') },
  ],
  Sobremesas: [
    { id: '7', nome: 'Sorvete', preco: 10.0, imagem: require('../assets/sorvete.png') },
    { id: '8', nome: 'Pudim', preco: 6.0, imagem: require('../assets/pudim.png') },
    { id: '9', nome: 'Bolo de Chocolate', preco: 12.0, imagem: require('../assets/bolo.png') },
  ],
};

const ProdutosScreen = ({ adicionarProduto }) => {
  const route = useRoute();

  const { categoria } = route.params || { categoria: 'Lanches' }; 


  const produtos = mockCategorias[categoria] || [];

  const renderizarProduto = ({ item }) => (
    <View style={styles.cardProduto}>
      <Image source={item.imagem} style={styles.imagemProduto} />
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.precoProduto}>R${item.preco.toFixed(2)}</Text>
      <TouchableOpacity style={styles.botaoAdicionar} onPress={() => adicionarProduto(item)}>
        <Text style={styles.textoBotaoAdicionar}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{categoria}</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderizarProduto}
        contentContainerStyle={styles.lista}
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
  cardProduto: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  imagemProduto: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  nomeProduto: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },
  precoProduto: {
    color: '#666',
    fontSize: 16,
    marginTop: 5,
  },
  botaoAdicionar: {
    backgroundColor: '#f4a261',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoAdicionar: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  lista: {
    paddingBottom: 20,
  },
});

export default ProdutosScreen;