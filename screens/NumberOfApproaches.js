import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../styles";

const NumberOfApproachesScreen = () => {
  const [quantity, setQuantity] = useState([0, 0, 0]);

  const [approach, setApproach] = useState(0);

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
        <TouchableOpacity
          style={[styles.approach, styles.center]}
          onPress={() => changeApproach(0)}
        >
          <Text style={{ textAlign: "center" }}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.approach, styles.center]}
          onPress={() => changeApproach(1)}
        >
          <Text style={{ textAlign: "center" }}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.approach, styles.center]}
          onPress={() => changeApproach(2)}
        >
          <Text style={{ textAlign: "center" }}>3</Text>
        </TouchableOpacity>
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
        <TouchableOpacity
          style={[styles.approach, styles.center]}
          onPress={() => add(-10)}
          disabled={quantity[approach] < 10}
        >
          <Text style={{ textAlign: "center" }}>-10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.approach, styles.center]}
          onPress={() => add(10)}
        >
          <Text style={{ textAlign: "center" }}>+10</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <TouchableOpacity
          style={[styles.approach, styles.center]}
          onPress={() => add(-50)}
          disabled={quantity[approach] < 50}
        >
          <Text style={{ textAlign: "center" }}>-50</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.approach, styles.center]}
          onPress={() => add(50)}
        >
          <Text style={{ textAlign: "center" }}>+50</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.center]}
        // onPress={() => add(50)}
      >
        <Ionicons name="checkmark-circle-outline" size={38} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NumberOfApproachesScreen;
