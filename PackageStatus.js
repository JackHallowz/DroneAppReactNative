import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Text}   from "react-native";
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
const PackageStatus = () => {

  return (
    <QRCode value='Clive x Jill'/>
    
  );
}

export default PackageStatus;
