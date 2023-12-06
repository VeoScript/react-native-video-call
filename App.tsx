/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {MeetingProvider} from '@videosdk.live/react-native-sdk';
import {createMeeting, token} from './src/utils/videosdk-api';

import JoinScreen from './src/components/JoinScreen';
import MeetingView from './src/components/MeetingView';

export default function App() {
  const [meetingId, setMeetingId] = useState<string | null>(null);

  const getMeetingId = async (id: string) => {
    const initialMeetingId = id == null ? await createMeeting({token}) : id;
    setMeetingId(initialMeetingId);
  };

  return meetingId ? (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F6FF'}}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: true,
          name: 'Test User',
        }}
        token={token}>
        <MeetingView />
      </MeetingProvider>
    </SafeAreaView>
  ) : (
    <JoinScreen getMeetingId={getMeetingId} />
  );
}
