import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface WelcomeScreenProps {
  navigation: {
    navigate: (screenName: string) => void;
  };
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const handleSignIn = () => {
    navigation.navigate('SignInScreen');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    width: 100,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
