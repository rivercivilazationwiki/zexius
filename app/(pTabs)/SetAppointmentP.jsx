
import {Text,TextInput,View,Button,SafeAreaView,Platform} from "react-native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from "@react-native-community/datetimepicker";
import {useState,useEffect,useContext} from 'react';
import {AppContext} from "../context/AppContext";
import styles from '../styles';

let appointment={patient:"",doctor:"",date:null,};
let dateobj={year:0,month:0,day:0,hour:0,minute:0,ampm:"AM"}

function AppField(props) {
  return (
    <View>
      <TextInput placeholder={props.name} style={styles.input} onChangeText={(text)=>{appointment[props.name]=text;}} />
    </View>
  );
};

function SetDateTime() {
  const [date,setDate]=useState(new Date());
  const [show,setShow]=useState(false);
  const [mode,setMode]=useState("date");
  
  useEffect(()=>{appointment.date=date},[date]);
  
  function onChange(event,selectedDate) {
    const currentDate=selectedDate || date;
    setShow(Platform.OS==="ios");
    setDate(currentDate);
  };
  
  function showMode(currentMode) {
    setShow(true);
    setMode(currentMode);
  };
  
  return (
    <View style={{marginVertical: 10}}>
      <View style={styles.button}>
        <Button title="Set Date" onPress={()=>showMode("date")} color="#fff" />
      </View>
      <View style={styles.button}>
        <Button title="Set Time" onPress={()=>showMode("time")} color="#fff" />
      </View>
      {show && (
        <View style={styles.infoBox}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={false}
            onChange={onChange}
          />
        </View>
      )}
    </View>
  );
};

export default function SetAppointmentP() {
  const {name}=useContext(AppContext);
  
  function send() {
    appointment.patient=name;
    appointment.date=new Date(dateobj.year,dateobj.month,dateobj.day,dateobj.hour,dateobj.minute);
    fetch("https://notable-oddly-falcon.ngrok-free.app/app", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(appointment)
    }).then((r)=>r.json()).then((response)=>console.log(response));
  };
  
  return (
    <SafeAreaView style={[styles.container, {justifyContent:"space-between"}]}>
      <Text style={styles.header}>Make an Appointment</Text>
      <AppField name="doctor" />
      <SetDateTime />
      <View style={styles.button}>
        <Button title="Set Appointment" onPress={send} color="#fff" />
      </View>
    </SafeAreaView>
  );
};
