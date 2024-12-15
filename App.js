import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ProdutosScreen from './components/ProdutosScreen';
import CarrinhoScreen from './components/CarrinhoScreen';
import PerfilScreen from './components/PerfilScreen';
import RestaurantesScreen from './components/RestaurantesScreen';
import MapaScreen from './components/MapaScreen'; // Importação da MapaScreen

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ({ produtosNoCarrinho, adicionarProduto, calcularTotal }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        

        switch (route.name) {
          case 'Home':
            iconName = 'home-outline';
            break;
          case 'Produtos':
            iconName = 'pricetag-outline';
            break;
          case 'Carrinho':
            iconName = 'cart-outline';
            break;
          case 'Perfil':
            iconName = 'person-outline';
            break;
          case 'Restaurantes':
            iconName = 'restaurant-outline';
            break;
          case 'Mapa':
            iconName = 'map-outline';
            break;
          default:
            iconName = 'ellipse-outline';
            break;
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#0052cc',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Produtos">
      {props => <ProdutosScreen {...props} adicionarProduto={adicionarProduto} />}
    </Tab.Screen>
    <Tab.Screen name="Carrinho">
      {props => <CarrinhoScreen {...props} produtosNoCarrinho={produtosNoCarrinho} calcularTotal={calcularTotal} />}
    </Tab.Screen>
    <Tab.Screen name="Perfil" component={PerfilScreen} />
    <Tab.Screen name="Restaurantes" component={RestaurantesScreen} />
    <Tab.Screen name="Mapa" component={MapaScreen} />
  </Tab.Navigator>
);

export default function App() {
  const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([]);

  const adicionarProduto = (produto) => {
    setProdutosNoCarrinho((prevProdutos) => [...prevProdutos, produto]);
  };

  const calcularTotal = () => {
    return produtosNoCarrinho.reduce((acc, produto) => acc + produto.preco, 0).toFixed(2);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main">
          {props => (
            <TabNavigator
              {...props}
              produtosNoCarrinho={produtosNoCarrinho}
              adicionarProduto={adicionarProduto}
              calcularTotal={calcularTotal}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}