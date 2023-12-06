/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useMeeting} from '@videosdk.live/react-native-sdk';

const Button = ({onPress, buttonText, backgroundColor}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 4,
      }}>
      <Text style={{color: 'white', fontSize: 12}}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

function ControlsContainer() {
  const {join, leave, toggleWebcam, toggleMic, changeWebcam} = useMeeting();

  return (
    <View style={{flexDirection: 'column'}}>
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          onPress={() => {
            join();
          }}
          buttonText={'Join'}
          backgroundColor={'#1178F8'}
        />
        <Button
          onPress={() => {
            toggleWebcam();
          }}
          buttonText={'Toggle Webcam'}
          backgroundColor={'#1178F8'}
        />
        <Button
          onPress={() => {
            toggleMic();
          }}
          buttonText={'Toggle Mic'}
          backgroundColor={'#1178F8'}
        />
        <Button
          onPress={() => {
            leave();
          }}
          buttonText={'Leave'}
          backgroundColor={'#FF0000'}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          onPress={() => {
            changeWebcam();
          }}
          buttonText={'Change Camera'}
          backgroundColor={'#222222'}
        />
      </View>
    </View>
  );
}

export default ControlsContainer;
