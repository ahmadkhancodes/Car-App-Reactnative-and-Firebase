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

function listOfCars({ navigation }) {
  const [carList, setCarList] = React.useState([]);

  const getData = async () => {
    const response = await fetch(
      'https://carapp-42007-default-rtdb.firebaseio.com/car.json'
    );
    const data = await response.json();
    setCarList(Object.values(data));
  };

   const deleteData = () => {
    const id = "";
    var requestOptions = {
      method: "DELETE",
    };
    fetch(
      `https://carapp-42007-default-rtdb.firebaseio.com/car/${id}.json`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    getData();
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: '75%',
          height: 40,
          margin: 10,
          backgroundColor: 'black',
          borderRadius: 5,
          padding: 5,
          textAlign: 'center',
          color: 'white',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Add Car')}>
        + Add Car
      </TouchableOpacity>
      <FlatList
        data={carList}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Car Details', JSON.stringify(item))}>
            <View
            style={{
              justifyContent: 'center',
              flexDirection: 'column',
              borderWidth: 2,
              borderColor: 'black',
              padding : 5,
              backgroundColor: 'grey',
              marginVertical: 5,

            }}
            >
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
                justifyContent: 'space-between',
                paddingHorizontal: 30,
              }}>
              <Text>{item.make}</Text>
              <Text>{item.modal}</Text>
              <Text>{item.engine}</Text>
              <Text>{item.color}</Text>
              <Text>{item.year}</Text>
              </View>
             <Button title='Delete' color= 'black'
             onPress={()=> deleteData}
             ></Button>
            </View>
          </TouchableOpacity>
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

export default listOfCars;
