
import {Text,View,ScrollView,SafeAreaView} from "react-native";
import styles from "./styles";
import {BottomTab} from "./IndexP";

export default function SubAbbuse() {
  return ( 
    <SafeAreaView style={[styles.container, {justifyContent:"space-between"}]}>
      <ScrollView style={styles.infoBox}>
        <Text style={styles.header}>Substance Abuse</Text>
        <Text style={styles.infoText}>Substance abuse is a serious issue that affects millions of people worldwide. It can lead to a variety of health problems, including addiction, mental health issues, and even death. If you or someone you know is struggling with substance abuse, please seek help immediately.</Text>
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
}
