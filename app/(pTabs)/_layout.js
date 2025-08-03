import {Tabs} from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="IndexP" />
      <Tabs.Screen name="SetAppointmentP" />
      <Tabs.Screen name="CheckAppP" />
      <Tabs.Screen name="SubAbbuse" />
      <Tabs.Screen name="KetInfusion" />
    </Tabs>
  )
};