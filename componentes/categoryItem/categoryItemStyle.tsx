import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
 
  card: {
    height: 145,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 14,
 
    backgroundColor: "#000",
 
    elevation: 3,
 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
 
  imagemCategoria: {
    width: "100%",
    height: "100%",
  },
 
  overlay: {
    position: "absolute",
 
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
 
    backgroundColor: "rgba(0, 0, 0, 0.40)",
 
    justifyContent: "center",
    alignItems: "center",
  },
 
  tituloCategoria: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
 
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 4,
  },
 
});
 