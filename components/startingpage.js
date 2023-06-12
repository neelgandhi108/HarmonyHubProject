import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView } from "react-native";
import SelectableButton from './SelectableButton';
import * as Font from 'expo-font';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Starting1({ navigation }) {
  const [isClassesSelected, setClassesSelected] = useState(false);

  const handleClassesSelect = () => {
    setClassesSelected(!isClassesSelected);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.frame}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.hi}>Hi!</Text>
        <Text style={styles.headerText}>
          What do you want to work on this term?
        </Text>
        <Text style={styles.subheaderText}>Please select at least 3</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          <SelectableButton label="Classes" style={styles.selector} />
          <SelectableButton label="Career" style={styles.selector} />
          <SelectableButton label="Interviewing" style={styles.selector} />
          <SelectableButton label="Job" style={styles.selector} />
          <SelectableButton label="Skill Development" style={styles.selector} />
          <SelectableButton label="Networking" style={styles.selector} />
          <SelectableButton label="Office Hours" style={styles.selector} />
        </View>
        <View style={styles.buttonGroup}>
          <SelectableButton label="Sleep" styles={styles.selector} />
          <SelectableButton label="Fitness" styles={styles.selector} />
          <SelectableButton label="Friends" styles={styles.selector} />
          <SelectableButton label="Meditation" styles={styles.selector} />
          <SelectableButton label="Journaling" styles={styles.selector} />
          <SelectableButton label="Nutrition" styles={styles.selector} />
          <SelectableButton label="Other" styles={styles.selector} />
        </View>
      </View>
      <View style={styles.footer} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Starting2')}>
          <View style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    marginTop: 40,
    backgroundColor: "rgba(252, 252, 252, 1)",
  },
  frame: {
    marginBottom: 20,
    alignItems: "center",
  },
  backButton: {
    position: 'absolute',
    top:-15,
    left: 10,
  },
  hi: {
    color: "rgba(115, 123, 125, 1)",
    fontSize: 30,
    lineHeight: 30,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  headerText: {
    color: "rgba(115, 123, 125, 1)",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  subheaderText: {
    color: "rgba(115, 123, 125, 1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
    flex: 1,
  },
  selector: {
    marginBottom: 5,
  },
  footer: {
    flex: 1,
  },
  continueButton: {
    backgroundColor: "rgba(80,208,192,1)",
    padding: 15,
    borderRadius: 10,
    width: 150,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
