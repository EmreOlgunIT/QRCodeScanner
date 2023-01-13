/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {
  Text,
  Alert,
  View,
} from 'react-native';

//import { registerRootComponent } from 'expo' //Needed for expo to work

import { 
  CameraScreen, 
  Camera, 
  CameraType 
} from 'react-native-camera-kit';

const App: () => Node = () => {  


  
  return (
    
  <CameraScreen
    ref={(ref) => (this.camera = ref)}
    cameraType={CameraType.Front} // front/back(default)
  
    // Barcode props
    scanBarcode={true}
    onReadCode={(event) => console.log(event.nativeEvent.codeStringValue)}
    showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
    laserColor='red' // (default red) optional, color of laser in scanner frame
    frameColor='white' // (default white) optional, color of border of scanner frame
  />
   
   
  );
};

//registerRootComponent(App); //Expo

export default App;
