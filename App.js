import React from "react";
import { SafeAreaView } from "react-native";
import FutsalScore from "./src/components/FutsalScore";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
      <FutsalScore />
    </SafeAreaView>
  );
};

export default App;
