import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  background: {
    // sta
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  photoBox: {
    position: "absolute",
    left: "50%",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    transform: [{ translateX: -windowWidth / 9 }],
  },
  photoAdd: {
    position: "absolute",
    bottom: 14,
    right: -13,
    color: "#FF6C00",
  },
  header: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 32,
  },
  lastInput: {
    marginBottom: 43,
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  focusedInput: {
    backgroundColor: "transparent",
    borderColor: "#FF6C00",
  },
  redirect: {
    fontSize: 16,
    lineHeight: 19,
    marginLeft: "auto",
    marginRight: "auto",

    color: "#1B4371",
  },
  standardFont: {
    fontSize: 16,
    lineHeight: 19,
  },

  //input styles
  containerInput: {
    width: "80%",
  },
  input: {
    width: "100%",
    height: 50,

    padding: 16,

    fontSize: 16,
    lineHeight: 19,

    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,

    backgroundColor: "rgb(246, 246, 246)",
  },
  lastInputMargin: {
    marginBottom: 16,
  },
  hide: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  postCommentButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 17,
  },

  //create post screen
  postContainer: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
  imageBox: {
    justifyContent: "center",
    height: 240,
    marginBottom: 8,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    overflow: "hidden",
  },
  postInput: {
    height: 50,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    opacity: 0.3,
    zIndex: -1,
  },
  imageButton: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    top: 120,
    left: "50%",
    borderRadius: 30,
    overflow: "hidden",

    transform: [{ translateX: -30 }, { translateY: -30 }],

    zIndex: 10,
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginBottom: 32,
    paddingLeft: 5,
  },

  //likes
  likeListBox: {
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    bottom: 25,
    left: 35,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,

    borderWidth: 1,
    borderColor: "rgb(0, 0, 0)",
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "height 0.5s ease",
  },
  likeList: {
    textAlign: "center",
    color: "rgb(255, 255, 255)",
    opacity: 1,
  },
  likeShowAllBox: {
    marginTop: 5,

    borderTopWidth: 1,
    borderStyle: "dashed",
    borderTopColor: "#21130d",
    opacity: 0.5,
  },
  likeShowAllText: {
    textAlign: "center",
    color: "#FFFFFF",
  },

  //camera
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },
  photoButton: {
    position: "relative",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 30,
    overflow: "hidden",
  },

  //post screen
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  postNickname: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  postEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
    opacity: 0.8,
  },

  //general
  wholeBox: {
    width: "100%",
    height: "100%",
  },
  rotate45: {
    transform: "rotate(45deg)",
    backgroundColor: "#E8E8E8",
    borderRadius: 13.5,
  },
});
