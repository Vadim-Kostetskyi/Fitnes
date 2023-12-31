import { View, Text, ImageBackground } from "react-native";

import Button from "../components/button";
import { styles } from "../styles";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/main.jpg")}
      style={styles.background}
    >
      <View style={{ alignItems: "center", paddingTop: 220 }}>
        <Button
          text={"Календар"}
          screen={"Training"}
          styles={styles.homeChoose}
        />
        <Button
          text={"Тренування"}
          screen={"Training"}
          styles={styles.homeChoose}
        />
        <Button
          text={"Атлетика"}
          screen={"Training"}
          styles={[styles.homeChoose, styles.noMarginBottom]}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
