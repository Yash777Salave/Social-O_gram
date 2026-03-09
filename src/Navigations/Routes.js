import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import navigationString from './NavigationString';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(state => state?.isLogin);
  console.log('is Login :- ', isLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!isLogin ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
