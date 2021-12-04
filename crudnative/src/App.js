import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Icon} from 'react-native-elements';
import UserForm from './views/UserForm';
import UserList from './views/UserList';

const Stack = createStackNavigator();

export default props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={() => {
            return {
              title: 'Lista de Usuarios',
              headerRight: () => (
                <Button
                  type="clear"
                  icon={<Icon name="add" size={25} color="white" />}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{
            title: 'Formulário de Usuários',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {},
};
