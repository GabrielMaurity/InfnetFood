import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProdutosScreen from './ProdutosScreen';


const categoria = [
  { id: '1', nome: 'Lanches' },
  { id: '2', nome: 'Bebidas' },
  { id: '3', nome: 'Sobremesas' },
];


jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

const Stack = createStackNavigator();

const MockedNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Produtos" component={ProdutosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

describe('HomeScreen', () => {
  it('deve exibir a lista de categorias corretamente', () => {
    const { getByText } = render(<HomeScreen />);

    categoria.forEach((cat) => {
      expect(getByText(cat.nome)).toBeTruthy();
    });
  });

  it('deve navegar para a tela de produtos ao clicar em uma categoria', () => {
    const { getByText } = render(<MockedNavigator />);

    const categoriaItem = getByText('Lanches');
    fireEvent.press(categoriaItem);

    expect(getByText('Produtos')).toBeTruthy();
  });
});