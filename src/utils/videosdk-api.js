/* eslint-disable no-shadow */
export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1NjgxNjZmYy00YTJhLTQ5NzktYTU3NC0wMThjNjFkZjllZWEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwMTc0NDM2OCwiZXhwIjoxNzMzMjgwMzY4fQ.wS13N-bUZ_JK8uLW9w8fQyv9Bukan-HLZBHoVid_qho';

// API call to create meeting
export const createMeeting = async ({token}) => {
  const res = await fetch('https://api.videosdk.live/v2/rooms', {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  const {roomId} = await res.json();
  return roomId;
};
