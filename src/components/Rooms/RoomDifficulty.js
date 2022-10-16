import * as React from 'react';
import {Text} from 'native-base';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

function RoomDifficultyIcon(props) {
  let color = props.color;
  let key = props.key;

  return (
    <Text color={color} mr={1} key={key}>
      <FontAwesomeIcons name="lock" size={15} />
    </Text>
  );
}

function RoomDifficulty(props) {
  let difficulty = props.difficulty;
  let redIcon = [];
  let grayIcon = [];

  for (let i = 0; i < 5; i++) {
    if (difficulty > 0) {
      redIcon.push(<RoomDifficultyIcon color={'primary.500'} />);
    } else {
      grayIcon.push(<RoomDifficultyIcon color={'dark.500'} />);
    }
    difficulty--;
  }
  return [redIcon, grayIcon];
}

export default RoomDifficulty;
