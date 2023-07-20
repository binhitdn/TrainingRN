// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {MyButton} from '../components/MyButtons';
// import {Counter} from '../components/Counter';
// import axios from 'axios';
// const App = () => {
//   return (
//     <View>
//       <MyButton buttonColor="red" buttonTitle="wHello" />
//       <Counter />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

// import * as React from 'react';
// import Navigation from '../Tab/Navigation';

// function App() {
//   return <Navigation />;
// }

// export default App;

import {StyleSheet, View} from 'react-native';
import React from 'react';
import APIFetch from '../screens/APIFetch';

const App = () => {
  return (
    <View style={styles.container}>
      <APIFetch />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
