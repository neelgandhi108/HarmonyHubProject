import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

export default function Settings1({ navigation }) {
  const navigateToAppearance = () => {
    navigation.navigate('Appearance');
  };
  
  return (
    <View style={styles.Settings1}>
      <Image
        style={styles.Rectangle279}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14026?alt=media&token=1a7f77cf-6347-49c8-a931-bbcf98d0eb97",
        }}
      />
      <Image
        style={styles.Rectangle281}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-454%3A14798?alt=media&token=9fca043e-edc7-494a-aa9d-526a0d1cdf20",
        }}
      />
      <Image
        style={styles.Rectangle280}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14027?alt=media&token=60eea2fb-aa92-4d48-80c2-8f7a0e979c83",
        }}
      />
      <Text style={styles.NotificationsAlerts}>Notifications & Alerts</Text>
      <TouchableOpacity onPress={navigateToAppearance}>
        <Text style={styles.Appearance}>Appearance</Text>
      </TouchableOpacity>
      <Text style={styles.IcloudSync}>iCloud Sync</Text>
      <Text style={styles.Advanced}>Advanced</Text>
      <Image
        style={styles.Image3}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14034?alt=media&token=36f2c31b-9e90-4653-9f74-fe77b8ee2d7c",
        }}
      />
      <View style={styles.Group575}>
        <Text style={styles.General}>General</Text>
        <View style={styles.Line27} />
        <View style={styles.Line26} />
        <View style={styles.Line28} />
        {/* <Text style={styles.Intergrations}>Intergrations</Text> */}
        <View style={styles.Line30} />
        <View style={styles.Line31} />
      </View>
      <Text style={styles.UnlockAllFeatures}>Unlock All Features</Text>
      <Text style={styles.HarmonyHubPremium}>Harmony Hub Premium</Text>
      <Image
        style={styles.IconOutlinedDirectionsChevronRight}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14043?alt=media&token=e40565cf-97f3-4da8-a8cf-77c851f99930",
        }}
      />
      <Image
        style={styles.IconOutlinedDirectionsChevronRight1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14044?alt=media&token=f3e7effe-b877-404a-9833-15f1596765cd",
        }}
      />
      <Image
        style={styles.IconOutlinedDirectionsChevronRight2}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14045?alt=media&token=b6e9a139-40ff-4e29-a7e6-01b9cd0c9342",
        }}
      />
      <Image
        style={styles.IconOutlinedDirectionsChevronRight3}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14046?alt=media&token=f343be29-723f-4a5d-8cae-85b412b76a12",
        }}
      />
      <Image
        style={styles.IconOutlinedDirectionsChevronRight4}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14047?alt=media&token=b8d26a9d-bb4d-42b6-ba46-4596eb8a8ace",
        }}
      />
      <Image
        style={styles.Icloud1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14048?alt=media&token=0c5eb6a0-17ee-4bdb-b514-fa08fb7aa612",
        }}
      />
      <Image
        style={styles.AdvancedOptions1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14049?alt=media&token=9a0504ac-37ad-4b5b-99dd-41c9378df505",
        }}
      />
      <Text style={styles.Calendars}>Calendars</Text>
      <Text style={styles.Canvas}>Canvas</Text>
      <Text style={styles.Reminders}>Reminders</Text>
      <Image
        style={styles.Palette1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14053?alt=media&token=7c4814a7-4c42-48ea-b12e-f14847a400a2",
        }}
      />
      <Image
        style={styles.AppDevelopment}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14054?alt=media&token=a1fe6072-1999-4ac5-a68b-478a39b8a0d9",
        }}
      />
      <Image
        style={styles.Bell}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14055?alt=media&token=cf2c0405-1427-40ec-9899-741626af6600",
        }}
      />
      <Image
        style={styles.Calendar}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14056?alt=media&token=79c44629-0a87-45ad-a73a-8e559358a5b0",
        }}
      />
      <Image
        style={styles.Group213}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-397%3A14076?alt=media&token=96810e15-1295-451d-969b-f1c7b47e815d",
        }}
      />
      <View style={styles.Group10}>
        <View style={styles.Rectangle6} />
        <Text style={styles.Settings}>Settings</Text>
      </View>
      <Image
        style={styles.IconOutlinedDirectionsChevronLeft}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-454%3A15383?alt=media&token=2f00fd37-6cbc-4e6a-a37d-c0a16412e3fd",
        }}
      />
      <Image
        style={styles.Frame241}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9qklck7qcu7-454%3A15387?alt=media&token=f0e1ed8b-4e14-46f3-87f4-bd5c0a8dcd32",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Settings1: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 430,
    height: 932,
    paddingTop: 35,
    paddingBottom: 35,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Rectangle279: {
    position: "absolute",
    top: 388,
    left: 32,
    width: 366,
    height: 136,
  },
  Rectangle281: {
    position: "absolute",
    top: 647,
    left: 32,
    width: 366,
    height: 114,
  },
  Rectangle280: {
    position: "absolute",
    top: 207,
    left: 32,
    width: 366,
    height: 96,
  },
  NotificationsAlerts: {
    position: "absolute",
    top: 396,
    left: 71,
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Appearance: {
    position: "absolute",
    top: 430,
    left: 72,
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  IcloudSync: {
    position: "absolute",
    top: 465,
    left: 72,
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Advanced: {
    position: "absolute",
    top: 498,
    left: 72,
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Image3: {
    position: "absolute",
    top: 397,
    left: 47,
    width: 16,
    height: 16,
  },
  Group575: {
    position: "absolute",
    top: 369,
    display: "flex",
    flexDirection: "column",
    width: 367,
    height: 355,
    boxSizing: "border-box",
  },
  General: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  Line27: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: "rgba(195,203,205,1)",
  },
  Line26: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: "rgba(195,203,205,1)",
  },
  Line28: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: "rgba(195,203,205,1)",
  },
  Intergrations: {
    color: "rgba(115,123,125,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Line30: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: "rgba(195,203,205,1)",
  },
  Line31: {
    width: "100%",
    height: 1,
    borderWidth: 1,
    borderColor: "rgba(195,203,205,1)",
  },
  UnlockAllFeatures: {
    position: "absolute",
    top: 228,
    left: 62,
    color: "rgba(115,123,125,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "400",
  },
  HarmonyHubPremium: {
    position: "absolute",
    top: 255,
    left: 62,
    color: "rgba(0,0,0,1)",
    fontSize: "20",
    lineHeight: "20",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  IconOutlinedDirectionsChevronRight: {
    position: "absolute",
    top: 243,
    left: 371,
    width: 16,
    height: 16,
  },
  IconOutlinedDirectionsChevronRight1: {
    position: "absolute",
    top: 398,
    left: 371,
    width: 16,
    height: 16,
  },
  IconOutlinedDirectionsChevronRight2: {
    position: "absolute",
    top: 432,
    left: 371,
    width: 16,
    height: 16,
  },
  IconOutlinedDirectionsChevronRight3: {
    position: "absolute",
    top: 467,
    left: 371,
    width: 16,
    height: 16,
  },
  IconOutlinedDirectionsChevronRight4: {
    position: "absolute",
    top: 500,
    left: 371,
    width: 16,
    height: 16,
  },
  Icloud1: {
    position: "absolute",
    top: 466,
    left: 47,
    width: 16,
    height: 16,
  },
  AdvancedOptions1: {
    position: "absolute",
    top: 500,
    left: 47,
    width: 16,
    height: 16,
  },
  Calendars: {
    position: "absolute",
    top: 657,
    left: 71,
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Canvas: {
    position: "absolute",
    top: 731,
    left: 71,
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Reminders: {
    position: "absolute",
    top: 694,
    left: 71,
    color: "rgba(55,63,65,1)",
    fontSize: "16",
    lineHeight: "16",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
  },
  Palette1: {
    position: "absolute",
    top: 432,
    left: 46,
    width: 16,
    height: 16,
  },
  AppDevelopment: {
    position: "absolute",
    top: 734,
    left: 50,
    width: 16,
    height: 16,
  },
  Bell: {
    position: "absolute",
    top: 697,
    left: 48,
    width: 16,
    height: 16,
  },
  Calendar: {
    position: "absolute",
    top: 660,
    left: 47,
    width: 16,
    height: 16,
  },
  Group213: {
    position: "absolute",
    width: "100%",
    height: 144,
  },
  Group10: {
    position: "absolute",
    top: 35,
    width: "100%",
    height: 107,
    boxSizing: "border-box",
  },
  Rectangle6: {
    position: "absolute",
    width: "100%",
    height: 40,
    backgroundColor: "rgba(217,217,217,1)",
  },
  Settings: {
    position: "absolute",
    top: 65,
    left: 31.77,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(115,123,125,1)",
    fontSize: "32",
    lineHeight: "32",
    fontFamily: "RedHatDisplay_400Regular",
    fontWeight: "600",
    textAlign: "center",
  },
  IconOutlinedDirectionsChevronLeft: {
    position: "absolute",
    top: 59,
    left: 7,
    width: 36,
    height: 36,
  },
  Frame241: {
    position: "absolute",
    top: 59,
    left: 268,
    width: 148,
    height: 36,
  },
})
