import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { styles } from "../styles";
import ApproachButton from "../components/ApproachesButton";
import setApproach from "../redux/exercises/exercisesReduser";

const NumberOfApproachesScreen = () => {
  const [quantity, setQuantity] = useState([0, 0, 0]);
  const [approach, setApproach] = useState(0);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    params: { exercise },
  } = useRoute();

  const add = (number) => {
    console.log(number);
    // setQuantity((prev) => prev[0] + number);
    // console.log(quantity[0] + 1);
    setQuantity((prev) =>
      prev.map((value, index) => (index === approach ? value + number : value))
    );
  };

  const changeApproach = (number) => {
    setApproach(number);
  };

  // const numberOfApproach = () => {
  //   dispatch(
  //     setApproach({
  //       dfgdfgdfg: 123,
  //     })
  //   );
  //   console.log(123);
  //   navigation.navigate(-1);
  // };

  const numberOfApproach = () => {
    console.log(1111111111111111);
    return async (dispatch) => {
      console.log(2222);
      try {
        await dispatch(
          setApproach({
            dfgdfgdfg: 123,
          })
        );

        console.log(123);

        // Тепер ми чекаємо завершення дії setApproach перед викликом navigation.navigate
        navigation.navigate(-1);
      } catch (error) {
        console.error(error);
      }
    };
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
        <ApproachButton func={() => changeApproach(0)} text={"1"} />
        <ApproachButton func={() => changeApproach(1)} text={"2"} />
        <ApproachButton func={() => changeApproach(2)} text={"3"} />
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
