import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

function manageCarBrands() {
  const [carBrandList, setCarBrandList] = React.useState([
    {
      photo:
        'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      make: 'Toyota',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1570294646112-27ce4f174e38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1034&q=80',
      make: 'Lamborghini',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1605270396307-d00ba5cda1d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      make: 'Suzuki',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      make: 'BMW',
    },
    {
      photo: 'https://images.unsplash.com/photo-1565472460332-06eb2ba0fb68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      make: 'Landcruiser'
    }
  ]);
  return (
    <View style={styles.container}>
    <Text
    style={{
      fontSize: 30,
      fontWeight: 'bold'
    }}
    >Car Brands</Text>
      <FlatList
        data={carBrandList}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'column',
              borderWidth: 2,
              borderColor: 'black',
              padding: 5,
              backgroundColor: 'grey',
              marginVertical: 5,
            }}>
            <Image
              style={{
                width: 300,
                height: 100,
              }}
              source={{
                uri: item.photo,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingHorizontal: 30,
              }}>
              <Text>{item.make}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default manageCarBrands;
