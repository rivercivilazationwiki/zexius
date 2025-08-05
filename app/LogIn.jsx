import  {useRouter}  from "expo-router";
import {View,Text,TextInput,Button} from "react-native"
import {useContext,useState} from "react";
import {AppContext} from "./context/AppContext";
let user={name:"",email:"",password:"",type:""};
function AuthLine(props) {
  return (
    <View>
    <TextInput placeholder={props.name} onChangeText={(text)=>{ user[props.name] = text }}  />
    </View>
  );
};
export default function LogIn() {
  const router=useRouter();
  const {name,setName}=useContext(AppContext);
  const [error,setError]=useState("");
  function getDes() { 
    switch(user.type) {
        case "doctor":
          return "/(dTabs)/IndexD";
        case "patient":
          return "/(pTabs)/IndexP";
        default:
          return "/Index";
    };
  }
  function send() {
    fetch("https://notable-oddly-falcon.ngrok-free.app/logIn", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then((r)=>r.json()).then((response)=>{
      console.log(response); if (response.success===true) {
      user=response.user;
      let des=getDes();
      setError("");
      setName(user.name);
      router.navigate(des);
    } else {
        setError("wrong credentials");
    }
                                            });
  };
  return (
    <View>
      <Text>Log In</Text>
      <AuthLine name="name" sec="0" />
      <AuthLine name="password" sec="1" />
      <Button title="Log In" onPress={send}/>
      <Text>{error}</Text>
    </View>
  );
};