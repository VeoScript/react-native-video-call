/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  MediaStream,
  RTCView,
  useMeeting,
  useParticipant,
} from '@videosdk.live/react-native-sdk';

import ControlsContainer from './ControlsContainer';

function ParticipantView({participantId}: any) {
  const {webcamStream, webcamOn} = useParticipant(participantId);

  return webcamOn && webcamStream ? (
    <RTCView
      mirror
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={'cover'}
      style={{
        height: 300,
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    />
  ) : (
    <View
      style={{
        backgroundColor: 'grey',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 16}}>NO MEDIA</Text>
    </View>
  );
}

function ParticipantList({participants}: any) {
  return participants.length > 0 ? (
    <FlatList
      data={participants}
      renderItem={({item}) => {
        return <ParticipantView participantId={item} />;
      }}
    />
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F6F6FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20}}>Press Join button to enter meeting.</Text>
    </View>
  );
}

function MeetingView() {
  const {participants, meetingId} = useMeeting();

  const participantsArrId = [...participants.keys()];

  return (
    <View style={{flex: 1}}>
      {meetingId ? (
        <Text style={{fontSize: 18, padding: 12, color: '#333'}}>
          Meeting Id :{meetingId}
        </Text>
      ) : null}
      <ParticipantList participants={participantsArrId} />
      <ControlsContainer />
    </View>
  );
}

export default MeetingView;
