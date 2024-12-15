import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// Simulação de banco de dados local
const dadosMockados = [
  { email: 'usuario@exemplo.com', senha: 'senha123' },
  { email: 'admin@sistema.com', senha: 'admin456' },
];

const LoginScreen = ({ navigation }) => {
  // Estado para armazenar e-mail, senha e mensagens de erro
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  // Função para validar o login
  const handleLogin = () => {
    if (!email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const userExists = dadosMockados.some(
      (user) => user.email === email && user.senha === senha
    );

    if (userExists) {
      setError('');
      Alert.alert('Login bem-sucedido!', `Bem-vindo, ${email}!`);
      navigation.replace('Main'); // Redireciona para a tela principal
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>

      {/* Mensagem de erro, exibida somente se houver uma */}
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

      {/* Campo de entrada para e-mail */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo de entrada para senha */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
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
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#2a9d8f',
    marginBottom: 20,
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
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#f4a261',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  errorMessage: {
    color: '#cc0000',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;