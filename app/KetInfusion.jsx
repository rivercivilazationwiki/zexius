
import {Text,View,ScrollView,SafeAreaView} from "react-native";
import styles from "./styles";
import {BottomTab} from "./IndexP"

export default function KetInfusion() {
  return (
    <SafeAreaView style={[styles.container, {justifyContent:"space-between"}]}>
      <ScrollView style={styles.infoBox}>
        <Text style={styles.header}>Ketamine Infusion</Text>
        <Text style={styles.infoText}>Ketamine infusion is a treatment for depression that involves injecting ketamine into a vein. It is typically used for people who have not responded to other treatments. Ketamine infusion is a short-term treatment, and it is usually given for 4-6 weeks. After that, it is stopped and the person is monitored for a few weeks to make sure they are not having any side effects.</Text>
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
};
