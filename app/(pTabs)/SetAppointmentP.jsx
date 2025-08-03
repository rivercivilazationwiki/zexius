
import {Text,TextInput,View,Button,SafeAreaView} from "react-native";
import { Picker } from '@react-native-picker/picker';
import {useState,useEffect,useContext} from 'react';
import {AppContext} from "../context/AppContext";
import {BottomTab} from "../IndexP";
import styles from '../styles';
let appointment={patient:"",doctor:"",date:null};
let dateobj={year:0,month:0,day:0}
function AppField(props) {
  return (
    <View>
      <TextInput placeholder={props.name} style={styles.input} onChangeText={(text)=>{appointment[props.name]=text;}} />
    </View>
  );
};
function SetPart(props) {
  const [info,setInfo]=useState(0);
  const [value,setValue]=useState("");
  useEffect(()=>{dateobj[props.name]=info},[info]);
  let el=[];
  let show=props.show;
  for (let i=0;i<show.length;i++) {
    el.push(<Picker.Item value={i} label={show[i]} />);
  }
  return (
    <View style={{flex:1,flexDirection:"row"}}>
      <Text>{props.name}</Text>
      <Picker selectedValue={value} onValueChange={(value)=>{setInfo(Number(value));setValue(value)}}>
        {el}
      </Picker>
    </View>
  );
};
function SetDate() {
  const [year,setYear]=useState(0);
  useEffect(()=>{dateobj.year=year},[year]);
  return (
    <View style={{flex:1,flexDirection:"row"}}>
        <SetPart name="month" show={["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]} />
        <SetPart name="day" show={["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]} />
        <TextInput placeholder="year" onChangeText={(text)=>setYear(Number(text))} />
    </View>
  );
}
export default function SetAppointmentP() {
  const {name}=useContext(AppContext);
  
  function send() {
    appointment.patient=name;
    appointment.date=new Date(dateobj.year,dateobj.month,dateobj.day);
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
      <SetDate />
      <Button style={{margin:20}} title="set appointment" onPress={send} />
      <View style={{height:100}} />
      <BottomTab />
    </SafeAreaView>
  );
};
