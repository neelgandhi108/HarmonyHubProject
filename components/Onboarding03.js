import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground,TouchableOpacity } from "react-native"

export default function Onboarding03({ navigation }) {
  return (
    <View style={styles.Onboarding03}>
      <View style={styles.Group257}>
        <View style={styles.Text}>
          <Text style={styles.LargeTitle}>We’re all set!</Text>
          <Text style={styles.Body}>
            Now let’s gather some info to make your perfect schedule!
          </Text>
        </View>
        <Image
          style={styles.ObjectOther13}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nxlrmiinjf-435%3A14157?alt=media&token=e60461b6-5106-4087-8c4c-5596c570046c",
          }}
        />
      </View>
      <View style={styles.Group361}>
        <View style={styles.Button}>
          <TouchableOpacity onPress={() => navigation.navigate('Starting1')}>
          <Text style={styles.LetSGo}>Let’s go!</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Group256}>
        <View style={styles.Group207}></View>
      </View>
      <Image
        style={styles.IconOutlinedDirectionsChevronLeft}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nxlrmiinjf-454%3A15185?alt=media&token=6383fb46-8654-4899-9125-2f1f6c13acc7",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Onboarding03: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 436,
    height: 932,
    paddingLeft: 30,
    paddingRight: 31,
    paddingTop: 122,
    paddingBottom: 100,
    borderColor: "rgba(0,0,0,1)",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group257: {
    position: "absolute",
    top: 122,
    left: 30,
    width: "100%",
    height: 497,
    boxSizing: "border-box",
  },
  Text: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    paddingLeft: 74,
    paddingRight: 76,
    paddingBottom: 5,
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
  ObjectOther13: {
    position: "absolute",
    top: "33%",
    bottom: "19.32%",
    left: "9.6%",
    right: "9.33%",
    width: 304,
    height: 302,
  },
  Group361: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
  },
  Progressdots: {
    display: "flex",
    top: 460,
    left: 130,
    width: 46,
    height: 10,
  },
  Button: {
    display: "flex",
    top: 470,
    left: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
    boxSizing: "border-box",
    backgroundColor: "rgba(80,208,192,1)",
  },
  LetSGo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "20",
    right: 55,
    lineHeight: "110%",
    fontFamily: "Nunito, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  Group256: {
    position: "absolute",
    top: 122,
    left: -404,
    width: 412,
    height: 606,
    paddingLeft: 121,
    paddingTop: 122,
    paddingBottom: 386,
    boxSizing: "border-box",
  },
  Group207: {
    width: 291,
    height: "100%",
    boxSizing: "border-box",
  },
  IconOutlinedDirectionsChevronLeft: {
    position: "absolute",
    top: 557,
    width: 36,
    height: 36,
  },
})
