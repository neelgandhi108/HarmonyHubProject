import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Onboarding01() {
  return (
    <View style={styles.Onboarding01}>
      <View style={styles.Group138}>
        <View style={styles.Group255}>
          <Text style={styles.LargeTitle}>Harmony Hub</Text>
          <Image
            style={styles.Screenshot202305082131131}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/aojtidmw7ej-435%3A14136?alt=media&token=57cc03c1-10ba-4e9e-b695-de8b898a9bc5",
            }}
          />
          <View style={styles.Text}>
            <Text style={styles.Title}>Hi there!</Text>
            <Text style={styles.Body}>
              Welcome to HarmonyHub! Let’s get started with setting up your
              account.
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.IconOutlinedDirectionsChevronRight}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/aojtidmw7ej-454%3A15189?alt=media&token=0b350adc-4dd9-4c63-bce4-35a04344c114",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Onboarding01: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 436,
    height: 932,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 122,
    paddingBottom: 182,
    borderColor: "rgba(0,0,0,1)",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group138: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
  },
  Group255: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingLeft: 3,
    boxSizing: "border-box",
  },
  LargeTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "40",
    lineHeight: "102%",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  Screenshot202305082131131: {
    width: 380,
    height: 307,
  },
  Text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 3,
    boxSizing: "border-box",
  },
  Title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "40",
    lineHeight: "102%",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  Body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "16",
    lineHeight: "138%",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "400",
    textAlign: "center",
  },
  Progressdots: {
    width: 46,
    height: 10,
  },
  IconOutlinedDirectionsChevronRight: {
    position: "absolute",
    top: 555,
    left: 401,
    width: 36,
    height: 36,
  },
})
