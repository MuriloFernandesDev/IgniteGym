import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";
import { useTheme } from "native-base";
import { Platform } from "react-native";
import { History } from "@screens/History";
import { Exercise } from "@screens/Exercise";

type AppRoutesProps = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: undefined;
};

export type AppNavigatorAppRoutes = BottomTabNavigationProp<AppRoutesProps>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

function AppRoutes() {
  const { sizes, colors } = useTheme();
  const iconSize = sizes[6];
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} height={iconSize} width={iconSize} />
          ),
        }}
        component={Home}
      ></Screen>
      <Screen
        name="history"
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} height={iconSize} width={iconSize} />
          ),
        }}
        component={History}
      ></Screen>
      <Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} height={iconSize} width={iconSize} />
          ),
        }}
        component={Profile}
      ></Screen>
      <Screen
        name="exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      ></Screen>
    </Navigator>
  );
}

export default AppRoutes;
