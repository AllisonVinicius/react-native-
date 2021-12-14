import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <View>
      <Text>Name</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe um nome"
        value={user.name}
      />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    heigth: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
