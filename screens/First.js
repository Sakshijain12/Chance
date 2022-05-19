import { StatusBar } from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import styles from "./Styles";
import "./Login";
import "./SignUp";

export default function firstScreen() {
  return (
    <View style={styles.container}>
      <Image source = {require ('../assets/Wavy_Lst-01_Single-11.png')} style = {styles.img}></Image>
      <Image source = {require ('../assets/1.png')} style = {styles.logo}></Image>
      <Text style = {styles.text1}>The personality first connecting app</Text>
      <Text style = {styles.text2}>If you were a fruit, then you'd be a fine-apple</Text>
      <View style = {{flexDirection : 'row'}}>
        
        <View>
          <Text style = {styles.button1}>Login</Text>
        </View>
        
        <View>
          <Text style = {styles.button2}>Sign Up</Text>
        </View>
      </View>
      <StatusBar onstyle="auto" />
    </View>
  );
}