import { View, ImageBackground } from "react-native";
import { useState } from "react";

import Button from "../components/Button";
import Exercises from "../components/Exercises";
import { styles } from "../styles";

const BicepsBackScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    require("../assets/images/biceps.jpg")
  );
  const [firstMuscle, setFirstMuscle] = useState(true);
  const [newExercise1, setNewExercise1] = useState(false);
  const [exercise1, setExercise1] = useState("");

  const [propsMuscle1, setPropsMuscle1] = useState([
    "Прямий жим гантелей стоячи",
    "Жим гантелей стоячи всередину",
    "Жим гантелі сидячи",
  ]);
  const [propsMuscle2, setPropsMuscle2] = useState([
    "Жим гантелі на наклонній скам'ї",
    "Тяга штанги в наклоні",
    "Станова тяга",
  ]);

  const biceps = () => {
    setFirstMuscle(true);
    setBackgroundImage(require("../assets/images/biceps.jpg"));
  };

  const back = () => {
    setFirstMuscle(false);
    setBackgroundImage(require("../assets/images/back.jpg"));
  };

  const addExercise1 = () => {
    setPropsMuscle1((prevProps) => [...prevProps, exercise1]);
    setNewExercise1(false);
    setExercise1("");
  };

  const addExercise2 = () => {
    setPropsMuscle2((prevProps) => [...prevProps, "Нове вправа"]);
  };

  const addNewExercise1 = () => {
    setNewExercise1(true);
  };

  const cancelNewExercise1 = () => {
    setNewExercise1(false);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Button text={"Біцепс"} styles={styles.muscle} func={biceps} />
          <Button text={"Спина"} styles={styles.muscle} func={back} />
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
          />
        )}
        {!firstMuscle && (
          <Exercises exercises={propsMuscle2} addExercise={addExercise2} />
        )}
      </View>
    </ImageBackground>
  );
};

export default BicepsBackScreen;
