import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Counter = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('countの更新に付随する処理');

    if (count % 3 === 0) {
      console.log('３の倍数です');
    }
  }, [count]);

  return (
    <>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text>{count}</Text>
      </TouchableOpacity>
      {count === 5 && <Text>５です</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: 'gold',
  },
});
