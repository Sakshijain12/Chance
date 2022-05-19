import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import styles from "./Styles";

export default function signUpScreen() {
  return (
    <View style={styles.container}>
      <Text style = {{justifyContent : 'center'}}>Hello, this is Sign Up page</Text>
      <StatusBar style="auto" />
    </View>
  );
}