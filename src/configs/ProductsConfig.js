import uuid from 'react-native-uuid';

module.exports = [
  {
    id: uuid.v4(),
    productId: 'peapp_499_game01',
    title: 'Mission: Unpausable',
    purchased: true,
    difficulty: '2',
    imageURL:
      'https://images.ctfassets.net/aofh5t0xnpi5/TiQIyUysGEGcqDLhoYSoC/a30dc46529c3ff5ce8de2f0cac9fa32e/Logo.jpg',
  },
  {
    id: uuid.v4(),
    productId: 'com.projectescape.projectescapeapp.game2', //peapp_499_game02
    title: 'Spaceship: Rogue',
    purchased: false,
    difficulty: '3',
    imageURL:
      'https://images.ctfassets.net/aofh5t0xnpi5/TiQIyUysGEGcqDLhoYSoC/a30dc46529c3ff5ce8de2f0cac9fa32e/Logo.jpg',
  },
];
