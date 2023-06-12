import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, ScrollView, View, ImageBackground, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from 'react-native-vector-icons/Ionicons';

export default function Mainscreen24({ navigation }) {
  const [group571Color, setGroup571Color] = useState("rgba(150, 232, 220, 1)");
  
  const retrieveColor = async () => {
    try {
      const color = await AsyncStorage.getItem('selectedColor');
      console.log('Retrieved color:', color);
      if (color) {
        setGroup571Color(color);
      }
    } catch (error) {
      console.log('Failed to retrieve color:', error);
    }
  };
  
  useEffect(() => {
    retrieveColor();
  }, []);

  return (
    <ScrollView>
    <View style={[styles.Mainscreen24]}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
      <View style={styles.Group213}>
        <View style={styles.Frame5}>
          <Text style={styles.DayofWeek}>Mon</Text>
          <Text style={styles.DayofWeek}>Tue</Text>
          <Text style={styles.DayofWeek}>Wed</Text>
          <Text style={styles.DayofWeek}>Thu</Text>
          <Text style={styles.DayofWeek}>Fri</Text>
          <Text style={styles.DayofWeek}>Sat</Text>
          <Text style={styles.DayofWeek}>Sun</Text>
        </View>
        <View style={styles.Frame6}>
          <Text style={styles._17}>17</Text>
          <Text style={styles._18}>18</Text>
          <Text style={styles._19}>19</Text>
          <View style={[styles.Group214,  { backgroundColor: group571Color }]}>
            <Text style={styles._20}>20</Text>
          </View>
          <Text style={styles._21}>21</Text>
          <Text style={styles._22}>22</Text>
          <Text style={styles._23}>23</Text>
        </View>
      </View>
      <View style={styles.ContinueButton}>
        <Image
          style={styles.IconActionFind_in_page}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14063?alt=media&token=19a4eeb1-8273-4a35-99f6-8b6af3bbc12f",
          }}
        />
        <Text style={styles.ReviewMyDay}>Review my day</Text>
      </View>
      <View style={styles.Group957}>
        <View style={styles.Group609}>
          <View style={[styles.Group571,  { backgroundColor: group571Color }]}>
            <Image
              style={styles.IconImageWb_sunny}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14042?alt=media&token=6050f459-c29b-4cd0-b2cf-dd70e8e0a7a7",
              }}
            />
          </View>
          <View style={[styles.Group480,  { backgroundColor: group571Color }]}>
            <Image
              style={styles.IconActionAccount_balance}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14025?alt=media&token=809df73f-a208-4aee-a066-f7534d8a38e3",
              }}
            />
          </View>
          <View style={[styles.Group354,  { backgroundColor: group571Color }]}>
            <Image
              style={styles.IconMapsLocal_dining}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14031?alt=media&token=984be531-587f-4367-ae63-bddfc89f1005",
              }}
            />
          </View>
          <View style={[styles.Group670,  { backgroundColor: group571Color }]}>
            <Image
              style={styles.IconActionAccount_balance1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14027?alt=media&token=7281ae1b-2d8f-47a5-a2ff-ac5fb72dc720",
              }}
            />
          </View>
          <View style={[styles.Group155,  { backgroundColor: group571Color }]}>
            <Image
              style={styles.IconHardwareComputer}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14032?alt=media&token=8f445edd-2ee6-4001-b14d-b93b4d7b62a0",
              }}
            />
          </View>
          <View style={[styles.Group584, { backgroundColor: group571Color }]}>
            <Image
              style={styles.IconSocialGroup}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14033?alt=media&token=46bebec9-3b14-44da-9d21-8f93f4afcfca",
              }}
            />
          </View>
        </View>
        <View style={styles.Group544}>
          <Text style={styles.WheneverYouStartYour}>
            Whenever you start your day :)
          </Text>
          <Text style={styles.StartTheDay}>Start the day!</Text>
          <Text style={styles._10101115Am}>10:10 - 11:15 am</Text>
          <Text style={styles.FrenchClass}>French Class</Text>
          <Text style={styles._1130Am1230Pm}>11:30 am - 12:30 pm</Text>
          <Text style={styles.Lunch}>Lunch</Text>
          <Text style={styles._1250110Pm}>12:50 - 1:10 pm</Text>
          <Text style={styles.HciClass}>HCI Class</Text>
          <Text style={styles._120250Pm}>1:20 - 2:50 pm</Text>
          <Text style={styles.StudyCoding}>Study Coding</Text>
          <Text style={styles._300430Pm}>3:00 - 4:30 pm</Text>
          <Text style={styles.MeetWithHciGroup}>Meet with HCI group</Text>
        </View>
      </View>
      {/* Button */}
      <TouchableOpacity onPress={() => navigation.navigate('CreateTask')}>
          <Image
              style={styles.Group12}
              source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14073?alt=media&token=97d5f75e-c9ab-4f29-8ad1-2b1cda1bf711",
              }}
          />
      </TouchableOpacity>
      <View style={styles.Group226}>
        <View style={styles.Rectangle6} />
        <Text style={styles.April}>April</Text>
        <Image
          style={styles.IconOutlinedDirectionsChevronDown}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14099?alt=media&token=c51c0c48-6589-417a-8306-847db5c21c17",
          }}
        />
        {/* <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}> */}
          <Image
            style={styles.Frame241}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jvcul5vfrk-400%3A14100?alt=media&token=e791481e-6a84-4ac7-bf71-e7d255f35c2d",
            }}
          />
        {/* </TouchableOpacity> */}
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Mainscreen24: {
    alignItems: "center",
    width: 430,
    height: 1830,
    paddingTop: 0,
    paddingBottom: 710,
  },
  backButton: {
    position: 'absolute',
    top: 200,
    left: 25,
  },
  Group213: {
    top: 0,
    width: "100%",
    height: 180,
    paddingTop: 99,
    paddingBottom: 12,
    backgroundColor: "rgba(217,217,217,1)",
  },
  Frame5: {
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    height: 28.42,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "rgba(217,217,217,1)",
  },
  DayofWeek: {
    justifyContent: "center",
    marginRight: 32,
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },

  Frame6: {
    position: "absolute",
    top: 125.53,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 42.63,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
    boxSizing: "border-box",
    backgroundColor: "rgba(217,217,217,1)",
  },
  _17: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 45,
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },
  _18: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 45,
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },
  _19: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 45,
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },
  Group214: {
    width: 32,
    height: "100%",
    marginRight: 45,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 7,
    paddingBottom: 11,
    borderRadius: 16,
    boxSizing: "border-box",
    backgroundColor: "rgba(42,165,149,1)",
  },
  _20: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },
  _21: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 45,
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },
  _22: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 45,
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },
  _23: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },
  ContinueButton: {
    position: "absolute",
    top: 1000,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 232,
    height: 64,
    paddingLeft: 56,
    paddingRight: 56,
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 10,
    boxSizing: "border-box",
    backgroundColor: "rgba(226,229,230,1)",
  },
  IconActionFind_in_page: {
    position: "absolute",
    top: 17,
    left: 13,
    width: 30,
    height: 30,
  },
  ReviewMyDay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(55,63,65,1)",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 500,
    textAlign: "center",
  },
  Group957: {
    position: "absolute",
    top: 200,
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box",
  },
  Group609: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  },
  Group571: {
    width: "100%",
    height: 54,
    padding: 15,
    borderRadius: 27,
    boxSizing: "border-box",
    backgroundColor: "rgba(150,232,220,1)",
  },
  IconImageWb_sunny: {
    width: "100%",
    height: "100%",
  },
  Group480: {
    width: "100%",
    height: 108,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 42,
    paddingBottom: 42,
    borderRadius: 27,
    boxSizing: "border-box",
    backgroundColor: "rgba(150,232,220,1)",
  },
  IconActionAccount_balance: {
    width: "100%",
    height: "100%",
  },
  Group354: {
    width: "100%",
    height: 108,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 42,
    paddingBottom: 42,
    borderRadius: 27,
    boxSizing: "border-box",
    backgroundColor: "rgba(150,232,220,1)",
  },
  IconMapsLocal_dining: {
    width: "100%",
    height: "100%",
  },
  Group670: {
    width: "100%",
    height: 108,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 42,
    paddingBottom: 42,
    borderRadius: 27,
    boxSizing: "border-box",
    backgroundColor: "rgba(150,232,220,1)",
  },
  IconActionAccount_balance1: {
    width: "100%",
    height: "100%",
  },
  Group155: {
    width: "100%",
    height: 108,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 42,
    paddingBottom: 42,
    borderRadius: 27,
    boxSizing: "border-box",
    backgroundColor: "rgba(150,232,220,1)",
  },
  IconHardwareComputer: {
    width: "100%",
    height: "100%",
  },
  Group584: {
    width: "100%",
    height: 108,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 42,
    paddingBottom: 42,
    borderRadius: 27,
    boxSizing: "border-box",
    backgroundColor: "rgba(150,232,220,1)",
  },
  IconSocialGroup: {
    width: "100%",
    height: "100%",
  },
  Group544: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  },
  WheneverYouStartYour: {
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
  },

  // 
  StartTheDay: {
    color: "rgba(55,63,65,1)",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginTop: 10,
  },
  _10101115Am: {
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginBottom: 40,
  },
  FrenchClass: {
    color: "rgba(55,63,65,1)",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginTop: 10,
  },
  _1130Am1230Pm: {
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginBottom: 45,
  },
  Lunch: {
    color: "rgba(55,63,65,1)",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginTop: 10,
  },
  _1250110Pm: {
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginBottom: 65,
  },
  HciClass: {
    color: "rgba(55,63,65,1)",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginTop: 10,
  },
  _120250Pm: {
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginBottom: 65,
  },
  StudyCoding: {
    color: "rgba(55,63,65,1)",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginTop: 10,
  },
  _300430Pm: {
    color: "rgba(115,123,125,1)",
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginBottom: 65,
  },
  MeetWithHciGroup: {
    color: "rgba(55,63,65,1)",
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    marginTop: 10,
  },
// 
  Group12: {
    top: 750,
    left: 300,
    width: 60,
    height: 0,
  },
  Group226: {
    top: -125,
    width: "100%",
    height: 52,
  },
  Rectangle6: {
    position: "absolute",
    width: "100%",
    height: 40,
    backgroundColor: "rgba(217,217,217,1)",
  },
  April: {
    top: 4,
    left: -150,
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: 36,
    lineHeight: 36,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",

  },
  IconOutlinedDirectionsChevronDown: {
    top: 19,
    left: 110,
    width: 24,
    height: 24,
  },
  Frame241: {
    top: -62,
    left: 268,
    width: 148,
    height: 36,
  },
})
