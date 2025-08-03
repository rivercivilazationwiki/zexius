import { useEffect, useState, createContext } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Button, Pressable, Text, TextInput, View, Switch, LogBox } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';
let user={name:"",email:"",password:"",type:"patient"};
function AuthLine(props) {
  return (
    <View>
    <TextInput placeholder={props.name} style={styles.input} onChangeText={(text)=>{ user[props.name] = text }}  />
    </View>
  );
};
function TypeSelector() {
    const [value,setValue]=useState("patient");
    useEffect(()=>{user.type=value},[value]);
    return (
        <View>
        <Picker selectedValue={value} onValueChange={(value)=>{setValue(value)}}>
        <Picker.Item value="patient" label="patient" />
             <Picker.Item value="doctor" label="doctor" />
        </Picker>
        </View>
    );
}
export default function SignUp() { 
    const router=useRouter();
    function send() {
        fetch("https://notable-oddly-falcon.ngrok-free.app/signUp", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then((r)=>r.json()).then((response)=>{console.log(response);  switch(user.type) {
                                                     case "doctor":
                                                       router.navigate("/(dTabs)/IndexD");
                                                       break;
                                                     case "patient":
                                                       router.navigate("/(pTabs)/IndexP");
                                                       break;
                                                   };
    })};
    return (
            <View style={styles.container}>
            <Text style={styles.header}>Register a new Account</Text>
            <TypeSelector />
            <AuthLine name="name" sec="0" />
            <AuthLine name="email" sec="0" />
            <AuthLine name="password" sec="1" />
            <Button title="register" onPress={send}/>
 
        </View>
    );
};