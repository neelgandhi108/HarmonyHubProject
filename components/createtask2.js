import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

export default function CreateTask2({ navigation }) {
  return (
    <View style={styles.Iphone14ProMax14}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
      <View style={styles.Group1041}>
        <Text style={styles.ScheduleThisItemForM}>
          Schedule this item for me intelligently
        </Text>
        <View style={styles.Group7110}>
          <View style={styles.Rectangle70} />
          <Image
            style={styles.Question4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gx9rlu4nxia-486%3A14343?alt=media&token=a937af5e-fa41-4b39-9790-c84f7b91a7a9",
            }}
          />
        </View>
        <View style={styles.Group735}>
          <View style={styles.Group413}>
            <Text style={styles.CreateTask}>Create Task</Text>
            <Image
              style={styles.IconOutlinedSuggestedSymbolCloseX}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gx9rlu4nxia-486%3A14288?alt=media&token=4418cc37-5f26-4b9d-b0c0-1d14aa642799",
              }}
            />
          </View>
          <View style={styles.Group943}>
            <View style={styles.Group878}>
              <Image
                style={styles.IconCommunicationImport_contacts}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gx9rlu4nxia-486%3A14314?alt=media&token=0da4d852-7bc2-40a4-9041-b7a5f4909082",
                }}
              />
            </View>
            <View style={styles.Group0910}>
              <Text style={styles.Reading}>Reading</Text>
              <View style={styles.Line16} />
            </View>
          </View>
          <View style={styles.Group688}>
            <Text style={styles.When}>When?</Text>
            <Text style={styles.More}>More...</Text>
          </View>
          <View style={styles.Group221}>
            <View style={styles.Group594}>
              <Text style={styles.HowLong}>How long?</Text>
              <Text style={styles.More1}>More...</Text>
            </View>
            <View style={styles.Group188}>
              <View style={styles.Slider_for_time_length}>
                <View style={styles.Group053}>
                  <Text style={styles._1}>1</Text>
                  <Text style={styles._15}>15</Text>
                  <Text style={styles._30}>30</Text>
                  <Text style={styles._45}>45</Text>
                  <Text style={styles._1h}>1h</Text>
                </View>
                <View style={styles.Group426}>
                  <Text style={styles._15h}>1.5h</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.Group222}>
            <View style={styles.Group550}>
              <Text style={styles.HowOften}>How often?</Text>
              <Text style={styles.More2}>More...</Text>
            </View>
            <View style={styles.Group190}>
              <View style={styles.Slider_for_time_length1}>
                <View style={styles.Group689}>
                  <Text style={styles.Daily}>Daily</Text>
                  <Text style={styles.Weekly}>Weekly</Text>
                  <Text style={styles.Biweekly}>Biweekly</Text>
                  <Text style={styles.Monthly}>Monthly</Text>
                </View>
                <View style={styles.Group768}>
                  <Text style={styles.Once}>Once</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.Group250}>
            <Text style={styles.WhatColor}>What Color?</Text>
            <Image
              style={styles.Frame853}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gx9rlu4nxia-486%3A14335?alt=media&token=928ff9ff-9d19-4656-8cb4-f26e16092922",
              }}
            />
          </View>       
        <View style={styles.Group224}>
                    <Text style={styles.AnyDetails}>Any details?</Text>
                    <View style={styles.Group285}>
                    <Text style={styles.AddNotesSubTasksInsp}>
                        Add notes, sub-tasks, inspiring messages...
                    </Text>
                    </View>
                </View>
                <View style={styles.ContinueButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('MainScreen24')}>
                        <Text style={styles.Continue}>Continue</Text>
                        </TouchableOpacity>
                </View>
                </View>
            </View>
            </View>
  )
}

