import { View, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/button";
import Exercises from "../components/exercises";
import { handleFocus, handleBlur } from "../helpers/focusing";
import { storeData, getData } from "../helpers/memory";
import { styles } from "../styles";

const TricepsChestScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState();
  // require("../assets/images/triceps.jpg")
  const [firstMuscle, setFirstMuscle] = useState(true);
  const [newExercise1, setNewExercise1] = useState(false);
  const [exercise1, setExercise1] = useState("");

  useEffect(() => {
    // const loadBackgroundImage = async () => {
    //   try {
    //     const uri = await AsyncStorage.getItem("backgroundImage");
    //     if (uri) {
    //       setBackgroundImage(uri);
    //     }
    //   } catch (error) {
    //     console.error("Failed to load background image", error);
    //   }
    // };
    getData("backgroundImage");

    // loadBackgroundImage();
  }, []);

  const memory = useSelector((state) => state.exercises);

  const [propsMuscle1, setPropsMuscle1] = useState([
    "Підйом гантелі за головою",
    "Французький жим",
  ]);
  const [propsMuscle2, setPropsMuscle2] = useState([
    "Жим штанги на прямій скам'ї",
    "Жим штанги на наклонній скам'ї",
  ]);

  const biceps = () => {
    setFirstMuscle(true);
    setBackgroundImage(require("../assets/images/triceps.jpg"));
  };

  const back = () => {
    setFirstMuscle(false);
    setBackgroundImage(require("../assets/images/chest.jpg"));
  };

  const addExercise1 = () => {
    setPropsMuscle1((prevProps) => [...prevProps, exercise1]);
    setNewExercise1(false);
    setExercise1("");
  };

  const addExercise2 = () => {
    setPropsMuscle2((prevProps) => [...prevProps, "Нова вправа"]);
  };

  const addNewExercise1 = handleFocus(setNewExercise1);
  const cancelNewExercise1 = handleBlur(setNewExercise1);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Button text={"Тріцепс"} styles={styles.muscle} func={biceps} />
          <Button text={"Грудь"} styles={styles.muscle} func={back} />
        </View>
        {firstMuscle && (
          <Exercises
            exercises={propsMuscle1}
            addExercise={addExercise1}
            newExercise={newExercise1}
            addNewExercise={addNewExercise1}
            cancelNewExercise={cancelNewExercise1}
            exercise={exercise1}
            setExercise={setExercise1}
            memoryExercises={memory.exercises}
          />
        )}
        {!firstMuscle && (
          <Exercises exercises={propsMuscle2} addExercise={addExercise2} />
        )}
      </View>
    </ImageBackground>
  );
};

export default TricepsChestScreen;
