import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

function carDetails({ navigation, route }) {
  const [recObj, setRecObj] = React.useState(JSON.parse(route.params));
  return (
    <View style={styles.container}>
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
            height: 200,
          }}
          source={{
            uri: recObj.photo,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
          }}>
          <Text>{recObj.make}</Text>
          <Text>{recObj.modal}</Text>
          <Text>{recObj.engine}</Text>
          <Text>{recObj.color}</Text>
          <Text>{recObj.year}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default carDetails;
