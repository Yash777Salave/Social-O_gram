import { Search, Profile, Home, CreatePost } from '../Screens';
import NavigationString from './NavigationString';
import TabRoutes from './TabRoutes';
export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={NavigationString.TAB_ROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </>
  );
}
