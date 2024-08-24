import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Alert , Text, View,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity ,Image ,SafeAreaView, Button} from 'react-native';
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
    // <SafeAreaView style={styles.container}>
    // <Text>Open up App.tsx to start working on your app!</Text>
    // </SafeAreaView>

    //numberOfLines is use to wrap the text in one line
    //onPress is use to run a funtion on press on something
    /*<SafeAreaView style={styles.container}>
    <Text numberOfLines={1} onPress={() => console.log("Text Clicked")}>Open up App.tsx to start working on your app!Abc Qwe fvf sf gbrs vtbr vdg dg wr nj occ e bbt  sgb </Text>
    </SafeAreaView>*/

    //Here we have replaced console.log in onPress by funtion
    /*<SafeAreaView style={styles.container}>
    <Text numberOfLines={1} onPress={handlePress}>Open up App.tsx to start working on your app!Abc Qwe fvf sf gbrs vtbr vdg dg wr nj occ e bbt  sgb </Text>
    </SafeAreaView>*/

    //image
    // <SafeAreaView style={styles.container}>
    // <Text>Open up App.tsx to start working on your app!</Text>
    // <Image source={require('./assets/splash.png')}/>
    // </SafeAreaView>

    //to find the number of image we'll do this
    // console.log(require("./assets/icon.png"))

    //to import image from network
    // <SafeAreaView style={styles.container}>
    // <Text>Open up App.tsx to start working on your app!</Text>
    // <Image
    //   //blurradius is use to blur the image
    //   blurRadius={10}
    //   //fadeDuration is use to add fade effect on reload
    //   fadeDuration={1000}
    //   source={{
    //   width:200,
    //   height:200,
    //   uri:"https://picsum.photos/200"}}/>
    // </SafeAreaView>


    //TouchableWithoutFeedBack
    // <SafeAreaView style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
    //   <Image
    //     source={{
    //     width:200,
    //     height:200,
    //     uri:"https://picsum.photos/200"}}/>
    //   </TouchableWithoutFeedback>
    // </SafeAreaView>

//TouchableOpacity reduce the opacity of image on tap
    // <SafeAreaView style={styles.container}>
    // <Text>Open up App.tsx to start working on your app!</Text>
    // <TouchableOpacity onPress={() => console.log("Image tapped")}>
    // <Image
    //   source={{
    //   width:200,
    //   height:200,
    //   uri:"https://picsum.photos/200"}}/>
    // </TouchableOpacity>
    // </SafeAreaView>

    //TouhableHighLight dark's bg for tab
    // <SafeAreaView style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <TouchableHighlight onPress={() => console.log("Image tapped")}>
    //   <Image
    //     source={{
    //     width:200,
    //     height:200,
    //     uri:"https://picsum.photos/200"}}/>
    //   </TouchableHighlight>
    //   </SafeAreaView>

    //button
    // <SafeAreaView style={styles.container}>
    //   <Button 
    //   color="pink"
    //   title='Clickme' onPress={() => console.log("Button tapped")}/>
    // </SafeAreaView>

    //alert function
    // <SafeAreaView style={styles.container}>
    //   <Button 
    //   color="pink"
    //   title='Clickme' onPress={() => alert("Alert works")}/>
    // </SafeAreaView>

    //Alret with alert custom button 
    // <SafeAreaView style={styles.container}>
    //   <Button 
    //   color="pink"
    //   title='Clickme' 
    //   onPress={() => Alert.alert("My title","My message",[
    //     {text:"YES", onPress:() => console.log("yes is clicked")},
    //     {text:"NO", onPress:() => console.log("on is clicked")},
    //   ])}/>
    // </SafeAreaView>

    //promt is only for IOS
    <SafeAreaView style={ styles.container}>
    <Button 
    color="pink"
    title='Clickme' 
    onPress={() => Alert.prompt("My title","My message",text => console.log(text))}
    />
  </SafeAreaView>
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
