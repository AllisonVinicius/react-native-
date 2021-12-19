import React, {useContext} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {Button, Icon, ListItem} from 'react-native-elements';
import UserContext from '../context/UserContext';

export default props => {
  const {state, dispatch} = useContext(UserContext);
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja Excluir o usuario?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Nao',
      },
    ]);
  }
  /**button edit and delete user */
  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }
  /** function list user  */
  function getUserItem({item: user}) {
    return (
      <ListItem
        leftAvatar={{source: {uri: user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm', user)}
      />
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};
