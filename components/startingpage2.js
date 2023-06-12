import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
const Starting2 = ({ navigation }) => {
  const priorityItems = [
    { name: "Class" },
    { name: "Work" },
    { name: "Exercise" },
  ];
  const [selectedRatings, setSelectedRatings] = useState({});
  const handleRatingSelect = (item, rating) => {
    setSelectedRatings((prevRatings) => ({
      ...prevRatings,
      [item]: rating,
    }));
  };
  const renderRatingButtons = (item) => {
    const ratings = [1, 2, 3, 4, 5, 6, 7];
    return ratings.map((rating) => (
      <TouchableOpacity
        key={rating}
        style={[
          styles.RatingButton,
          selectedRatings[item] === rating && styles.SelectedRatingButton,
        ]}
        underlayColor="transparent"
        onPress={() => handleRatingSelect(item, rating)}
      >
        <Text style={styles.RatingText}>{rating}</Text>
      </TouchableOpacity>
    ));
  };
  const renderPriorityItems = () => {
    return priorityItems.map((item, index) => (
      <View key={index} style={styles.PriorityItemContainer}>
        <Text style={styles.PriorityItem}>{item.name}</Text>
        <View style={styles.RatingContainer}>
          {renderRatingButtons(item.name)}
        </View>
      </View>
    ));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.hi}>Great!</Text>
          <Text style={styles.headerText}>Would you like to rate their importance?</Text>
          <Text style={styles.subheaderText}>This will help the system better schedule for you.</Text>
          <Text style={styles.text}>7 = must do</Text>
          <Text style={styles.text}>1 = super flexible</Text>
          {renderPriorityItems()}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Starting3')}>
              <View style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(252, 252, 252, 1)",
    padding: "5%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 25,
  },
  hi: {
    color: "rgba(115, 123, 125, 1)",
    fontSize: 30,
    lineHeight: 30,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 40,
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
  text: {
    color: "rgba(115, 123, 125, 1)",
    fontFamily: "RedHatDisplay_400Regular",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "center",
    marginTop: 8,
  },
  PriorityItemContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: "100%",
    height: "30%",
  },
  PriorityItem: {
    color: "rgba(115, 123, 125, 1)",
    fontFamily: "RedHatDisplay_400Regular",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "left",
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  RatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    width: "100%",
    paddingHorizontal: 10,
  },
  RatingButton: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(195, 203, 205, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  SelectedRatingButton: {
    backgroundColor: "rgba(80, 208, 192, 1)",
  },
  RatingText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: "rgba(80, 208, 192, 1)",
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
export default Starting2;