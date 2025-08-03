import { Stack } from "expo-router";
import AppProvider from "./context/AppContext";
export default function RootLayout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="index"/>
        <Stack.Screen name="SignUp" />
        <Stack.Screen name="LogIn" />
        <Stack.Screen name="CheckAppD" />
        <Stack.Screen name="(pTabs)" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>);
}

