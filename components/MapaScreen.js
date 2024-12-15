import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const mockRestaurants = [
  {
    id: 1,
    name: 'Restaurante A',
    description: 'Restaurante Japonês',
    latitude: -23.55052,
    longitude: -46.633308,
  },
  {
    id: 2,
    name: 'Restaurante B',
    description: 'Restaurante Italiano',
    latitude: -23.55152,
    longitude: -46.634308,
  },
  // Adicione mais restaurantes mockados aqui
];

const MapaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Image source={require('../assets/mapa.png')} style={styles.map} />
        {mockRestaurants.map((restaurant) => (
          <View
            key={restaurant.id}
            style={[
              styles.marker,
              {
                top: `${50 + (restaurant.latitude + 23.55052) * 100}%`,
                left: `${50 + (restaurant.longitude + 46.633308) * 100}%`,
              },
            ]}
          >
            <Text style={styles.markerText}>📍</Text>
          </View>
        ))}
      </View>
      <ScrollView style={styles.details}>
        {mockRestaurants.map((restaurant) => (
          <View key={restaurant.id} style={styles.restaurant}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.description}>{restaurant.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  marker: {
    position: 'absolute',
  },
  markerText: {
    fontSize: 24,
  },
  details: {
    backgroundColor: 'white',
    padding: 10,
  },
  restaurant: {
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
});

export default MapaScreen;