import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchData} from '../api/fetchData';

interface User {
  id: number;
  name: string;
  company: {
    name: string;
  };
}
const APIFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const userData = await fetchData();
      setUsers(userData);
      setLoading(false);
    } catch (e) {
      setError('エラーが発生しました');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {users.map(user => (
        <View key={user.id} style={styles.userContainer}>
          <Text style={styles.name}>
            {user.id} : {user.name}
          </Text>
          <Text style={styles.company}>{user.company.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default APIFetch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
  },
});
