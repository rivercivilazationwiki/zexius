import { Link,useRouter } from "expo-router";
import { Text, View,StyleSheet,Button } from "react-native";
import styles from './styles';
function ButtonLink(props) {
  const router=useRouter();
  return (
    <View>
      <Button title={props.title} onPress={()=>router.navigate(props.href)}/>
    </View>
  );
};
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Samaria App</Text>
      <ButtonLink title="Sign Up" href="/SignUp"/>
      <View style={{height:20}} />
      <ButtonLink title="Log In" href="/LogIn"/>
    </View>
  );
}
