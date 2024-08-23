import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,SafeAreaView} from 'react-native';
//to avoid text on notch we use SafeAreaView
//Image component is use to use image in application


export default function App() {
  //here we have created funtion instead on writing console.log in onPress event
  const handlePress = () => (console.log("Text Clicked")); 
  return (
   /* <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */

    //to avoid text on notch we use SafeAreaView
    <SafeAreaView style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    </SafeAreaView>

    //numberOfLines is use to wrap the text in one line
    //onPress is use to run a funtion on press on something
    /*<SafeAreaView style={styles.container}>
    <Text numberOfLines={1} onPress={() => console.log("Text Clicked")}>Open up App.tsx to start working on your app!Abc Qwe fvf sf gbrs vtbr vdg dg wr nj occ e bbt  sgb </Text>
    </SafeAreaView>*/

    //Here we have replaced console.log in onPress by funtion
    /*<SafeAreaView style={styles.container}>
    <Text numberOfLines={1} onPress={handlePress}>Open up App.tsx to start working on your app!Abc Qwe fvf sf gbrs vtbr vdg dg wr nj occ e bbt  sgb </Text>
    </SafeAreaView>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",//align to center
    alignItems:"center",//align to center
  },
});