const styles = StyleSheet.create({
  Iphone14ProMax14: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 430,
    height: 1266,
    paddingTop: 51,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  backButton: {
    position: 'absolute',
    top: -15,
    left: 10,
  },
  Group1041: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  ScheduleThisItemForM: {
    top: 421,
    left: 75.69,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    textAlign: "center",
  },
  Group7110: {
    top: 409,
    display: "flex",
    flexDirection: "row",
    width: 326,
    height: 36,
    boxSizing: "border-box",
  },
  Rectangle70: {
    width: 32,
    height: 32,
    borderRadius: 5,
    backgroundColor: "rgba(195,203,205,1)",
  },
  Question4: {
    width: 16,
    height: 16,
  },
  Group735: {
    top: 38,
    display: "flex",
    flexDirection: "column",
    width: 373,
    height: 1148,
    boxSizing: "border-box",
  },
  Group413: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    boxSizing: "border-box",
  },
  CreateTask: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "28",
    lineHeight: "28",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  IconOutlinedSuggestedSymbolCloseX: {
    width: 32,
    height: 32,
  },
  Group943: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  Group878: {
    width: 54,
    height: "100%",
    padding: 15,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(243,185,150,1)",
  },
  IconCommunicationImport_contacts: {
    width: "100%",
    height: "100%",
  },
  Group0910: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  },
  Reading: {
    color: "rgba(0,0,0,1)",
    fontSize: "24",
    lineHeight: "24",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "500",
  },
  Line16: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: "rgba(55,63,65,1)",
  },
  Group688: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    boxSizing: "border-box",
  },
  When: {
    color: "rgba(115,123,125,1)",
    fontSize: "20",
    lineHeight: "20",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  More: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(42,165,149,1)",
    fontSize: "18",
    lineHeight: "18",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  Group221: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingBottom: 0.3,
    boxSizing: "border-box",
  },
  Group594: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    boxSizing: "border-box",
  },
  HowLong: {
    color: "rgba(115,123,125,1)",
    fontSize: "20",
    lineHeight: "20",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  More1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(42,165,149,1)",
    fontSize: "18",
    lineHeight: "18",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  Group188: {
    width: "100%",
    height: 50.3,
    paddingBottom: 0.3,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(244,245,244,1)",
  },
  Slider_for_time_length: {
    position: "relative",
    width: "100%",
    height: "100%",
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4.3,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(244,245,244,1)",
  },
  Group053: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    paddingLeft: 26,
    paddingRight: 81.43,
    paddingTop: 14,
    paddingBottom: 13.92,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(248,221,203,1)",
  },
  _1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: "14",
    lineHeight: "14",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  _15: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: "14",
    lineHeight: "14",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  _30: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: "14",
    lineHeight: "14",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  _45: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: "14",
    lineHeight: "14",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  _1h: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: "14",
    lineHeight: "14",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Group426: {
    top: 4.19,
    width: 59.73,
    height: "100%",
    paddingLeft: 12,
    paddingRight: 12.73,
    paddingTop: 11,
    paddingBottom: 12.92,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(243,185,150,1)",
  },
  _15h: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "18",
    lineHeight: "18",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Group222: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingBottom: 0.3,
    boxSizing: "border-box",
  },
  Group550: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    boxSizing: "border-box",
  },
  HowOften: {
    color: "rgba(115,123,125,1)",
    fontSize: "20",
    lineHeight: "20",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  More2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(42,165,149,1)",
    fontSize: "18",
    lineHeight: "18",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  Group190: {
    width: "100%",
    height: 50.3,
    paddingBottom: 0.3,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(244,245,244,1)",
  },
  Slider_for_time_length1: {
    position: "relative",
    width: "100%",
    height: "100%",
    paddingLeft: 5,
    paddingRight: 9,
    paddingTop: 4,
    paddingBottom: 4.3,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(244,245,244,1)",
  },
  Group689: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    paddingLeft: 93,
    paddingRight: 11,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(195,203,205,1)",
  },
  Daily: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(226,229,230,1)",
    fontSize: "14",
    lineHeight: "14",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Weekly: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(226,229,230,1)",
    fontSize: "14",
    lineHeight: "14",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Biweekly: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(226,229,230,1)",
    fontSize: "14",
    lineHeight: "14",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Monthly: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(226,229,230,1)",
    fontSize: "14",
    lineHeight: "14",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Group768: {
    position: "absolute",
    top: 4,
    width: 72,
    height: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(243,185,150,1)",
  },
  Once: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "18",
    lineHeight: "18",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Group250: {
    position: "relative",
    width: 331,
    height: 85,
    boxSizing: "border-box",
  },
  WhatColor: {
    position: "absolute",
    color: "rgba(115,123,125,1)",
    fontSize: "20",
    lineHeight: "20",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Frame853: {
    position: "absolute",
    top: 45,
    left: 23,
    width: 308,
    height: 40,
  },
  Group224: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
  },
  AnyDetails: {
    color: "rgba(115,123,125,1)",
    fontSize: "20",
    lineHeight: "20",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Group285: {
    width: "100%",
    height: 153,
    paddingLeft: 31,
    paddingRight: 94,
    paddingTop: 18,
    paddingBottom: 123,
    borderRadius: 10,
    boxSizing: "border-box",
    backgroundColor: "rgba(226,229,230,1)",
  },
  AddNotesSubTasksInsp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(195,203,205,1)",
    fontSize: "12",
    lineHeight: "12",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  ContinueButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 360,
    height: 64,
    padding: 16,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 15,
    boxSizing: "border-box",
    backgroundColor: "rgba(80,208,192,1)",
  },
  Continue: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "20",
    lineHeight: "20",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "500",
    textAlign: "center",
  },
})