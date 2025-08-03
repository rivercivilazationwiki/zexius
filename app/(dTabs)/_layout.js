
import {Tabs} from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="IndexD" />
      <Tabs.Screen name="SetAppointmentP" />
      <Tabs.Screen name="CheckAppD" />
      <Tabs.Screen name="SubAbbuse" />
      <Tabs.Screen name="KetInfusion" />
    </Tabs>
  );
}
