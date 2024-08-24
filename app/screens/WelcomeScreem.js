import React from 'react';
import { ImageBackground } from 'react-native';

function WelcomeScreem(props) {
    return (
        <ImageBackground source={(require('./icon.png'))}></ImageBackground>
    );
}

export default WelcomeScreem;