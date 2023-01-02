import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";

type AuthProps = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthProps>;

const { Navigator, Screen } = createNativeStackNavigator<AuthProps>();

function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn}></Screen>
      <Screen name="SignUp" component={SignUp}></Screen>
    </Navigator>
  );
}

export default AuthRoutes;
