import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

const CarrinhoScreen = ({ produtosNoCarrinho, calcularTotal }) => {
  const [endereco, setEndereco] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [error, setError] = useState('');

  const renderizarProduto = ({ item }) => (
    <View style={styles.cardProduto}>
      <Text style={styles.nomeProduto}>{item.nome}</Text>
      <Text style={styles.precoProduto}>R${item.preco.toFixed(2)}</Text>
    </View>
  );

  const confirmarCompra = () => {
    if (!endereco || !metodoPagamento) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError('');
    Alert.alert('Compra Confirmada', 'Obrigado por comprar conosco!');
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho de Compras</Text>
      
      <FlatList
        data={produtosNoCarrinho}
        keyExtractor={(item) => item.id}
        renderItem={renderizarProduto}
        contentContainerStyle={styles.lista}
      />

      <Text style={styles.subtitulo}>Endereço de Entrega</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text style={styles.subtitulo}>Método de Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o método de pagamento"
        value={metodoPagamento}
        onChangeText={setMetodoPagamento}
      />

      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>Total: R${calcularTotal()}</Text>
      </View>

      <TouchableOpacity style={styles.botaoConfirmar} onPress={confirmarCompra}>
        <Text style={styles.textoBotaoConfirmar}>Confirmar Compra</Text>
      </TouchableOpacity>
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
  lista: {
    paddingBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#003366',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 10,
  },
  totalTexto: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'right',
  },
  botaoConfirmar: {
    backgroundColor: '#f4a261',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotaoConfirmar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorMessage: {
    color: '#cc0000',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default CarrinhoScreen;