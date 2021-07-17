import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function addCar() {
  const [photo, setPhoto] = React.useState();
  const [make, setMake] = React.useState();
  const [modal, setModal] = React.useState();
  const [year, setYear] = React.useState();
  const [engine, setEngine] = React.useState();
  const [color, setColor] = React.useState();
  const [validStatus, setValidStatus] = React.useState(false);

  const isValid = (year) => {
    if (year.length == 4) {
      setValidStatus(true);
      setYear(year)
    } else {
      setValidStatus(false);
    }
  };

  const saveToFirebase = () => {
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        photo: photo,
        make: make,
        modal: modal,
        year: year,
        engine: engine,
        color: color,
      }),
    };

    fetch(
      'https://carapp-42007-default-rtdb.firebaseio.com/car.json',
      requestOptions
    )
      .then((response) => response.text())
      .then(
        (result) => console.log(result)
        )
      .catch((error) => console.log('error', error));
     alert('Data Saved Successfully !')
    
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Enter Details
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Car Photo Link"
        onChangeText={(value) => setPhoto(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Made by e.g. Toyota"
        onChangeText={(value) => setMake(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Modal Name e.g Corolla"
        onChangeText={(value) => setModal(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Built Year"
        onChangeText={(value) => isValid(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Engine Power e.g 1200cc"
        onChangeText={(value) => setEngine(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        onChangeText={(value) => setColor(value)}
      />
      <TouchableOpacity
        style={{
          width: '75%',
          height: 40,
          margin: 5,
          backgroundColor: !validStatus == true ? 'grey' : 'black',
          borderRadius: 5,
          padding: 5,
          textAlign: 'center',
          color: 'white',
          justifyContent: 'center',
        }}
        disabled={!validStatus}
        onPress={saveToFirebase}>
        Add
      </TouchableOpacity>
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
  input: {
    width: '75%',
    height: 40,
    margin: 5,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
  },
});

export default addCar;
