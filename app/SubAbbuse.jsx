import {Text,View,ScrollView,SafeAreaView} from "react-native";
const text={size:32};
import {BottomTab} from "./IndexP";
export default function SubAbbuse() {
  return ( 
    <SafeAreaView style={{flex:1,flexDirection:"column",justifyContent:"space-between"}}>
    <ScrollView>
      <Text style={{fontSize:32}}>Substance Abuse</Text>
      <Text>Substance abuse is a serious issue that affects millions of people worldwide. It can lead to a variety of health problems, including addiction, mental health issues, and even death. If you or someone you know is struggling with substance abuse, please seek help immediately.</Text>
      <BottomTab />
    </ScrollView>
      </SafeAreaView>
  );
}