import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View>
      <Text>Hi</Text>
      <Link href={"/SignUp"} >Make a new Account</Link>
    </View>
  );
}
