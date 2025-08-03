import { Link,useRouter } from "expo-router";
import { Text, View,StyleSheet,Button } from "react-native";
const styles=StyleSheet.create({
  link: {
    color:"blue",
    textDecorationLine:"underline"
  }
});
function ButtonLink(props) {
  const router=useRouter();
  return (
    <View>
      <Button title={props.title} onPress={()=>router.navigate(props.href)} />
    </View>
  );
};
export default function Index() {
  return (
    <View>
      <Text style={{fontSize:32}}>Welcome to Samaria App</Text>
      <ButtonLink title="Sign Up" href="/SignUp" />
      <ButtonLink title="Log In" href="/LogIn" />
    </View>
  );
}
