import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function Starting4({ navigation }) {
  return (
    <View style={styles.Starting4}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
      <View style={styles.Frame2}>
        <Text style={styles.AllDone}>All done!</Text>
        <Text style={styles.WeAreCalculatingYour}>
          We are calculating your best schedule for today...
        </Text>
        <Text style={styles.AlsoForTheWholeTerm}>Also for the whole term!</Text>
      </View>
      <View style={styles.ContinueButton}>
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
          <Text style={styles.Continue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  Starting4: {
    alignItems: "center",
    width: 430,
    height: 932,
    padding: 35,
    backgroundColor: "rgba(255,255,255,1)",
  },
  Frame2: {
    alignItems: "center",
    width: "100%",
    height: 260,
    marginRight: 10,
    marginTop: 100,
  },
  ThisShouldTakeAbout2: {
    top: 270,
    left: 59.51,
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },
  AllDone: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 20,
    color: "rgba(115,123,125,1)",
    fontSize: "30",
    lineHeight: "30",
    fontFamily: 'RedHatDisplay_900Black_Italic',
    fontWeight: "600",
    textAlign: "center",
  },
  backButton: {
    position: 'absolute',
    top: 75,
    left: 25,
  },
  WeAreCalculatingYour: {
    marginRight: 20,
    color: "rgba(20,20,20,1)",
    fontSize: 30,
    lineHeight: 30,
    fontFamily: "RedHatDisplay",
    fontWeight: 600,
    textAlign: "center",
  },
  AlsoForTheWholeTerm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 20,
    color: "rgba(55,63,65,1)",
    fontSize: "20",
    lineHeight: "20",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  ContinueButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 64,
    padding: 20,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 15,
    boxSizing: "border-box",
    backgroundColor: "rgba(80,208,192,1)",
    marginTop: 380,
  },
  Continue: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(252,252,252,1)",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 500,
    textAlign: "center",
  },
  Done: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 500,
  },
})
