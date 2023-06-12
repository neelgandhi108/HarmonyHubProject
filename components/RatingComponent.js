// import React, { useState } from 'react';
// import { TouchableOpacity, Text, View } from 'react-native';
// import styles from './styles'; // Assumption: Your styles are defined in styles.js file

// function RatingComponent({ categoryTitle }) {
//   const [selectedRating, setSelectedRating] = useState(0);

//   const buttons = Array.from({length: 7}, (_, i) => i + 1);

//   const getButtonStyle = (buttonNumber) => {
//     // Define your styles here
//   };

//   const getRatingButton = (buttonNumber) => (
//     <TouchableOpacity 
//       key={buttonNumber} 
//       style={getButtonStyle(buttonNumber)}
//       onPress={() => setSelectedRating(buttonNumber)}
//     >
//       <Text style={styles[`_${buttonNumber}`]}>{buttonNumber}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.RatingAll}>
//       <Text style={styles.categoryTitle}>{categoryTitle}</Text>
//       {buttons.map(getRatingButton)}
//     </View>
//   );
// }

// export default RatingComponent;
