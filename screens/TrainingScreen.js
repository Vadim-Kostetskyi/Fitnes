import { View, ImageBackground } from "react-native";

import Button from "../components/button";
import { styles } from "../styles";

const TrainingScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/training.jpg")}
      style={styles.background}
    >
      <View style={{ alignItems: "center", paddingTop: 250 }}>
        <Button
          text={"Тріцепс/грудь"}
          screen={"TricepsChest"}
          styles={styles.trainingChoose}
        />
        <Button
          text={"Біцепс/спина"}
          screen={"BicepsBack"}
          styles={[styles.trainingChoose, styles.noMarginBottom]}
        />
      </View>
    </ImageBackground>
  );
};

export default TrainingScreen;
