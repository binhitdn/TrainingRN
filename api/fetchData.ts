import axios from 'axios';

interface User {
  id: number;
  name: string;
  company: {
    name: string;
  };
}

export const fetchData = async () => {
  try {
    const response = await axios.get<User[]>(
      'https://jsonplaceholder.typicode.com/users',
    );
    return response.data;
  } catch (e) {
    throw new Error('エラーが発生しました');
  }
};
