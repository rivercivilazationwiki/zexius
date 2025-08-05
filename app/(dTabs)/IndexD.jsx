
import {Text,View,Button} from "react-native";
import {useRouter,Link} from "expo-router";
import {useContext} from "react";
import {AppContext} from "../context/AppContext";
import styles from '../styles';

function ButtonLink(props) {
  const router=useRouter();
  return (
    <View>
      <Button title={props.title} onPress={()=>router.navigate(props.href)} />
    </View>
  );
}

export function BottomTab() {
  return (
    <View style={{flex:1,flexDirection:"column"}}>
      <View style={{flex:1,flexDirection:"row"}}>
        <ButtonLink title="Make an Appointment" href="/(dTabs)/SetAppointmentP" />
        <View style={{width:5}} />
        <ButtonLink title="Check Appointments" href="/(dTabs)/CheckAppD" />
      </View>
      <View style={{height:10}} />
      <View style={{flex:1,flexDirection:"row"}}>
        <ButtonLink title="Substance Abuse" href="/(dTabs)/SubAbbuse" />
        <View style={{width:5}} />
        <ButtonLink title="Ketamine Infusion" href="/(dTabs)/KetInfusion" />
      </View>
    </View>
  )
};

export default function IndexD() {
  const {name}=useContext(AppContext);
  return (
    <View>
      <Text>Welcome Dr. {name}</Text>
      <BottomTab />
    </View>
  )
};
