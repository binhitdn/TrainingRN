import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const MyButton = ({
  buttonTitle,
  buttonColor,
}: {
  buttonTitle: string;
  buttonColor: string;
}) => {
  const [title, setTitle] = useState('ボタン');
  return (
    <TouchableOpacity
      onPress={() => setTitle('タップされました')}
      //   onPress={console.log(buttonTitle)}
      // Answer: この場合、コンポーネントが初期化されたときにが実行されます。
      //   onPress={()=>console.log(buttonTitle)}
      // Answer: この場合、ボタンが押されたときにが実行されます。
      style={[styles.button, {backgroundColor: buttonColor}]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
  },
});
