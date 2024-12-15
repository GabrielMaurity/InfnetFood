import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const mockUsuario = {
  nome: 'Gabriel Maurity',
  email: 'usuario@exemplo.com',
  imagemPerfil: require('../assets/perfil.png'), 
};

const PerfilScreen = () => {
  const navigation = useNavigation();

  const irParaHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={mockUsuario.imagemPerfil} style={styles.imagemPerfil} />
      <Text style={styles.nome}>{mockUsuario.nome}</Text>
      <Text style={styles.email}>{mockUsuario.email}</Text>

      <TouchableOpacity style={styles.botaoVoltar} onPress={irParaHome}>
        <Text style={styles.textoBotaoVoltar}>Voltar à Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imagemPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2a9d8f',
    textAlign: 'center',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  botaoVoltar: {
    backgroundColor: '#f4a261',
    padding: 16,
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

export default PerfilScreen;
