import { TouchableOpacity, Text } from "react-native";

import { styles } from "../styles";

const ApproachButton = ({ func, text, disable }) => {
  return (
    <TouchableOpacity
      style={[styles.approach, styles.center]}
      onPress={() => func()}
      disabled={disable}
    >
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ApproachButton;
