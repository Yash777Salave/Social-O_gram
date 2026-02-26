import { InitialScreen, Login, SignUp } from '../Screens';
import navigationString from './NavigationString';
export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationString.INITIAL_SCREEN}
        component={InitialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationString.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationString.SIGN_UP}
        component={SignUp}
        options={{ headerShown: false }}
      />
    </>
  );
}
