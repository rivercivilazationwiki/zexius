import {Text,View,Button} from "react-native";
import {useRouter,Link} from "expo-router";
import {useContext} from "react";
import {AppContext} from "./context/AppContext";
import styles from './styles';
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
    <View style={{flex:1,flexDirection:"row"}}>
      <ButtonLink title="Make an Appointment" href="/SetAppointmentP" />
      <View style={{width:5}} />
      <ButtonLink title="Substance Abuse" href="/SubAbbuse" />
      <View style={{width:5}} />
      <ButtonLink title="Ketamine Infusion" href="/KetInfusion" />
    </View>
  )
};
export default function IndexP() {
  const {name}=useContext(AppContext);
  return (
    <View style={[styles.container, {justifyContent:"flex-end"}]}>
      <Text style={styles.header}>Welcome {name}</Text>
      <BottomTab />
    </View>
  )
};