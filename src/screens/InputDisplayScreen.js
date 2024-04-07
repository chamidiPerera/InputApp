import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const InputDisplayScreen = () => {
  const [districtName, setDistrictName] = useState('Colombo');
  const [name, setName] = useState('Chamidi Perera');
  const [inputDistrictName, setInputDistrictName] = useState('');
  const [inputName, setInputName] = useState('');

  const onSubmitpress = () => {
    setDistrictName(inputDistrictName);
    setName(inputName);
    setInputDistrictName('');
    setInputName('');
  };

  const isSubmitDisabled = inputDistrictName === '' || inputName === '';

  return (
    <View style={styles.mainCntainer}>
      <Image
        source={require('../images/mainScreenImage.png')}
        style={styles.mainScreenImage}
      />
      <Text style={styles.districtname}>{districtName}</Text>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.inputAnotherText}>
        Or input a different name and district?
      </Text>

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="District Name"
        placeholderTextColor="#36B37E"
        onChangeText={setInputDistrictName}
        value={inputDistrictName}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Your Name"
        placeholderTextColor="#36B37E"
        onChangeText={setInputName}
        value={inputName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onSubmitpress}
        disabled={isSubmitDisabled}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputDisplayScreen;

const styles = StyleSheet.create({
  mainCntainer: {
    flex: 1,
    flexDirection: 'colomn',
    alignItems: 'center',
  },
  mainScreenImage: {
    width: '70%',
    height: '40%',
  },

  districtname: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  name: {
    fontSize: 22,
    fontWeight: 'normal',
    color: '#000000',
  },

  inputAnotherText: {
    margin: 20,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000000',
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#36B37E',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  button: {
    marginVertical: 40,
    backgroundColor: '#36B37E',
    width: '45%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
  },
});
