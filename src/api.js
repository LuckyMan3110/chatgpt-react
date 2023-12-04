import axios from 'axios';

const API_KEY = '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';

const api = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

export const sendMessage = async (message) => {
  try {
    const response = await api.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error sending message:', error);
  }
};