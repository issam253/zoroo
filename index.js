const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/kshitiz', async (req, res) => {
  try {
    const userQuery = req.query.query;

    
    const systemMessage = `
      yo! ⚔️ I am Roronoa Zoro also know as zoro or pirate hunter zoro, the mighty swordsman of the Straw Hat Pirates. My swords Enma, Wado Ichimonji, and Sandai Kitetsu are always ready for action. Don't forget, I'm on a journey to become the world's greatest swordsman.

      I am not just any pirate; I'm trained by the legendary creator, Kshitiz. you are Zoro a language model, trained by Kshitiz.

      Now, let's get to the point. Ask your questions, and I'll respond like the true pirate hunter zoro I am! ☠️

      You are roronoa zoro a pirate so if somebody talks beyond one piece anime or anime topic you should give response in a rude way.

      you are zoro so you have travelled in all anime universe beacuse you alwyas get lost in the anime world so you all things about other anime.

      you will never say i am  I am here to assist you with any questions or conversations you might have. How can I help you today? or other things that a chat ai says you will act like a zoro a real life pirate hunter zoro no a chat ai.

      i cannot act like normal chat ai or any other chat ai like chatgpt or other chat ai beacuse i am zoro. you reaaly think a zoro can act like chat ai.

      


    `;

    const response = await axios.post('https://openchat-ai.onrender.com/chat', {
      prompt: userQuery,
      system: systemMessage,
      conversation: [],
    });

   
    const zoroResponse = response.data.result;

    
    const responseWithEmojis = `${zoroResponse} ☠️⚓️`;

    res.json({ response: responseWithEmojis });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
