import { Search, Profile, Home, CreatePost } from '../Screens';
import NavigationString from './NavigationString';
import TabRoutes from './TabRoutes';
export default function (Stack) {
  return (
    <>
      {/* <Stack.Screen
        name={NavigationString.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationString.CREATE_POST}
        component={CreatePost}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationString.PRFILE}
        component={Profile}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name={NavigationString.TAB_ROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </>
  );
}
