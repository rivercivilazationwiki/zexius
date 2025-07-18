import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
let user={name:"",email:"",password:"",type:"patient"};
function AuthLine(props) {
  return (
    <View>
    <TextInput onChangeText={(text)=>{ user[props.name] = text }} />
    </View>
  );
};
export default function SignUp() {
  const [v,setV]=useState("patient");
  useEffect(()=>user.type=v,[v]);
    function send() {
        fetch("http://192.168.4.59:5000/signUp", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then((r)=>r.json()).then(response=>console.log(response));
    };
    return (
        <View>
            <Text>Register a new Account</Text>
            <Picker selectedValue={v} onValueChange={(itemValue)=>setV(itemValue)}>
              <Picker.Item label="patient" value="patient" />
              <Picker.Item label="doctor" value="doctor" />
            </Picker>
            <AuthLine name="name" sec="0" />
            <AuthLine name="email" sec="0" />
            <AuthLine name="password" sec="1" />
            <Button title="register" onPress={send}/>
        </View>
    );
};