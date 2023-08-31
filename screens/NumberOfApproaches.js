import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "../styles";
import ApproachButton from "../components/ApproachesButton";
import { setNumberOfApproaches } from "../redux/exercises/exercisesOperations";

const NumberOfApproachesScreen = () => {
  const {
    params: { exercise },
  } = useRoute();

  const oldExercise = useSelector((state) => state.exercises.exercises);
  console.log("ex", oldExercise[exercise]);

  const [quantity, setQuantity] = useState(oldExercise[exercise] || [0, 0, 0]);
  const [exercisesCompleted, setExercisesCompleted] = useState(-1);
  const [exerciseCompleted, setExerciseCompleted] = useState(0);
  const [askWindow, setAskWindow] = useState(false);
  const [approach, setApproach] = useState(0);

  useEffect(() => {
    const indexWithZero = quantity.findIndex((el) => el === 0);
    console.log("indexWithZero", indexWithZero);
    if (indexWithZero === 1) {
      setExerciseCompleted(1);
    } else if (indexWithZero === 2) {
      setExerciseCompleted(2);
    } else if (indexWithZero < 0) {
      setExerciseCompleted(3);
    }
    setExercisesCompleted(indexWithZero);
  }, []);
  console.log("exercisesCompleted", exerciseCompleted);

  console.log("quantity", quantity);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const add = (number) => {
    setQuantity((prev) =>
      prev.map((value, index) => (index === approach ? value + number : value))
    );
  };

  const changeApproach = (number) => {
    setApproach(number);
  };

  const numberOfApproach = async () => {
    try {
      await dispatch(
        setNumberOfApproaches({
          exercise,
          quantity,
        })
      );

      // Тепер ми чекаємо завершення дії setApproach перед викликом navigation.navigate
      // navigation.navigate(-1);
    } catch (error) {
      console.log(22222);
      console.error(error);
    }
  };

  const onFocusButton = () => {
    console.log(11111);
    setAskWindow(true);
  };

  return (
    <View style={{ paddingTop: 100 }}>
      <View style={[styles.exerciseName, styles.center]}>
        <Text style={{ textAlign: "center" }}>{exercise}</Text>
      </View>
      {/* <View style={[styles.exerciseName, styles.center]}> */}
      <Text style={{ textAlign: "center", paddingBottom: 15 }}>Підхід</Text>
      {/* </View> */}
      <View
        style={[
          { flexDirection: "row", width: 200, marginBottom: 45 },
          styles.center,
        ]}
      >
        <ApproachButton
          func={() => changeApproach(0)}
          text={"1"}
          done={!!(exerciseCompleted >= 1)}
          longPress={onFocusButton}
          focus={onFocusButton}
          isFocused={askWindow}
        />
        <ApproachButton
          func={() => changeApproach(1)}
          text={"2"}
          done={exerciseCompleted >= 2}
        />
        <ApproachButton
          func={() => changeApproach(2)}
          text={"3"}
          done={exerciseCompleted === 3}
        />
      </View>
      {/* <View style={[styles.exerciseName, styles.center]}> */}
      <Text style={{ textAlign: "center", paddingBottom: 25 }}>
        К-сть повторів
      </Text>
      {/* </View> */}
      <View
        style={[
          {
            flexDirection: "row",
            width: 150,
            marginBottom: 15,
          },
          styles.center,
        ]}
      >
        <TouchableOpacity
          onPress={() => add(-1)}
          disabled={quantity[approach] === 0}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={[
            styles.approach,
            styles.center,
            { position: "relative", top: -10 },
          ]}
        >
          <Text style={{ textAlign: "center" }}> {quantity[approach]} </Text>
        </View>
        <TouchableOpacity onPress={() => add(1)}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <ApproachButton
          func={() => add(-10)}
          text={"-10"}
          disable={quantity[approach] < 10}
        />
        <ApproachButton func={() => add(10)} text={"+10"} />
      </View>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <ApproachButton
          func={() => add(-50)}
          text={"-50"}
          disable={quantity[approach] < 50}
        />
        <ApproachButton func={() => add(50)} text={"+50"} />
      </View>
      <TouchableOpacity style={[styles.center]} onPress={numberOfApproach}>
        <Ionicons name="checkmark-circle-outline" size={38} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NumberOfApproachesScreen;
