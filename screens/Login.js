import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import styles from "./Styles";

export default function loginScreen() {
  return (
    <View style={styles.container}>
      <Text style = {{justifyContent : 'center'}}>Hello, this is login page</Text>
      <StatusBar style="auto" />
    </View>
  );
}