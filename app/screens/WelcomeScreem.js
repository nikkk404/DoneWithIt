import React from 'react';
import { ImageBackground,StyleSheet, View,Image } from 'react-native';

function WelcomeScreem(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={(require('../assets/background.jpeg'))}>
            <Image 
            resizeMode="contain"
            styles={styles.Logo} source={require('../assets/logo.jpeg')}/>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    loginButton:{
        width:'100%',
        height:70,
        backgroundColor:'#fc5c65'
    },
    Logo:{
        width:'100%',
        height:'100%',
        position:"absolute",
        top:70,
    },
    registerButton:{
        width:'100%',
        height:70,
        backgroundColor:'#4ecdc4'
    },
})
export default WelcomeScreem;