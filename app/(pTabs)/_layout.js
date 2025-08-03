import {Tabs} from "expo-router";
import {BottomTab} from "../../IndexP";
export default function Layout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="IndexP" options={{tabBarButton:()=><BottomTab />}} />
      <Tabs.Screen name="SetAppointmentP" />
      <Tabs.Screen name="CheckAppP" />
      <Tabs.Screen name="SubAbbuse" />
      <Tabs.Screen name="KetInfusion" />
    </Tabs>
  )
};