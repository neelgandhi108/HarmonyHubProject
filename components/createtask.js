import React from "react"
import { StyleSheet, ScrollView, Image, Text, View, ImageBackground ,TextInput,TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

export default function CreateTask({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.Iphone14ProMax14}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.Group467}>
          <View style={styles.Group617}>
            <View style={styles.Group314}>
              <Text style={styles.CreateTask}>Create Task</Text>
              <Image
                style={styles.IconOutlinedSuggestedSymbolCloseX}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ul46723n6u-448%3A14724?alt=media&token=8af057d2-3cc9-47bb-8c3f-d057b069bc4f",
                }}
              />
            </View>
            <Text style={styles.What}>What?</Text>
            <View style={styles.Group046}>
              <View style={styles.Group223}>
                <Image
                  style={styles.IconMapsLocal_drink}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ul46723n6u-448%3A14732?alt=media&token=5874d69a-27f1-4024-939e-8b01c5ff6157",
                  }}
                />
              </View>
              <View style={styles.Group535}>
                <TextInput
                  style={styles.DrinkSomeWater}
                  placeholder="Drink some water"
                />
                <View style={styles.Line16} />
              </View>
            </View>
            <Text style={styles.SuggestedTasks}>Suggested Tasks:</Text>
          </View>
          <View style={styles.Frame13}>
            <View style={styles.Frame14}>
              <Image
                style={styles.IconActionChrome_reader_mode}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ul46723n6u-448%3A14643?alt=media&token=944eed1e-a2f7-4f2a-8a48-02dfd8a5d22b",
                }}
              />
              <View style={styles.Group13}>
                <Text style={styles._10001030Pm30Min}>
                  10:00 - 10:30 pm (30 min)
                </Text>
                <Text style={styles.Journaling}>Journaling</Text>
              </View>
            </View>
            <View style={styles.Frame15}>
              <Image
                style={styles.IconHardwareHeadset}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ul46723n6u-448%3A14648?alt=media&token=f8a4fca1-7690-48f1-8d10-9c7ecf0f82a0",
                }}
              />
              <View style={styles.Group131}>
                <Text style={styles._10301100Pm30Min}>
                  10:30 - 11:00 pm (30 min)
                </Text>
                <Text style={styles.ListeningToMusic}>Listening to music</Text>
              </View>
            </View>
            <View style={styles.Frame16}>
              <Image
                style={styles.IconActionAccessibility}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ul46723n6u-448%3A14653?alt=media&token=f88cd978-e0a1-4d2c-b89c-f4424d3e8905",
                }}
              />
              <View style={styles.Group132}>
                <Text style={styles._940950Pm10Min}>9:40 - 9:50 pm (10 min)</Text>
                <Text style={styles.Stretch}>Stretch</Text>
              </View>
            </View>
            <View style={styles.Frame18}>
              <Image
                style={styles.IconActionChrome_reader_mode1}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ul46723n6u-448%3A14658?alt=media&token=8a559494-214a-4391-8cc5-6ae9e716bf44",
                }}
              />
              <View style={styles.Group133}>
                <Text style={styles._10001030Pm30Min1}>
                  10:00 - 10:30 pm (30 min)
                </Text>
                <Text style={styles.Journaling1}>Journaling</Text>
              </View>
            </View>
            <View style={styles.Frame19}>
              <Image
                style={styles.IconActionChrome_reader_mode2}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ul46723n6u-448%3A14663?alt=media&token=f8400871-17eb-4505-bcf8-6ea911c0a735",
                }}
              />
              <View style={styles.Group134}>
                <Text style={styles._10001030Pm30Min2}>
                  10:00 - 10:30 pm (30 min)
                </Text>
                <Text style={styles.Journaling2}>Journaling</Text>
              </View>
            </View>
            <View style={styles.Frame20}>
              <Image
                style={styles.IconHardwareHeadset1}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ul46723n6u-448%3A14668?alt=media&token=cbc30812-7049-47c9-898a-861583b04b6a",
                }}
              />
              <View style={styles.Group135}>
                <Text style={styles._10301100Pm30Min1}>
                  10:30 - 11:00 pm (30 min)
                </Text>
                <Text style={styles.ListeningToMusic1}>Listening to music</Text>
              </View>
            </View>
            <View style={styles.Frame21}>
              <Image
                style={styles.IconActionAccessibility1}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ul46723n6u-448%3A14673?alt=media&token=686aa9c9-0b8a-4765-87f3-6a45bda1a6f6",
                }}
              />
              <View style={styles.Group136}>
                <Text style={styles._940950Pm10Min1}>
                  9:40 - 9:50 pm (10 min)
                </Text>
                <Text style={styles.Stretch1}>Stretch</Text>
              </View>
            </View>
          </View>
          <View style={styles.Rectangle277} />
        </View>
        <View style={styles.ContinueButton}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateTask2')}>
                <Text style={styles.Continue}>Continue</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Iphone14ProMax14: {
    width: 430,
    height: 1895,
    paddingLeft: 1,
    paddingTop: 277,
    paddingBottom: 1078,
    backgroundColor: 'rgb(255,255,255)',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
  },
  Group467: {
    width: 100,
    height: "100%",
  },
  Group617: {
    width: 100,
    paddingLeft: 32,
    paddingRight: 29,
    paddingTop: 112,
    paddingBottom: 5,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group314: {
    justifyContent: "space-between",
    width: 100,
  },
  CreateTask: {
    color: "rgba(0,0,0,1)",
    fontSize: 28,
    lineHeight: 28,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
    textAlign: "center",
  },
  IconOutlinedSuggestedSymbolCloseX: {
    width: 32,
    height: 32,
  },
  What: {
    color: "rgba(115,123,125,1)",
    fontSize: "24",
    lineHeight: "24",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  Group046: {
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  Group223: {
    width: 54,
    height: "100%",
    padding: 14,
    borderRadius: 5,
    boxSizing: "border-box",
    backgroundColor: "rgba(243,185,150,1)",
  },
  IconMapsLocal_drink: {
    width: "100%",
    height: "100%",
  },
  Group535: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  },
  Line15: {
    width: 27,
    height: 1,
    borderWidth: 1,
    borderColor: "rgba(251,78,78,1)",
    transform: "rotate(-90deg);",
  },
  DrinkSomeWater: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,0.5)",
    fontSize: "24",
    lineHeight: "24",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "500",
    textAlign: "center",
  },
  Line16: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: "rgba(55,63,65,1)",
  },
  SuggestedTasks: {
    color: "rgba(115,123,125,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Frame13: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Frame14: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginRight: 20,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 15,
    boxSizing: "border-box",
    backgroundColor: "rgba(248,221,203,1)",
  },
  IconActionChrome_reader_mode: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
  Group13: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingRight: 97,
    paddingTop: 17,
    paddingBottom: 13,
    boxSizing: "border-box",
  },
  _10001030Pm30Min: {
    color: "rgba(115,123,125,1)",
    fontSize: "10",
    lineHeight: "10",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Journaling: {
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Frame15: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginRight: 20,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 15,
    boxSizing: "border-box",
    backgroundColor: "rgba(248,221,203,1)",
  },
  IconHardwareHeadset: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
  Group131: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingRight: 84,
    paddingTop: 17,
    paddingBottom: 13,
    boxSizing: "border-box",
  },
  _10301100Pm30Min: {
    color: "rgba(115,123,125,1)",
    fontSize: "10",
    lineHeight: "10",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  ListeningToMusic: {
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Frame16: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginRight: 20,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 15,
    boxSizing: "border-box",
    backgroundColor: "rgba(248,221,203,1)",
  },
  IconActionAccessibility: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
  Group132: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingRight: 108,
    paddingTop: 17,
    paddingBottom: 13,
    boxSizing: "border-box",
  },
  _940950Pm10Min: {
    color: "rgba(115,123,125,1)",
    fontSize: "10",
    lineHeight: "10",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Stretch: {
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Frame18: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginRight: 20,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 15,
    boxSizing: "border-box",
    backgroundColor: "rgba(248,221,203,1)",
  },
  IconActionChrome_reader_mode1: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
  Group133: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingRight: 97,
    paddingTop: 17,
    paddingBottom: 13,
    boxSizing: "border-box",
  },
  _10001030Pm30Min1: {
    color: "rgba(115,123,125,1)",
    fontSize: "10",
    lineHeight: "10",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Journaling1: {
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Frame19: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginRight: 20,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 15,
    boxSizing: "border-box",
    backgroundColor: "rgba(248,221,203,1)",
  },
  IconActionChrome_reader_mode2: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
  Group134: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingRight: 97,
    paddingTop: 17,
    paddingBottom: 13,
    boxSizing: "border-box",
  },
  _10001030Pm30Min2: {
    color: "rgba(115,123,125,1)",
    fontSize: "10",
    lineHeight: "10",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Journaling2: {
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
  },
  Frame20: {
    alignItems: "center",
    width: "100%",
    height: 60,
    marginRight: 20,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 15,
    backgroundColor: "rgba(248,221,203,1)",
  },
  IconHardwareHeadset1: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
  Group135: {
    height: "100%",
    paddingRight: 84,
    paddingTop: 17,
    paddingBottom: 13,
  },
  _10301100Pm30Min1: {
    color: "rgba(55,63,65,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
  },
  ListeningToMusic1: {
    color: "rgba(55,63,65,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
  },
  Frame21: {
    alignItems: "center",
    width: "100%",
    height: 60,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 15,
    backgroundColor: "rgba(248,221,203,1)",
  },
  IconActionAccessibility1: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
  Group136: {
    height: "100%",
    paddingRight: 108,
    paddingTop: 17,
    paddingBottom: 13,
    boxSizing: "border-box",
  },
  _940950Pm10Min1: {
    color: "rgba(115,123,125,1)",
    fontSize: 10,
    lineHeight: 10,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
  },
  Stretch1: {
    color: "rgba(55,63,65,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: 600,
  },
  Rectangle277: {
    width: "100%",
    height: 295,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,1)",
  },
  ContinueButton: {
    top: 1050,
    left: 35,
    alignItems: "center",
    width: 360,
    height: 64,
    padding: 16,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 15,
    backgroundColor: "rgba(80,208,192,1)",
  },
  Continue: {
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "RedHatDisplay",
    fontWeight: 500,
    textAlign: "center",
  },
})
