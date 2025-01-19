import axios from 'axios';
const apiKey='';


export const callChatGPT =async (prompt) => {
const response =await axios.post('https://api.openai.com/v1/chat/completions',
    {
        model:"gpt-3.5-turbo",
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,

    },
    {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
);

  return response.data.choices[0].text.trim()
  
};
