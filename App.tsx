import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import store from "./src/store";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <NativeBaseProvider>
            <Navigation />
            <StatusBar />
          </NativeBaseProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
