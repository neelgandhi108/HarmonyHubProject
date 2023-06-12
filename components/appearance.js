import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Appearance({ navigation }) {
  const [selectedColor, setSelectedColor] = useState("rgba(80, 208, 192, 1)");

  useEffect(() => {
    const retrieveSelectedColor = async () => {
      try {
        const color = await AsyncStorage.getItem('selectedColor');
        if (color !== null) {
          setSelectedColor(color);
        }
      } catch (error) {
        console.log('Failed to retrieve selected color:', error);
      }
    };

    retrieveSelectedColor();
  }, []);

  const handleColorChange = async (color) => {
    try {
      await AsyncStorage.setItem('selectedColor', color);
      setSelectedColor(color);
    } catch (error) {
      console.log('Failed to store color:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Appearance</Text>
      </View>
      <View style={[styles.additionalBox, { backgroundColor: selectedColor }]} />
      <View style={styles.colorContainer}>
        <Text style={styles.colorLabelText}>Choose system color</Text>
        <View style={styles.colorBoxWrapper}>
          <View style={[styles.colorBox, { backgroundColor: selectedColor }]} />
        </View>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => handleColorChange("rgba(80, 208, 192, 1)")}
        >
          <View style={[styles.colorBox, { backgroundColor: "rgba(80, 208, 192, 1)" }]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => handleColorChange("rgba(255, 214, 110, 1)")}
        >
          <View style={[styles.colorBox, { backgroundColor: "rgba(255, 214, 110, 1)" }]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => handleColorChange("rgba(255, 110, 245, 1)")}
        >
          <View style={[styles.colorBox, { backgroundColor: "rgba(255, 110, 245, 1)" }]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => handleColorChange("rgba(110, 163, 255, 1)")}
        >
          <View style={[styles.colorBox, { backgroundColor: "rgba(110, 163, 255, 1)" }]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => handleColorChange("rgba(134, 110, 255, 1)")}
        >
          <View style={[styles.colorBox, { backgroundColor: "rgba(134, 110, 255, 1)" }]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 18,
  },
  header: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  additionalBox: {
    backgroundColor: "rgba(80, 208, 192, 1)",
    height: 50,
  },
  colorContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  colorLabelText: {
    fontSize: 18,
    marginBottom: 10,
  },
  colorBoxWrapper: {
    alignItems: "center",
    marginBottom: 10,
  },
  colorButton: {
    width: 80,
    height: 80,
    margin: 10,
  },
  colorBox: {
    flex: 1,
    borderRadius: 10,
  },
});

