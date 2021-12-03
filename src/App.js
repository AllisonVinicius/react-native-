import { createStackNavigator } from '@react-navigation/stack';
import UserList from './Views/UserList';



const stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <Stack.Screen
                name='UserList'
                component={UserList}
              />
            <Stack.Screen
                name='UserForm'
                component={UserForm}
              />

            </stack.Navigator>
        </NavigationContainer>
    )
}