import { TouchableOpacity, Text } from "react-native";

import { styles } from "../styles";

const ApproachButton = ({
  func,
  text,
  disable,
  done,
  longPress,
  focus,
  bloor,
  isFocused,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.approach,
        styles.center,
        done && { backgroundColor: "#387205" },
        isFocused && { borderColor: "red", borderWidth: 1 },
      ]}
      onFocus={() => focus()}
      onBlur={bloor}
      activeOpacity={done ? 1 : 0.2}
      onPress={!done ? () => func() : null}
      disabled={disable}
      onLongPress={longPress ? () => longPress() : null}
    >
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ApproachButton;
