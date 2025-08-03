import {Text,View,ScrollView,SafeAreaView} from "react-native";
import {styles} from "./styles";
const style=styles;
import {BottomTab} from "./IndexP"
export default function KetInfusion() {
  return (
    <SafeAreaView style={{flex:1,flexDirection:"column",justifyContent:"space-between"}}>
    <ScrollView style={style.infoBox}>
      <Text style={{size:32}}>Ketamine Infusion</Text>
      <Text style={style.infoBox}>Ketamine infusion is a treatment for depression that involves injecting ketamine into a vein. It is typically used for people who have not responded to other treatments. Ketamine infusion is a short-term treatment, and it is usually given for 4-6 weeks. After that, it is stopped and the person is monitored for a few weeks to make sure they are not having any side effects.</Text>
      <BottomTab />
    </ScrollView>
    </SafeAreaView>
  );
};