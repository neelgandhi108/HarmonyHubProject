import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function Starting3({ navigation }) {
  const [isClassesSelected, setClassesSelected] = useState(false);

  const handleClassesSelect = () => {
    setClassesSelected(!isClassesSelected);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.Frame2}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.AlmostDone}>Almost done!</Text>
        <Text style={styles.WouldYouLikeToLinkYo}>
          Would you like to link your Google Calendar?
        </Text>
        <Text style={styles.YouCouldAlsoAddInYou}>
          You could also add in your mandatory schedule like classes manually.
        </Text>
      </View>
      <View style={styles.Frame41}>
        <View style={styles.Frame4}>
          <View style={styles.Frame21}>
            <TouchableOpacity
              style={!isClassesSelected ? styles.Button1Selected : styles.Button1}
              onPress={handleClassesSelect}
            >
              <Text style={styles.Yes}>Yes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Frame3}>
            <TouchableOpacity
              style={isClassesSelected ? styles.Button11Selected : styles.Button11}
              onPress={handleClassesSelect}
            >
              <Text style={styles.No}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.ContinueButton}>
      <TouchableOpacity onPress={() => navigation.navigate('Starting4')}>
          <Text style={styles.Continue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 436,
    height: 932,
    padding: 35,
    backgroundColor: "rgba(255,255,255,1)",
  },
  backButton: {
    position: 'absolute',
    top: -60,
    left: 0,
  },
  Frame2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 360,
    height: 260,
    marginRight: 10,
    marginTop: 100,
  },
  AlmostDone: {
    color: "rgba(115,123,125,1)",
    fontSize: 30,
    lineHeight: 30,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  WouldYouLikeToLinkYo: {
    color: "rgba(20,20,20,1)",
    fontSize: 30,
    lineHeight: 30,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  YouCouldAlsoAddInYou: {
    color: "rgba(115,123,125,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  Frame41: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 150,
    marginRight: 10,
  },
  Frame4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  Frame21: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: "100%",
    marginRight: 6,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,1)",
  },
  Button1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "rgba(226,229,230,1)",
  },
  Button1Selected: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginRight: 8,
    padding: 16,
    borderRadius: 15,
    backgroundColor: "rgba(80,208,192,1)",
  },
  Yes: {
    color: "rgba(115,123,125,1)",
    fontSize: 24,
    lineHeight: 24,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "500",
    textAlign: "center",
  },
  Frame3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: "100%",
    borderRadius: 16,
    backgroundColor: "rgba(244,245,244,1)",
  },
  Button11: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "rgba(195,203,205,1)",
  },
  Button11Selected: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginRight: 8,
    padding: 16,
    borderRadius: 15,
    backgroundColor: "rgba(80,208,192,1)",
  },
  No: {
    color: "rgba(115,123,125,1)",
    fontSize: 24,
    lineHeight: 24,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "500",
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
    marginTop: 215,
  },
  Continue: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(252,252,252,1)",
    fontSize: "20",
    lineHeight: "20",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "500",
    textAlign: "center",
  },
});
